# How to use it in Angular

This is an example to use adorable-avatar with Angular

## 1. Install the package

```BASH
$ npm install @adorable-avatar/angular --save
```

## 2. Import the module

```TS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdorableAvatarModule } from '@adorable-avatar/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdorableAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 3. Use it!

```HTML
<adorable-avatar name="bipoza" shape="round"></adorable-avatar>
```
