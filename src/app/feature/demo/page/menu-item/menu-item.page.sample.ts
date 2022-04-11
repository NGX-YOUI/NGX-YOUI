import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const MenuItemSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/menu-item.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { MenuItemModule } from 'ngx-youi';

@NgModule({
  imports: [MenuItemModule],
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
        code: `<youi-menu-item>
  Basic
</youi-menu-item>
<youi-menu-item
  titleLabel="title Label"
  preIconName="toc"
>
</youi-menu-item>
<youi-menu-item
  titleLabel="Has End Icon"
  preIconName="grade"
  lastIconName="lock_open"
>
</youi-menu-item>
<youi-menu-item
  titleLabel="Disabled"
  preIconName="info"
  [disabled]="true"
>
</youi-menu-item>`
      }
    ] 
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-menu-item
  cssClass="custom-menu"
  titleLabel="Style Menu"
  preIconName="mouse"
>
</youi-menu-item>

<youi-menu-item
  cssClass="custom-menu"
  [disabled]="true"
  titleLabel="Style Menu (Disabled)"
  preIconName="mouse"
>
</youi-menu-item>

<youi-menu-item
  cssClass="custom-menu"
  activeCSSClass="custom-active-menu"
  [isActive]="true"
  titleLabel="Style Menu (Active)"
  preIconName="mouse"
>
</youi-menu-item>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-menu {
  background-color: rgb(254 240 138);
  color: rgb(161 98 7);
}

::ng-deep .custom-menu:hover {
  background-color: rgb(234 179 8);
  color: rgb(255 255 255);
}

::ng-deep .custom-menu:active {
  background-color: rgb(229 231 235);
  color: rgb(55 65 81);
}

::ng-deep .custom-menu:disabled, ::ng-deep .custom-menu:disabled:hover {
  background-color: rgb(229 231 235);
  color: rgb(156 163 175);
}

::ng-deep .custom-active-menu, ::ng-deep .custom-active-menu:hover {
  background-color: rgb(187 247 208);
  color: rgb(21 128 61);
}`
      }  
    ]
  } ,
  routerLink: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<youi-menu-item
  cssClass="custom-router-link-menu"
  preIconName="home"
  routerLink="/"
  routerLinkActive="text-blue-500"
  [routerLinkActiveOptions]="{ exact: true }"
>
  Router Link to Home
</youi-menu-item>
<youi-menu-item
  cssClass="custom-router-link-menu"
  preIconName="home"
  lastIconName="link"
  routerLink="/"
  [disabled]="true"
  routerLinkActive="text-blue-500"
  [routerLinkActiveOptions]="{ exact: true }"
>
  Router Link to Home
</youi-menu-item>
<youi-menu-item
  cssClass="custom-router-link-menu"
  preIconName="help"
  routerLink="/demo/youi-menu-item"
  routerLinkActive="router-menu-active"
  [routerLinkActiveOptions]="{ exact: true }"
>
  Current Route Active
</youi-menu-item>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .router-menu-active > .custom-router-link-menu, ::ng-deep .router-menu-active:hover > .custom-router-link-menu {
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
}`
      }
    ]
  },
  active: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-menu-item
  titleLabel="item 1"
  preIconName="settings"
  (click)="activeItem = 'item 1'"
  [isActive]="activeItem === 'item 1'"
  activeCSSClass="menu-active"
>
</youi-menu-item>
<youi-menu-item
  titleLabel="item 2"
  preIconName="verified"
  (click)="activeItem = 'item 2'"
  [isActive]="activeItem === 'item 2'"
  activeCSSClass="menu-active"
>
</youi-menu-item>
<youi-menu-item
  titleLabel="item 3"
  [disabled]="true"
  preIconName="lightbulb"
  (click)="activeItem = 'item 3'"
  [isActive]="activeItem === 'item 3'"
  activeCSSClass="menu-active"
>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .menu-active, ::ng-deep .menu-active:hover {
  background-color: rgb(239 68 68);
  color: rgb(255 255 255);
}`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  activeItem: string = 'item 1'
}`
      }
    ]
  },
  insetLevel: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-menu-item>
  Basic Default Level 0
</youi-menu-item>
<youi-menu-item
  [insetLevel]="1"
>
  Basic Level 1
</youi-menu-item>
<youi-menu-item
  [insetLevel]="1"
>
  Basic Level 1
</youi-menu-item>
<youi-menu-item
  [insetLevel]="2"
>
  Basic Level 2
</youi-menu-item>
<youi-menu-item
  [insetLevel]="3"
>
  Basic Level 3
</youi-menu-item>`
      }
    ]
  },
  withExpansionMenu: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-menu-item
  titleLabel="Level 0"
  preIconName="room"
>
  <youi-menu-item
    titleLabel="Level 1"
    [insetLevel]="1"
  >
  </youi-menu-item>
  <youi-expansion-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
  >
    <youi-menu-item
      titleLabel="Level 2"
      [insetLevel]="2"
    >
    </youi-menu-item>
  </youi-expansion-menu-item>
  <youi-expansion-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="room"
  >
    <youi-menu-item
      titleLabel="Level 2"
      [insetLevel]="2"
      preIconName="room"
    >
    </youi-menu-item>
  </youi-expansion-menu-item>
</youi-expansion-menu-item>

<youi-expansion-menu-item
  titleLabel="Level 0"
  preIconName="room"
  [isActive]="true"
  headerActiveCSSClass="text-blue-500"
>
  <youi-menu-item
    titleLabel="Level 1"
    preIconName="pets"
    [insetLevel]="1"
  >
  </youi-menu-item>
  <youi-menu-item
    titleLabel="Level 1"
    preIconName="pets"
    [insetLevel]="1"
    [isActive]="true"
    activeCSSClass="text-blue-500"
  >
  </youi-menu-item>
  <youi-expansion-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="room"
  >
    <youi-menu-item
      titleLabel="Level 2"
      [insetLevel]="2"
      preIconName="pets"
    >
    </youi-menu-item>
  </youi-expansion-menu-item>
  <youi-expansion-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
  >
    <youi-menu-item
      titleLabel="Level 2"
      [insetLevel]="2"
    >
    </youi-menu-item>
  </youi-expansion-menu-item>
</youi-expansion-menu-item>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .text-blue-500 {
  color: rgb(59 130 246);
}`
      }
    ]
  },
  template: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-menu-item
>
  Custom Template

  <ng-template #prepend>
    <div class="shadow-sm p-2 bg-green-200">
      <span class="text-emerald-500 font-bold">Prepend</span>
    </div>
  </ng-template>

  <ng-template #append>
    <div class="shadow-sm p-2 bg-rose-200">
      <span class="text-rose-700 font-bold">Append</span>
    </div>
  </ng-template>
</youi-menu-item>`
      },
      {
        title: 'component.css',
        code: `.bg-green-200 {
  background-color: rgb(187 247 208);
}

.bg-rose-200 {
  background-color: rgb(254 205 211);
}

.p-2 {
  padding: 0.5rem;
}

.font-bold {
  font-weight: 700;
}

.text-emerald-500 {
  color: rgb(16 185 129);
}

.text-rose-700 {
  color: rgb(190 18 60);
}

.shadow-sm {
  box-shadow: box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}`
      }
    ]
  }  
}