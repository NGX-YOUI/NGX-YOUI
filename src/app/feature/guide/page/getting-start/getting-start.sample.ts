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
        code: `@import '~ngx-youi/style/component/breadcrumb.css';`
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