import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const ExpansionMenuItemSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/expansion-menu-item.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { ExpansionMenuItemModule } from 'ngx-youi';

@NgModule({
  imports: [ExpansionMenuItemModule],
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
        code: `<youi-expansion-youi-menu-item titleLabel="Area 1" preIconName="home">
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1"> </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1"> </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Area 2"
  preIconName="person"
  lastIconName="flash_off"
  lastOpenIconName="flash_on"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1"> </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1"> </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  headerCSSClass="bg-gray-200"
  contentCSSClass="p-3 bg-gray-100"
  titleLabel="Lorem ipsum dolor"
  preIconName="article"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus id
  augue nec porttitor. Cras ut velit libero. Suspendisse semper justo non
  libero lobortis, et commodo augue vehicula. Maecenas tincidunt, mi sit
  amet mattis iaculis, libero purus congue nisi, vel porttitor massa
  tellus id justo. Nulla magna ipsum, mollis non rutrum non, blandit at
  purus. Donec lobortis urna vitae eros efficitur viverra. Quisque
  placerat leo volutpat libero dictum semper. Donec mauris sem, ultrices
  ut porttitor at, rutrum sit amet ipsum. Etiam at molestie odio. Quisque
  viverra erat maximus metus vulputate, ut sodales enim tincidunt. Etiam
  et turpis cursus, sagittis est id, pharetra nibh.
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  headerCSSClass="bg-gray-200"
  contentCSSClass="p-3 bg-gray-100"
  titleLabel="Lorem ipsum dolor"
  preIconName="article"
  [disabled]="true"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus id
  augue nec porttitor. Cras ut velit libero. Suspendisse semper justo non
  libero lobortis, et commodo augue vehicula. Maecenas tincidunt, mi sit
  amet mattis iaculis, libero purus congue nisi, vel porttitor massa
  tellus id justo. Nulla magna ipsum, mollis non rutrum non, blandit at
  purus. Donec lobortis urna vitae eros efficitur viverra. Quisque
  placerat leo volutpat libero dictum semper. Donec mauris sem, ultrices
  ut porttitor at, rutrum sit amet ipsum. Etiam at molestie odio. Quisque
  viverra erat maximus metus vulputate, ut sodales enim tincidunt. Etiam
  et turpis cursus, sagittis est id, pharetra nibh.
</youi-expansion-youi-menu-item>`
      }
    ] 
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-youi-menu-item
  class="custom-lorem-expansion"
  titleLabel="Custom Lorem Expansion"
  headerCSSClass="custom-lorem-expansion-header"
  contentCSSClass="custom-lorem-expansion-content"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus id
  augue nec porttitor. Cras ut velit libero. Suspendisse semper justo non
  libero lobortis, et commodo augue vehicula. Maecenas tincidunt, mi sit
  amet mattis iaculis, libero purus congue nisi, vel porttitor massa
  tellus id justo. Nulla magna ipsum, mollis non rutrum non, blandit at
  purus. Donec lobortis urna vitae eros efficitur viverra. Quisque
  placerat leo volutpat libero dictum semper. Donec mauris sem, ultrices
  ut porttitor at, rutrum sit amet ipsum. Etiam at molestie odio. Quisque
  viverra erat maximus metus vulputate, ut sodales enim tincidunt. Etiam
  et turpis cursus, sagittis est id, pharetra nibh.
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Custom Style"
  headerCSSClass="custom-expansion-menu-header"
  contentCSSClass="custom-expansion-menu-content"
  preIconName="add"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Custom Style (Active)"
  headerCSSClass="custom-expansion-menu-header"
  headerActiveCSSClass="custom-expansion-menu-header-active"
  contentCSSClass="custom-expansion-menu-content"
  preIconName="add"
  [isActive]="true"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Custom Style (Disabled)"
  headerCSSClass="custom-expansion-menu-header"
  headerActiveCSSClass="custom-expansion-menu-header-active"
  contentCSSClass="custom-expansion-menu-content"
  preIconName="add"
  [disabled]="true"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1" preIconName="add">
  </youi-menu-item>
</youi-expansion-youi-menu-item>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-lorem-expansion {
  border-width: 1px;
  border-color: rgb(252 165 165);
}

::ng-deep .custom-lorem-expansion-header {
  border-bottom-width: 1px;
  border-color: rgb(254 202 202);
  background-color: rgb(254 202 202);
  color: rgb(185 28 28);
}

::ng-deep .custom-lorem-expansion-header:hover {
  background-color: rgb(252 165 165);
}

::ng-deep .custom-lorem-expansion-header:active {
  background-color: rgb(254 202 202);
}

::ng-deep .custom-lorem-expansion-content {
  padding: 1rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-expansion-menu-header {
  background-color: rgb(191 219 254);
  color: rgb(29 78 216);
}

::ng-deep .custom-expansion-menu-header:hover {
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
}

::ng-deep .custom-expansion-menu-header:active {
  background-color: rgb(96 165 250);
}

::ng-deep .custom-expansion-menu-header-active, ::ng-deep .custom-expansion-menu-header-active:hover {
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
}

::ng-deep .custom-expansion-menu-content {
  margin: 0.5rem;
  border-width: 1px;
  border-color: rgb(209 213 219);
  background-color: rgb(243 244 246);
  padding: 0.75rem;
  color: rgb(55 65 81);
}

::ng-deep .custom-expansion-menu-header:disabled, ::ng-deep .custom-expansion-menu-header:disabled:hover {
  background-color: rgb(229 231 235);
  color: rgb(156 163 175);
}`
      }  
    ]
  },
  collapsedBinding: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-youi-menu-item
  titleLabel="Default Open"
  [(collapsed)]="collapsed"
  preIconName="tips_and_updates"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1"> </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1"> </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Default Open (disabled)"
  [disabled]="true"
  [(collapsed)]="collapsed"
  preIconName="tips_and_updates"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1"> </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1"> </youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Default Closed"
  [(collapsed)]="collapsed2"
  preIconName="bedtime_off"
>
  <youi-menu-item titleLabel="Page 1" [insetLevel]="1"> </youi-menu-item>
  <youi-menu-item titleLabel="Page 2" [insetLevel]="1"> </youi-menu-item>
</youi-expansion-youi-menu-item>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  collapsed: boolean = false
  collapsed2: boolean = true
}`
      }
    ]
  },
  headerInsetLevel: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-youi-menu-item titleLabel="Level 0">
  <youi-expansion-youi-menu-item titleLabel="Level 1" [headerInsetLevel]="1">
    <youi-expansion-youi-menu-item titleLabel="Level 2" [headerInsetLevel]="2">
      <youi-menu-item titleLabel="Level 3" [insetLevel]="3"> </youi-menu-item>
    </youi-expansion-youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item titleLabel="Level 0" preIconName="navigate_next">
  <youi-expansion-youi-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="navigate_next"
  >
    <youi-expansion-youi-menu-item
      titleLabel="Level 2"
      [headerInsetLevel]="2"
      preIconName="navigate_next"
    >
      <youi-menu-item
        titleLabel="Level 3"
        [insetLevel]="3"
        preIconName="navigate_next"
      >
      </youi-menu-item>
    </youi-expansion-youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item titleLabel="Level 0" preIconName="navigate_next">
  <youi-expansion-youi-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="navigate_next"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus id
    augue nec porttitor. Cras ut velit libero. Suspendisse semper justo non
    libero lobortis, et commodo augue vehicula. Maecenas tincidunt, mi sit
    amet mattis iaculis, libero purus congue nisi, vel porttitor massa
    tellus id justo. Nulla magna ipsum, mollis non rutrum non, blandit at
    purus. Donec lobortis urna vitae eros efficitur viverra. Quisque
    placerat leo volutpat libero dictum semper. Donec mauris sem, ultrices
    ut porttitor at, rutrum sit amet ipsum. Etiam at molestie odio. Quisque
    viverra erat maximus metus vulputate, ut sodales enim tincidunt. Etiam
    et turpis cursus, sagittis est id, pharetra nibh.
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>`
      }
    ]
  },
  contentInsetLevel: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-youi-menu-item titleLabel="Level 0" [contentInsetLevel]="1">
  <youi-expansion-youi-menu-item titleLabel="Level 1" [contentInsetLevel]="1">
    <youi-expansion-youi-menu-item titleLabel="Level 2" [contentInsetLevel]="1">
      <youi-menu-item titleLabel="Level 3"></youi-menu-item>
    </youi-expansion-youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item titleLabel="Level 0" preIconName="navigate_next" [contentInsetLevel]="1">
  <youi-expansion-youi-menu-item
    titleLabel="Level 1"
    [contentInsetLevel]="1"
    preIconName="navigate_next"
  >
    <youi-expansion-youi-menu-item
      titleLabel="Level 2"
      [contentInsetLevel]="1"
      preIconName="navigate_next"
    >
      <youi-menu-item
        titleLabel="Level 3"
        preIconName="navigate_next"
      >
      </youi-menu-item>
    </youi-expansion-youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item titleLabel="Level 0" preIconName="navigate_next">
  <youi-expansion-youi-menu-item
    contentCSSClass="p-2"
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    [contentInsetLevel]="2"
    preIconName="navigate_next"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus id
    augue nec porttitor. Cras ut velit libero. Suspendisse semper justo
    non libero lobortis, et commodo augue vehicula. Maecenas tincidunt, mi
    sit amet mattis iaculis, libero purus congue nisi, vel porttitor massa
    tellus id justo. Nulla magna ipsum, mollis non rutrum non, blandit at
    purus. Donec lobortis urna vitae eros efficitur viverra. Quisque
    placerat leo volutpat libero dictum semper. Donec mauris sem, ultrices
    ut porttitor at, rutrum sit amet ipsum. Etiam at molestie odio.
    Quisque viverra erat maximus metus vulputate, ut sodales enim
    tincidunt. Etiam et turpis cursus, sagittis est id, pharetra nibh.
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>`
      }
    ]
  },
  withMenu: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-expansion-youi-menu-item titleLabel="Level 0" preIconName="room">
  <youi-menu-item titleLabel="Level 1" [insetLevel]="1"> </youi-menu-item>
  <youi-expansion-youi-menu-item titleLabel="Level 1" [headerInsetLevel]="1">
    <youi-menu-item titleLabel="Level 2" [insetLevel]="2"> </youi-menu-item>
  </youi-expansion-youi-menu-item>
  <youi-expansion-youi-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="room"
  >
    <youi-menu-item titleLabel="Level 2" [insetLevel]="2"> </youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>

<youi-expansion-youi-menu-item
  titleLabel="Level 0"
  preIconName="room"
  [isActive]="true"
  headerActiveCSSClass="text-blue-500"
>
  <youi-menu-item titleLabel="Level 1" preIconName="pets" [insetLevel]="1">
  </youi-menu-item>
  <youi-menu-item
    titleLabel="Level 1"
    preIconName="pets"
    [insetLevel]="1"
    [isActive]="true"
    activeCSSClass="text-blue-500"
  >
  </youi-menu-item>
  <youi-expansion-youi-menu-item
    titleLabel="Level 1"
    [headerInsetLevel]="1"
    preIconName="room"
  >
    <youi-menu-item titleLabel="Level 2" [insetLevel]="2" preIconName="pets">
    </youi-menu-item>
  </youi-expansion-youi-menu-item>
  <youi-expansion-youi-menu-item titleLabel="Level 1" [headerInsetLevel]="1">
    <youi-menu-item titleLabel="Level 2" [insetLevel]="2"> </youi-menu-item>
  </youi-expansion-youi-menu-item>
</youi-expansion-youi-menu-item>`
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
        code: `<youi-expansion-youi-menu-item>
  <youi-menu-item
    titleLabel="Level 1"
    preIconName="snowshoeing"
    [insetLevel]="1"
  >
  </youi-menu-item>
  <youi-menu-item
    titleLabel="Level 1"
    preIconName="snowshoeing"
    [insetLevel]="1"
  >
  </youi-menu-item>

  <ng-template #prepend>
    <div class="shadow-sm p-2 bg-green-200">
      <span class="text-emerald-500 font-bold">Prepend</span>
    </div>
  </ng-template>

  <ng-template #title>
    <div class="shadow-sm p-2 bg-yellow-200">
      <span class="text-yellow-600 font-bold">title</span>
    </div>
  </ng-template>

  <ng-template #append>
    <div class="shadow-sm p-2 bg-rose-200">
      <span class="text-rose-700 font-bold">Append</span>
    </div>
  </ng-template>
</youi-expansion-youi-menu-item>`
      },
      {
        title: 'component.css',
        code: `.bg-green-200 {
  background-color: rgb(187 247 208);
}

.bg-yellow-200 {
  background-color: rgb(254 240 138);
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

.text-yellow-600 {
  color: rgb(202 138 4);
}

.text-rose-700 {
  color: rgb(190 18 60);
}

.shadow-sm {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}`
      }
    ]
  }  
}