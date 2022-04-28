import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const BreadcrumbSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/breadcrumb.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { BreadcrumbModule } from 'ngx-youi';

@NgModule({
  imports: [BreadcrumbModule],
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
        code: `<youi-breadcrumb>
  <youi-breadcrumb-item> One </youi-breadcrumb-item>
  <youi-breadcrumb-item> Two </youi-breadcrumb-item>
  <youi-breadcrumb-item> Three </youi-breadcrumb-item>
</youi-breadcrumb>`
      }
    ] 
  },
  styles: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-breadcrumb
  class="custom-breadcrumb"
  itemCSSClass="custom-breadcrumb-item"
  itemActiveCSSClass="custom-breadcrumb--active"
  iconCSSClass="custom-breadcrumb-icon"
  speratorCSSClass="custom-breadcrumb-sperator"
>
  <youi-breadcrumb-item icon="home"> One </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="maps_home_work"> Two </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="format_list_numbered"> Three </youi-breadcrumb-item>
</youi-breadcrumb>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-breadcrumb {
  padding: 0.75rem;
  background-color: rgb(254 202 202);
  border-radius: 0.375rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

::ng-deep .custom-breadcrumb-item {
  color: rgb(75 85 99);
}

::ng-deep .custom-breadcrumb-icon {
  font-size: 1.5rem;
  line-height: 2rem;
}

::ng-deep .custom-breadcrumb-sperator {
  color: rgb(220 38 38);
}

::ng-deep .custom-breadcrumb--active { 
  color: rgb(59 130 246);
}`
      }
    ]
  } ,
  iconAndSeparator: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<youi-breadcrumb>
  <youi-breadcrumb-item icon="home"> One </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="maps_home_work"> Two </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="format_list_numbered"> Three </youi-breadcrumb-item>
</youi-breadcrumb>

<youi-breadcrumb separator="→">
  <youi-breadcrumb-item icon="home"> One </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="maps_home_work"> Two </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="format_list_numbered"> Three </youi-breadcrumb-item>
</youi-breadcrumb>

<youi-breadcrumb separatorType="icon" separator="play_arrow">
  <youi-breadcrumb-item icon="home"> One </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="maps_home_work"> Two </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="format_list_numbered"> Three </youi-breadcrumb-item>
</youi-breadcrumb>`
      }
    ]
  },
  separatorSpace: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-breadcrumb>
  <youi-breadcrumb-item> default-10px-1 </youi-breadcrumb-item>
  <youi-breadcrumb-item> default-10px-2 </youi-breadcrumb-item>
  <youi-breadcrumb-item> default-10px-3 </youi-breadcrumb-item>
</youi-breadcrumb>

<youi-breadcrumb separatorSpace="30px">
  <youi-breadcrumb-item> 30px-1 </youi-breadcrumb-item>
  <youi-breadcrumb-item> 30px-2 </youi-breadcrumb-item>
  <youi-breadcrumb-item> 30px-3 </youi-breadcrumb-item>
</youi-breadcrumb>`
      }
    ]
  } ,
  templates: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-breadcrumb>
  <ng-template #separatorTemplate>
    <div class="p-2 bg-green-200 text-green-700">separatorTemplate</div>
  </ng-template>

  <youi-breadcrumb-item>
      <ng-template #iconTemplate>
        <span class="p-2 bg-yellow-200 text-yellow-700">iconTemplate</span>
      </ng-template>
      One
  </youi-breadcrumb-item>
  <youi-breadcrumb-item>
    <ng-template #iconTemplate>
      <span class="p-2 bg-yellow-200 text-yellow-700">iconTemplate</span>
    </ng-template>
    Two
  </youi-breadcrumb-item>
  <youi-breadcrumb-item icon="format_list_numbered"> Three </youi-breadcrumb-item>
</youi-breadcrumb>`
      },
      {
        title: 'component.css',
        code: `.bg-green-200 {
  background-color: rgb(187 247 208);
}

.p-2 {
  padding: 0.5rem;
}

.text-green-700 {
  color: rgb(21 128 61);
}`
      }
    ]
  }
}