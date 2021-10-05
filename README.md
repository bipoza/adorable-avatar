
# Adorable Avatars component!

Automatic avatar generator for any web frontend! For Angular, React, Vue and HTML web components.


Based on the project https://github.com/itsthatguy/avatars-api-middleware this component has been created to be used directly on the frontend without the need to maintain a server.

![Example](./docs/example.png)


## How to use

### HTML [Example](https://codesandbox.io/s/adorable-avatar-core-html-pz8no?file=/index.html:259-274)

Via npm:
```bash
npm install @adorable-avatar/core
```

Via CDN:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@adorable-avatar/core@0.0.2/dist/adorable-avatar/adorable-avatar.esm.js"></script>
```
Use it!
```html
<adorable-avatar name="bipoza" shape="round"></adorable-avatar>
```
![User Example](./docs/user_example.png)


### Angular [Example](https://codesandbox.io/s/adorable-avatar-angular-angular-0yp0w?file=/src/app/app.component.html)

1. Install the package

```BASH
$ npm install @adorable-avatar/angular --save
```
2. Import the module

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

3. Use it!

```HTML
<adorable-avatar name="bipoza" shape="round"></adorable-avatar>
```


### React (WIP)

Install the package
```bash
npm install @adorable-avatar/react --save
```
Use it!
```javascript
import AdorableAvatar from '@adorable-avatar/react'

function App() {
  return <AdorableAvatar name="bipoza" shape="round" />
}
```

  
## Documentation (WIP)

[Documentation](https://linktodocumentation)

  
## Contributing

Contributions are always welcome!

<!--See `contributing.md` for ways to get started. (WIP) -->


  
## Authors

- [@bipoza](https://www.github.com/bipoza)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
