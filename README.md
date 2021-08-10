# TO SHOW assets in Angular
Add assets setting to angular.json into build:{assets:'**'}

```JSON
"assets": [
    "src/favicon.ico",
    "src/assets",
    {
    "glob": "**/*",
    "input": "./node_modules/@adorable-avatar/angular/assets",
    "output": "/assets/"
    }
],
```