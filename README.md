# NGX-YOUI

<a href="https://www.npmjs.com/package/ngx-youi">
  <img src="https://img.shields.io/npm/v/ngx-youi.svg" alt="npm">
</a>

<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>


NGX-YOUI is an Angular UI Library that can be <strong>highly customized with content and styles.</strong>
You can easily integrate with other CSS frameworks and UI Library, such as Tailwind, Bootstrap, PrimeNG, Angular Material etc.

1. Customize the presentation content of components through ng-template or dynamic custom components.
1. Customize the rendering style of the component through CSSClass properties.

## Document
https://ngx-youi.github.io/NGX-YOUI/

## Demo
https://ngx-youi.github.io/NGX-YOUI/auth/user/list

## NPM
https://www.npmjs.com/package/ngx-youi

## Getting Start
### How To Install
```
npm i ngx-youi --save
```

### Import Material Icon font
#### Append Below setting in "YOUR_PROJECT.architect.build.options.assets" of angular.json
```
architect": {
  ...,
  "build": {
    ...,
    "options": {
      "assets": {
        {
          "glob": "**/*.woff",
          "input": "./node_modules/material-icons/iconfont",
          "output": "/assets/material-icons/iconfont"
        },
        {
          "glob": "**/*.woff2",
          "input": "./node_modules/material-icons/iconfont",
          "output": "/assets/material-icons/iconfont"
        }
      }
    }
  }
}
```

#### Preload Material Icon Font in \<head> of index.html
```
<!doctype html>
<html>
  <head>
    ...  
    <!-- Material icon -->
    <link rel="preload" href="assets/material-icons/iconfont/material-icons.woff" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-outlined.woff" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-round.woff" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-sharp.woff" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons.woff2" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-outlined.woff2" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-round.woff2" as="font" crossorigin>
    <link rel="preload" href="assets/material-icons/iconfont/material-icons-sharp.woff2" as="font" crossorigin>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```


### Import SVG Loaders
#### Append Below setting in "YOUR_PROJECT.architect.build.options.assets" of angular.json
```
architect": {
  ...,
  "build": {
    ...,
    "options": {
      "assets": {
        {
          "glob": "**/*",
          "input": "./node_modules/svg-loaders/svg-smil-loaders",
          "output": "/assets/svg-loaders/"
        }
      }
    }
  }
}
```

### Import CSS
#### Import a CSS file for all components
```css
/* style.css */

@import '~ngx-youi/style/index.css';
```

#### Import a CSS file for a single component (Tree Shaking)
```css
/* style.css */

/* import youi-common.css before import css of component */
@import "~ngx-youi/style/youi-common.css";
@import '~ngx-youi/style/component/breadcrumb.css';
```

### Import Module
#### Import a module file for all components
```ts
// app.module.ts

import { NgModule } from "@angular/core";
import { NgxYouiModule } from "ngx-youi"

@NgModule({
  imports: [..., NgxYouiModule]
})

export class AppModule {}
```

#### Import a module file for a single component (Tree Shaking)
```ts
// app.module.ts

import { NgModule } from "@angular/core";
import { BreadcrumbModule } from 'ngx-youi';

@NgModule({
  imports: [..., BreadcrumbModule],
})
  
export class AppModule {}
```