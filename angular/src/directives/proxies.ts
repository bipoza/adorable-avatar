/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@adorable-avatar/core';


export declare interface AdorableAvatar extends Components.AdorableAvatar {}
@ProxyCmp({
  inputs: ['color', 'name', 'shape', 'size', 'src', 'type']
})
@Component({
  selector: 'adorable-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'name', 'shape', 'size', 'src', 'type']
})
export class AdorableAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
