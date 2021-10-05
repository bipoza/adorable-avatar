import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
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
                inputs: ['color', 'name', 'shape', 'size', 'src', 'type']
            },] }
];
AdorableAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
AdorableAvatar = __decorate([
    ProxyCmp({
        inputs: ['color', 'name', 'shape', 'size', 'src', 'type']
    })
], AdorableAvatar);
export { AdorableAvatar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3Byb3hpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sK0JBQStCLENBQUM7SUFlMUQsY0FBYyxTQUFkLGNBQWM7SUFFekIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7O1lBWkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQzthQUMxRDs7O1lBZmlDLGlCQUFpQjtZQUFhLFVBQVU7WUFBRSxNQUFNOztBQWdCckUsY0FBYztJQVQxQixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztLQUMxRCxDQUFDO0dBT1csY0FBYyxDQU0xQjtTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gJy4vYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJ0BhZG9yYWJsZS1hdmF0YXIvY29yZSc7XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFkb3JhYmxlQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50cy5BZG9yYWJsZUF2YXRhciB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ25hbWUnLCAnc2hhcGUnLCAnc2l6ZScsICdzcmMnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRvcmFibGUtYXZhdGFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydjb2xvcicsICduYW1lJywgJ3NoYXBlJywgJ3NpemUnLCAnc3JjJywgJ3R5cGUnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG9yYWJsZUF2YXRhciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=