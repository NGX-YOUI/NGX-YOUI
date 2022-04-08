import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const DatatableSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/datatable.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { DatatableModule } from 'ngx-youi';

@NgModule({
  imports: [DatatableModule],
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
        code: `<youi-datatable
  [tableData]="basicTable.tableData"
  [columns]="basicTable.columns"
></youi-datatable>`
      },
      {
        title: 'component.ts',
        code: `import { ITable } from 'ngx-youi';

export class YourComponentClass {
  basicTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ]
  }
}`
      }
    ] 
  },
  columnTemplate: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-datatable
  [tableData]="columnTemplateTable.tableData"
  [columns]="columnTemplateTable.columns"
>
  <ng-template youi-datatable-template="header-status" let-column>
    {{ column.label }} (status)
  </ng-template>

  <ng-template
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }} ({{ cellData }})
  </ng-template>

  <ng-template
    youi-datatable-template="body-action"
    let-cellData
    let-rowData="rowData"
  >
    <div class="action-column">
      <button class="btn btn-cyan">
        <i class="material-icons-outlined">visibility</i
        ><span>Browse</span>
      </button>
      <button class="btn btn-green">
        <i class="material-icons-outlined">edit</i><span>Edit</span>
      </button>
    </div>
  </ng-template>
</youi-datatable>`
      },
      {
        title: 'component.ts',
        code: `import { ITable } from 'ngx-youi';

export class YourComponentClass {
  columnTemplateTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
      { name: 'action', label: 'ACTION' }
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ]
  }

  getOptionText (name: string, value: any) {
    const options: {[key: string]: any[]} = {
      status: [
        { label: 'All', value: '' },
        { label: 'InActive', value: 0 },
        { label: 'Active', value: 1 },
        { label: 'Disabled', value: 2 },
      ]
    }

    return options[name].find((option: { value: any }) => option.value === value).label
  }
}`
      }
    ]
  },
  headerBodyTemplate: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-datatable
  [tableData]="basicTable.tableData"
  [columns]="basicTable.columns"
>
  <ng-template youi-datatable-template="headerTemplate" let-columns>
    <tr class="bg-blue-300 text-blue-800">
      <th class="p-3" *ngFor="let column of columns">
        {{ column.label }} - {{ column.name }}
      </th>
    </tr>
  </ng-template>
  <ng-template
    youi-datatable-template="bodyTemplate"
    let-tableData
    let-columns="columns"
  >
    <tr class="bg-gray-100 text-gray-800" *ngFor="let rowData of tableData">
      <td class="p-3 text-center" *ngFor="let column of columns">
        <ng-container *ngIf="column.name === 'status'">
          {{ column.name }} : {{ getOptionText("status", rowData[column.name]) }}
        </ng-container>
        <ng-container *ngIf="column.name !== 'status'">
          {{ column.name }} : {{ rowData[column.name] }}
        </ng-container>
      </td>
    </tr>
  </ng-template>
</youi-datatable>`
      },
      {
        title: 'component.ts',
        code: `import { ITable } from 'ngx-youi';

export class YourComponentClass {
  basicTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ]
  }

  getOptionText (name: string, value: any) {
    const options: {[key: string]: any[]} = {
      status: [
        { label: 'All', value: '' },
        { label: 'InActive', value: 0 },
        { label: 'Active', value: 1 },
        { label: 'Disabled', value: 2 },
      ]
    }

    return options[name].find((option: { value: any }) => option.value === value).label
  }
}`
      }
    ]
  },
  selectionTable: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-datatable
  selectedMode="checkbox"
  (selectedChange)="selectedChange($event)"
  [tableData]="selectionTable.tableData"
  [columns]="selectionTable.columns"
  [rowSelectDisableFn] = selectionTable.rowSelectDisableFn
>
  <ng-template
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }}
  </ng-template>
</youi-datatable>

<youi-datatable
  selectedMode="radio"
  (selectedChange)="selectedChange($event)"
  [tableData]="selectionTable.tableData"
  [columns]="selectionTable.columns"
  [rowSelectDisableFn] = selectionTable.rowSelectDisableFn
>
  <ng-template
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }}
  </ng-template>
</youi-datatable>`
      },
      {
        title: 'component.ts',
        code: `import { ITable, ITableSelected } from 'ngx-youi';

export class YourComponentClass {
  selectionTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ],
    selectedList: new Set<any>(),
    rowCSSClassFn: (row: any) => {
      return row.username === 'user' ? 'bg-red-300' : ''
    },
    rowSelectDisableFn: (row: any) => {
      return row.username === 'user' ? true : null
    }
  }

  getOptionText (name: string, value: any) {
    const options: {[key: string]: any[]} = {
      status: [
        { label: 'All', value: '' },
        { label: 'InActive', value: 0 },
        { label: 'Active', value: 1 },
        { label: 'Disabled', value: 2 },
      ]
    }

    return options[name].find((option: { value: any }) => option.value === value).label
  }

  selectedChange (seletedInfo: ITableSelected<any>) {
    this.selectionTable.selectedList = seletedInfo.allSelectedData
    console.log(seletedInfo)
  }
}`
      }
    ]
  },
  styleTable: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<youi-datatable
  selectedMode="checkbox"
  tableCSSClass="styled-table"
  [tableData]="selectionTable.tableData"
  [columns]="selectionTable.columns"
  [rowSelectDisableFn] = selectionTable.rowSelectDisableFn
>
  <ng-template
    selectedMode="checkbox"
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }}
  </ng-template>
</youi-datatable>

<youi-datatable
  selectedMode="radio"
  tableCSSClass="styled2-table"
  [tableData]="selectionTable.tableData"
  [columns]="selectionTable.columns"
  [rowSelectDisableFn] = selectionTable.rowSelectDisableFn
>
  <ng-template
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }}
  </ng-template>
</youi-datatable>

<youi-datatable
  selectedMode="checkbox"
  [tableData]="selectionTable.tableData"
  [columns]="selectionTable.columns"
  [rowCSSClassFn]="selectionTable.rowCSSClassFn"
  [rowSelectDisableFn] = selectionTable.rowSelectDisableFn
>
  <ng-template
    youi-datatable-template="body-status"
    let-cellData
    let-rowData="rowData"
  >
    {{ getOptionText("status", cellData) }}
  </ng-template>
</youi-datatable>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .styled-table .youi-datatable-thead-tr {
  background: darkblue;
}

::ng-deep .styled-table .youi-datatable-tbody-tr {
  background-color: lightblue;
}

::ng-deep .styled-table .youi-datatable-tbody-tr:hover {
  background: rgb(244, 186, 252);
}

::ng-deep .styled-table .youi-datatable-th-select-input:checked, ::ng-deep .styled-table .youi-datatable-td-select-input:checked{
  background-color: black;
}

::ng-deep .styled-table .youi-datatable-tbody-tr-selected {
  background: pink;
}

::ng-deep .styled2-table .youi-datatable-th-select-input:checked, ::ng-deep .styled2-table .youi-datatable-td-select-input:checked{
  background-color: red;
}

::ng-deep .styled2-table .youi-datatable-th-name {
  background: orange;
  color: black;
}

::ng-deep .styled2-table .youi-datatable-td-username {
  background-color: rgb(224, 238, 143);
}

::ng-deep .styled2-table .youi-datatable-td-select-input[type=checkbox]:disabled, ::ng-deep .styled2-table .youi-datatable-td-select-input[type=radio]:disabled,
::ng-deep .styled2-table .youi-datatable-td-select-input[type=checkbox]:disabled:hover, ::ng-deep .styled2-table .youi-datatable-td-select-input[type=radio]:disabled:hover {
  background: rgb(255,0,0,0.2);
}`
      },
      {
        title: 'component.ts',
        code: `import { ITable, ITableSelected } from 'ngx-youi';

export class YourComponentClass {
  selectionTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ],
    selectedList: new Set<any>(),
    rowCSSClassFn: (row: any) => {
      return row.username === 'user' ? 'bg-red-300' : ''
    },
    rowSelectDisableFn: (row: any) => {
      return row.username === 'user' ? true : null
    }
  }

  getOptionText (name: string, value: any) {
    const options: {[key: string]: any[]} = {
      status: [
        { label: 'All', value: '' },
        { label: 'InActive', value: 0 },
        { label: 'Active', value: 1 },
        { label: 'Disabled', value: 2 },
      ]
    }

    return options[name].find((option: { value: any }) => option.value === value).label
  }

  selectedChange (seletedInfo: ITableSelected<any>) {
    this.selectionTable.selectedList = seletedInfo.allSelectedData
    console.log(seletedInfo)
  }
}`
      }
    ]
  }
}