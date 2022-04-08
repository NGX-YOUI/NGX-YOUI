# NGX-YOUI

NGX-YOUI is an Angular UI Library that can be <strong>highly customized with content and styles.</strong>
You can easily integrate with other CSS frameworks, such as Tailwind or Bootstrap.

1. Customize the presentation content of components through ng-template or dynamic custom components.
1. Customize the rendering style of the component through CSSClass properties.

## Document
https://ngx-youi.github.io/NGX-YOUI/

## Demo
https://ngx-youi.github.io/NGX-YOUI/auth/user/list

## NPM
https://www.npmjs.com/package/ngx-youi

## How To Install
```
npm i ngx-youi --save
```

## Import CSS
### Import a CSS file for all components
```css
/* style.css */

@import '~ngx-youi/style/index.css';
```

### Import a CSS file for a single component
```css
/* style.css */

@import '~ngx-youi/style/component/breadcrumb.css';
```

## Import Module
### Import a module file for all components
```ts
// app.module.ts

import { NgModule } from "@angular/core";
import { NgxYouiModule } from "ngx-youi"

@NgModule({
  imports: [..., NgxYouiModule]
})

export class AppModule {}
```

### Import a module file for a single component
```ts
// app.module.ts

import { NgModule } from "@angular/core";
import { BreadcrumbModule } from 'ngx-youi';

@NgModule({
  imports: [..., BreadcrumbModule],
})
  
export class AppModule {}
```