import { NgModule } from "@angular/core";
import { defineCustomElements } from "@adorable-avatar/core/loader";

import { AdorableAvatar } from "./directives/proxies";

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  AdorableAvatar
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class AdorableAvatarModule {}
