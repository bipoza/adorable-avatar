import { NgModule } from "@angular/core";
import { defineCustomElements } from "@adorable-avatar/core/loader";
import { AdorableAvatar } from "./directives/proxies";
defineCustomElements(window);
const DECLARATIONS = [
    // proxies
    AdorableAvatar
];
export class AdorableAvatarModule {
}
AdorableAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRvcmFibGUtYXZhdGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG9yYWJsZS1hdmF0YXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLE1BQU0sWUFBWSxHQUFHO0lBQ25CLFVBQVU7SUFDVixjQUFjO0NBQ2YsQ0FBQztBQVFGLE1BQU0sT0FBTyxvQkFBb0I7OztZQU5oQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tIFwiQGFkb3JhYmxlLWF2YXRhci9jb3JlL2xvYWRlclwiO1xuXG5pbXBvcnQgeyBBZG9yYWJsZUF2YXRhciB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvcHJveGllc1wiO1xuXG5kZWZpbmVDdXN0b21FbGVtZW50cyh3aW5kb3cpO1xuXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXG4gIC8vIHByb3hpZXNcbiAgQWRvcmFibGVBdmF0YXJcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogREVDTEFSQVRJT05TLFxuICBleHBvcnRzOiBERUNMQVJBVElPTlMsXG4gIGltcG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFkb3JhYmxlQXZhdGFyTW9kdWxlIHt9XG4iXX0=