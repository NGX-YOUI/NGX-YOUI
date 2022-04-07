import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const DropdownSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/dropdown.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { DropdownModule } from 'ngx-youi';

@NgModule({
  imports: [DropdownModule],
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
        code: `<button class="btn btn-orange" youi-dropdown-trigger [targetDropdown]="dropdown">click</button>
<youi-dropdown-menu #dropdown="youiDropdownMenu">
  <youi-menu-item youi-dropdown-item titleLabel="item 1"></youi-menu-item>
  <youi-menu-item youi-dropdown-item titleLabel="item 2"></youi-menu-item>
  <youi-menu-item titleLabel="item 3 (not close)"></youi-menu-item>
</youi-dropdown-menu>`
      }
    ] 
  },
  position: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<button class="btn btn-red"
  youi-dropdown-trigger 
  [targetDropdown]="dropdown2">Left Down(Default)</button>
<button class="btn btn-yellow"
  youi-dropdown-trigger
  [targetDropdown]="dropdown2"
  position="rightBottom">Right Bottom</button>
<button class="btn btn-blue"
  youi-dropdown-trigger 
  [targetDropdown]="dropdown2"
  position="leftTop">Left top</button>
<button class="btn btn-green"
  youi-dropdown-trigger 
  [targetDropdown]="dropdown2"
  position="rightTop">Right top</button>

<youi-dropdown-menu #dropdown2="youiDropdownMenu">
  <youi-menu-item youi-dropdown-item titleLabel="item 1"></youi-menu-item>
  <youi-menu-item youi-dropdown-item titleLabel="item 2"></youi-menu-item>
  <youi-menu-item titleLabel="item 3 (not close)"></youi-menu-item>
</youi-dropdown-menu>`
      }
    ]
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-gray"
  youi-dropdown-trigger
  [targetDropdown]="dropdown3">Style Dropdown</button>
<youi-dropdown-menu #dropdown3="youiDropdownMenu" dropdownCSSClass="custom-dropdown">
  <div class="custom-dropdown-title">
    Title
  </div>
  <youi-menu-item youi-dropdown-item titleLabel="item 1"></youi-menu-item>
  <youi-menu-item youi-dropdown-item titleLabel="item 2"></youi-menu-item>
  <youi-menu-item titleLabel="item 3 (not close)"></youi-menu-item>
</youi-dropdown-menu>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-dropdown {
  background-color: rgb(55 65 81);
  color: rgb(255 255 255);
  box-shadow: none;
}

::ng-deep .custom-dropdown-title {
  background-color: rgb(253 224 71);
  padding: 0.75rem;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(161 98 7);
}`
      }
    ]
  },
  subMenu: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-cyan" youi-dropdown-trigger [targetDropdown]="dropdown4">Sub Dropdown</button>

<youi-dropdown-menu #dropdown4="youiDropdownMenu">
  <youi-menu-item youi-dropdown-trigger [targetDropdown]="dropdown4_2" position="right" leftRight="right" titleLabel="item 1"></youi-menu-item>
  
  <youi-dropdown-menu #dropdown4_2="youiDropdownMenu">
    <youi-menu-item youi-dropdown-trigger titleLabel="sub_item 1_1" [targetDropdown]="dropdown4_3" position="right" leftRight="right">
    </youi-menu-item>
    <youi-menu-item youi-dropdown-item titleLabel="sub_item 1_2"></youi-menu-item>

    <youi-dropdown-menu #dropdown4_3="youiDropdownMenu">
      <youi-menu-item youi-dropdown-item titleLabel="sub_item 1_1_1"></youi-menu-item>
    </youi-dropdown-menu>
  </youi-dropdown-menu>
</youi-dropdown-menu>`
      }
    ]
  },
  contextMenu: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<div class="h-[150px] cursor-pointer border border-solid border-gray-300 flex justify-center items-center" 
  youi-dropdown-trigger [targetDropdown]="dropdown5" [contextMode]="true">
  Click right mouse
</div>
<youi-dropdown-menu #dropdown5="youiDropdownMenu">
  <youi-menu-item youi-dropdown-item titleLabel="item 1"></youi-menu-item>
  <youi-menu-item youi-dropdown-item titleLabel="item 2"></youi-menu-item>
</youi-dropdown-menu>`
      }
    ]
  }  
}