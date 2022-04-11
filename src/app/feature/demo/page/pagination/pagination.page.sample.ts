import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const PaginationSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/pagination.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { PaginationModule } from 'ngx-youi';

@NgModule({
  imports: [PaginationModule],
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
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
>
</youi-pagination>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ] 
  },
  showFirstLastIconButton: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
  [showFirstLastIconButton]="true"
>
</youi-pagination>

<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
  [showFirstLastIconButton]="false"
>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ]
  },
  rowPerPage: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [rowPerPage]="5"
  [totalRowsCount]="40"
>
</youi-pagination>
<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [rowPerPage]="5"
  [rowPerPageOptions]="[10, 15, 20, 0]"
  [totalRowsCount]="40"
  [showRowPerPageSelect]="true"
  (rowPerPageChange)="rowPerPageChange($event)"
>
</youi-pagination>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }

  rowPerPageChange (page: number) {
    console.log(page)
  }
}`
      }
    ]
  },
  boundaryWithMaxDisplayPages: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
  [maxDsiplayPages]="5"
></youi-pagination>
<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [showFirstLastIconButton]="false"
  [maxPages]="10"
  [maxDsiplayPages]="5"
></youi-pagination>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ]
  },
  template: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
  [maxDsiplayPages]="5"
>
  <ng-template #first>
    first
  </ng-template>

  <ng-template #previous>
    previous
  </ng-template>
  <ng-template #number let-page>
    {{page.label !== '...' ? '(' + page.label + ')' : '...'}}
  </ng-template>

  <ng-template #next>
    next
  </ng-template>

  <ng-template #last>
    last
  </ng-template>
</youi-pagination>`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ]
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-pagination
  buttonCSSClass="custom-youi-pagination-button"
  activeNumberCSSClass="custom-youi-pagination-button--active"
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
  [maxDsiplayPages]="5"
></youi-pagination>
<youi-pagination
  arrowCSSClass="custom-pagination2-arrow"
  numberCSSClass="custom-pagination2-number"
  activeNumberCSSClass="custom-pagination2-number-active"
  rowPerPageSelectCSSClass="custom-rowPerPageSelect"
  [(currentPage)]="pagination.currentPage"
  [showRowPerPageSelect]="true"
  [rowPerPage]="10"
  [totalRowsCount]="100"
  [maxDsiplayPages]="5"
></youi-pagination>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-youi-pagination-button {
  border-width: 1px;
  border-color: rgb(147 197 253);
  color: rgb(59 130 246);
}

::ng-deep .custom-youi-pagination-button:enabled:hover {
  background-color: rgb(219 234 254);
  color: rgb(59 130 246);
}

::ng-deep .custom-youi-pagination-button--active {
  border-width: 1px;
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
}

::ng-deep .custom-pagination2-arrow {
  border-width: 1px;
  border-color: rgb(252 165 165);
  background-color: rgb(254 202 202);
  color: rgb(239 68 68);
}

::ng-deep .custom-pagination2-number {
  border-width: 1px;
  border-color: rgb(134 239 172);
  background-color: rgb(220 252 231);
  color: rgb(34 197 94);
}

::ng-deep .custom-pagination2-number-active {
  border-width: 1px;
  background-color: rgb(34 197 94);
  color: rgb(255 255 255);
}

::ng-deep .custom-pagination2-number:enabled:hover {
  background-color: rgb(34 197 94);
  color: rgb(255 255 255);
}

::ng-deep .custom-rowPerPageSelect {
  border-radius: 0.375rem;
  border-color: rgb(253 224 71);
  background-color: rgb(254 249 195);
  color: rgb(161 98 7);
}`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ]
  },
  horizontalAlign: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-pagination
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
></youi-pagination>
<youi-pagination
  class="justify-center"
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
></youi-pagination>
<youi-pagination
  class="justify-end"
  [(currentPage)]="pagination.currentPage"
  [maxPages]="10"
></youi-pagination>`
      },
      {
        title: 'component.css',
        code: `.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}`
      },
      {
        title: 'component.ts',
        code: `export class YourComponentClass {
  pagination = {
    currentPage: 1
  }
}`
      }
    ]
  }
}