import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const SpinnerSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/spinner.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { SpinnerModule } from 'ngx-youi';

@NgModule({
  imports: [SpinnerModule],
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
        code: `<youi-spinner [isLoading]="isLoading">
  <div>
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
  </div>
</youi-spinner>

<youi-spinner [isLoading]="isLoading" iconName="">
  <div>
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
  </div>

  <ng-template #textTemplate>
    <div>
      Loading
    </div>
  </ng-template>
</youi-spinner>

<youi-spinner [isLoading]="isLoading" iconName="audio">
  <div>
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
  </div>

  <ng-template #textTemplate>
    <div>
      Loading
    </div>
  </ng-template>
</youi-spinner>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  isLoading = true
}`
      }
    ] 
  },
  template: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<youi-spinner [isLoading]="isLoading">
  <div>
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
  </div>
  
  <ng-template #iconTemplate>
    <span class="material-icons text-3xl animate-spin">sync</span>
  </ng-template>

  <ng-template #textTemplate>
    <div>
      Loading
    </div>
  </ng-template>
</youi-spinner>`
      },
      {
        title: 'component.css',
        code: `@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  isLoading = true
}`
      }
    ]
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-spinner [isLoading]="isLoading" iconName="bars" backdropCSSClass="custom-backdrop" svgCSSClass="custom-svg" textTemplateCSSClass="custom-text">
  <div>
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
  </div>

  <ng-template #textTemplate>
    <div>
      Loading
    </div>
  </ng-template>
</youi-spinner>

<youi-spinner [isLoading]="isLoading" backdropCSSClass="custom-backdrop" svgCSSClass="custom-svg" textTemplateCSSClass="custom-text">
  <div>
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
  </div>

  <ng-template #iconTemplate>
    <span class="material-icons custom-icon-template">hourglass_empty</span>
  </ng-template>

  <ng-template #textTemplate>
    <div>
      Loading
    </div>
  </ng-template>
</youi-spinner>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-svg {
  fill: white;
  stroke: white;
  height: 40%;
}

::ng-deep .custom-backdrop {
  background-color: rgb(239 68 68 / 0.9);
}

::ng-deep .custom-text {
  margin-top: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

::ng-deep .custom-icon-template {
  animation: spin 1s linear infinite;
  font-size: 32px;
  line-height: 0.5;
  color: white;
}`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  isLoading = true
}`
      }
    ]
  }
}