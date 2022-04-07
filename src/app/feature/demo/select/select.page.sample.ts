import { ICodeTab } from "../component/code-tab/ICodeTab";

export const SelectSample: { [key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/select.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { SelectModule } from 'ngx-youi';

@NgModule({
  imports: [SelectModule],
})

export class YourModuleClass {}`
      }
    ]
  },
  basic: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-select [options]="options">
</youi-select>

<youi-select [(ngModel)]="ngModelBinding" [options]="options">
</youi-select>

<youi-select [(ngModel)]="ngModelBinding" [disableControl]="true" [options]="options">
</youi-select>`
      },
      {
        title: 'component.ts',
        code: `import { IOption } from 'ngx-youi'

export class YourComponentClass {
  options: IOption<number>[] = [
    { label: 'test', value: 0 },
    { label: 'test2', value: 1 },
  ]

  ngModelBinding = 0
}`
      }
    ] 
  },
  withOptionTag: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<youi-select [(ngModel)]="ngModelBinding">
  <youi-select-option label="test" [value]="0"></youi-select-option>
  <youi-select-option label="test2" [value]="1"></youi-select-option>
</youi-select>

<youi-select [(ngModel)]="ngModelBinding">
  <youi-select-option [value]="0">
    <div class="flex items-center"><span class="material-icons">search</span> test
    </div>
  </youi-select-option>
  <youi-select-option [value]="1">
    <div class="flex items-center">
      <span class="material-icons">search</span> test2
    </div>
  </youi-select-option>
</youi-select>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  ngModelBinding = 0
}`
      }
    ]
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-select [options]="options" [(ngModel)]="ngModelBinding"
             bodyCSSClass="custom-select-body" 
             optionsMenuCSSClass="custom-select-option-menu"
             optionCSSClass="custom-select-option"
             optionActiveCSSClass="custom-select-option--active">
</youi-select>

<youi-select bodyCSSClass="custom-select-body" [(ngModel)]="ngModelBinding"
             optionsMenuCSSClass="custom-select-option-menu"
             optionCSSClass="custom-select-option"
             optionActiveCSSClass="custom-select-option--active">
  <youi-select-option label="test" [value]="0"></youi-select-option>
  <youi-select-option label="test2" [value]="1"></youi-select-option>
</youi-select>

<youi-select bodyCSSClass="custom-select-body" [(ngModel)]="ngModelBinding"
             optionsMenuCSSClass="custom-select-option-menu"
             optionCSSClass="custom-select-option"
             optionActiveCSSClass="custom-select-option--active"
>
  <youi-select-option class="custom-youi-select-option" activeCSSClass="custom-youi-select-option--active" label="test" [value]="0"></youi-select-option>
  <youi-select-option class="custom-youi-select-option2" activeCSSClass="custom-youi-select-option2-active" label="test2" [value]="1"></youi-select-option>
  <youi-select-option label="test3" [value]="3"></youi-select-option>
  <youi-select-option label="test4" [value]="4"></youi-select-option>
</youi-select>

<youi-select [options]="options" [(ngModel)]="ngModelBinding"
             [disableControl]="true"
             bodyCSSClass="custom-select-body" 
             bodyDisableCSSClass="custom-select-body-disabled"
             optionsMenuCSSClass="custom-select-option-menu"
             optionCSSClass="custom-select-option"
             optionActiveCSSClass="custom-select-option--active"
>
</youi-select>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-select-body {
  border-width: 1px;
  border-color: rgb(253 224 71);
  background-color: rgb(254 249 195);
  color: rgb(202 138 4);
}

::ng-deep .custom-select-body:focus {
  border-width: 2px;
  border-color: rgb(250 204 21);
}

::ng-deep .custom-select-option-menu {
  border-width: 0px;
  background-color: rgb(254 215 170);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

::ng-deep .custom-select-option {
  color: rgb(194 65 12);
}

::ng-deep .custom-select-option:hover {
  background-color: rgb(253 186 116);
}

::ng-deep .custom-select-option--active {
  background-color: rgb(249 115 22);
  color: rgb(255 255 255);
}

::ng-deep .custom-youi-select-option {
  background-color: rgb(191 219 254);
  color: rgb(59 130 246);
}

::ng-deep .custom-youi-select-option:hover {
  background-color: rgb(147 197 253);
}

::ng-deep .custom-youi-select-option--active {
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
}

::ng-deep .custom-youi-select-option2 {
  background-color: rgb(187 247 208);
  color: rgb(34 197 94);
}

::ng-deep .custom-youi-select-option2:hover {
  background-color: rgb(134 239 172);
}

::ng-deep .custom-youi-select-option2--active {
  background-color: rgb(34 197 94);
  color: rgb(255 255 255);
}

::ng-deep .custom-select-body-disabled {
  border-color: rgb(254 240 138);
  background-color: rgb(254 249 195);
  color: rgb(253 224 71);
}`
      },
      {
        title: 'component.ts',
        code: `import { IOption } from 'ngx-youi'

export class YourComponentClass {
  options: IOption<number>[] = [
    { label: 'test', value: 0 },
    { label: 'test2', value: 1 },
  ]

  ngModelBinding = 0
}`
      }
    ]
  }
}