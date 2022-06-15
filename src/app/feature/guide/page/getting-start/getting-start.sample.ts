import { ICodeTab } from "src/app/feature/demo/component/code-tab/ICodeTab";

export const GettingStartSample: { [key:string]: ICodeTab } = {
  installPackage: {
    expanded: true,
    examples: [
      { 
        title: 'PC Terminal',
        code: `npm install ngx-youi --save`
      }
    ]
  },
  importMaterialIcon: { 
    expanded: true,
    examples: [
      {
        title: 'angular.json',
        code: `"architect": {
  ...,
  "build": {
    ...,
    "options": {
      "assets": {
        ... ,
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
}`
      },
      {
        title: 'index.html',
        code: `<!doctype html>
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
</html>`
      }
    ]
  },
  importSvgLoadersAndIcon: {
    expanded: true,
    examples: [
      {
        title: 'angular.json',
        code: `"architect": {
  ...,
  "build": {
    ...,
    "options": {
      "assets": {
        ... ,
        {
          "glob": "**/*",
          "input": "./node_modules/svg-loaders/svg-smil-loaders",
          "output": "/assets/svg-loaders/"
        },
      }
    }
  }
}`
      }
    ]
  },
  importAllCss: {
    expanded: true,
    examples: [
      { 
        title: 'style.css',
        code: `@import '~ngx-youi/style/index.css';`
      }
    ]
  },
  importOneCss: {
    expanded: true,
    examples: [
      { 
        title: 'style.css',
        code: `/* import youi-common.css before import css of component */
@import "~ngx-youi/style/youi-common.css";
@import '~ngx-youi/style/component/breadcrumb.css';`
      }
    ]
  },
  importAllModule: {
    expanded: true,
    examples: [
      { 
        title: 'app.module.ts',
        code: `import { NgModule } from "@angular/core";
import { NgxYouiModule } from "ngx-youi"

@NgModule({
  imports: [..., NgxYouiModule]
})

export class AppModule {}`
      }
    ]
  },

  importOneModule: {
    expanded: true,
    examples: [
      { 
        title: 'app.module.ts',
        code: `import { NgModule } from "@angular/core";
import { BreadcrumbModule } from 'ngx-youi';

@NgModule({
  imports: [..., BreadcrumbModule],
})
  
export class AppModule {}`
      }
    ]
  }
}