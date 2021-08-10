import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@adorable-avatar/core/loader';

const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    };
    return decorator;
}

let AdorableAvatar = class AdorableAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
AdorableAvatar.decorators = [
    { type: Component, args: [{
                selector: 'adorable-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['color', 'initials', 'name', 'rounded', 'size', 'src']
            },] }
];
AdorableAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AdorableAvatar = __decorate([
    ProxyCmp({
        inputs: ['color', 'initials', 'name', 'rounded', 'size', 'src']
    })
], AdorableAvatar);

defineCustomElements(window);
const DECLARATIONS = [
    // proxies
    AdorableAvatar
];
class AdorableAvatarModule {
}
AdorableAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AdorableAvatar, AdorableAvatarModule, ProxyCmp as ɵa };
//# sourceMappingURL=adorable-avatar-angular.js.map
