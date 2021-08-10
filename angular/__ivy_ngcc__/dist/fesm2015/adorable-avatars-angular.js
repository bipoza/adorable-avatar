import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, NgZone, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from '@adorable-avatar/core/loader';

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
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
AdorableAvatar.ɵfac = function AdorableAvatar_Factory(t) { return new (t || AdorableAvatar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
AdorableAvatar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AdorableAvatar, selectors: [["adorable-avatar"]], inputs: { name: "name", rounded: "rounded", size: "size", src: "src" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AdorableAvatar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
AdorableAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AdorableAvatar = __decorate([
    ProxyCmp({
        inputs: ['name', 'rounded', 'size', 'src']
    })
], AdorableAvatar);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AdorableAvatar, [{
        type: Component,
        args: [{
                selector: 'adorable-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['name', 'rounded', 'size', 'src']
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, null); })();

defineCustomElements(window);
const DECLARATIONS = [
    // proxies
    AdorableAvatar
];
class AdorableAvatarModule {
}
AdorableAvatarModule.ɵfac = function AdorableAvatarModule_Factory(t) { return new (t || AdorableAvatarModule)(); };
AdorableAvatarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AdorableAvatarModule });
AdorableAvatarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AdorableAvatarModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AdorableAvatarModule, { declarations: [AdorableAvatar], exports: [AdorableAvatar] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AdorableAvatar, AdorableAvatarModule, ProxyCmp as ɵa };

//# sourceMappingURL=adorable-avatars-angular.js.map