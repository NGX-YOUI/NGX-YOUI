import { ICodeTab } from "../../demo/component/code-tab/ICodeTab";

export const HomeSample: { [key:string]: ICodeTab } = {
  feature1_1: {
    expanded: true,
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
  feature1_2: {
    expanded: true,
    examples: [
      {
        title: 'custom-dialog.component.html',
        code: `<ng-container *ngIf="visible">
  <div class="custom-dialog-component-title">
    Custom Dialog - {{customTitle}}
  </div>
  <div class="custom-dialog-component-body">
    <label class="label" for="">{{customBody}}</label>
    <input
      class="field-input"
      [(ngModel)]="value"
      type="text"
    />
  </div>
  <div class="custom-dialog-component-actions">
    <button class="btn btn-block btn-yellow" (click)="handleOK()">OK</button>
    <button class="btn btn-block btn-outline btn-gray" (click)="handleClose()">CLOSE</button>
  </div>
</ng-container>`
      },
      {
        title: 'custom-dialog.component.ts',
        code: `import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { DialogBase, DIALOG_DATA } from 'ngx-youi';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDialogComponent extends DialogBase implements OnInit {
  value = ''
  customTitle = ''
  customBody = ''

  @Output() customOpenEmitter = new EventEmitter<any>(true)
  @Output() customOkEmitter = new EventEmitter<any>(true)

  constructor(@Inject(DIALOG_DATA) public dialogData: any) {
    super(dialogData)
  }

  ngOnInit(): void {
    this.customOpenEmitter.emit()
  }

  public handleOK () {
    this.customOkEmitter.emit(this.value)
    this.handleClose()
  }
}`
      },
      {
        title: 'custom-dialog.component.scss',
        code: `.custom-dialog-component-title {
  background-color: rgb(254 240 138);
  text-align: center;
  font-weight: 700;
  color: rgb(161 98 7);
  font-size: 16px;
  padding: 10px;
}

.custom-dialog-component-body {
  padding: 15px;
}

.custom-dialog-component-actions {
  display: flex;
  justify-content: center;
  padding: 0 10px 10px;
  margin: 0 -10px;
}

.custom-dialog-component-actions > * {
  margin: 0 15px;
}`
      },
      {
        title: 'component.html',
        code: `<button class="btn btn-gray" (click)="openCustomComponent()">Custom Component</button>`
      },
      {
        title: 'component.ts',
        code: `import { DialogService } from 'ngx-youi';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }
  
  openCustomComponent () {
    const dialog = this.dialogService.open(CustomDialogComponent, {
      customTitle: 'TITLE',
      customBody: 'name:'
    })

    dialog.customOpenEmitter.subscribe(() => {
      console.log(\`Custom dialog open!\`)
      dialog.customOpenEmitter.unsubscribe()
    })

    dialog.customOkEmitter.subscribe(result => {
      console.log(\`Custom dialog OK!: \${result}\`)
      dialog.customOkEmitter.unsubscribe()
    })

    dialog.closeEmitter.subscribe(() => {
      console.log(\`Custom dialog close!\`)
      dialog.closeEmitter.unsubscribe()
    })
  }
}`
      }
    ]
  },
  feature2_1: {
    expanded: true,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-red bg-red-200 text-black" (click)="showCustomNotify()">custom</button>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-youi-notification-icon {
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-notification-wrapper {
  background-color: rgb(254 202 202);
}

::ng-deep .custom-youi-notification-title {
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-notification-content {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-youi-notification-close {
  border-radius: 9999px;
  background-color: rgb(0 0 0 / 0.1);
  color: rgb(255 255 255);
}

::ng-deep .custom-youi-notification-close:hover {
  background-color: rgb(0 0 0 / 0.3);
}`
      },
      {
        title: 'component.ts',
        code: `import { NotificationService, NotificationPositionEnum } from 'ngx-youi'

export class YourComponentClass {
  constructor(private notificationService: NotificationService) { }

  showCustomNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.basic(NotificationPositionEnum.topRight, {
      title: 'title custom',
      content: \`content custom \${randomNumber}\`,
      icon: 'thumb_up',
      timeout: 5000,
      styles: {
        iconCSSClass: 'custom-youi-notification-icon',
        wrapperClass: 'custom-notification-wrapper',
        titleCSSClass: 'custom-youi-notification-title',
        contentCSSClass: 'custom-notification-content',
        closeCSSClass: 'custom-youi-notification-close'
      }
    }, null)
  }
}`
      }
    ]
  },
  feature2_2: {
    expanded: true,
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
  }
}