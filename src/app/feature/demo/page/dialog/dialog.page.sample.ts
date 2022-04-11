import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const DialogSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/dialog.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { DialogModule } from 'ngx-youi';

@NgModule({
  imports: [DialogModule],
})

export class YourModuleClass {}`
      }
    ]
  },
  basicStyle: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-gray" (click)="openBasicDialog()" >basic</button>
<button class="btn btn-green" (click)="openSuccessDialog()">Success</button>
<button class="btn btn-cyan" (click)="openInfoDialog()">Info</button>
<button class="btn btn-yellow" (click)="openWarningDialog()">Warning</button>
<button class="btn btn-red" (click)="openAlertDialog()">Alert</button>
<button class="btn btn-pink" (click)="openCustomStyleDialog()">Custom Style</button>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-youi-dialog-title {
  background-color: rgb(251 207 232);
  color: rgb(190 24 93);
}

::ng-deep .custom-youi-dialog-body {
  color: rgb(219 39 119);
}

::ng-deep .custom-youi-dialog-actions {
  background-color: rgb(251 207 232);
}

::ng-deep .custom-dialog-actions__button {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

::ng-deep .custom-dialog-actions__button-ok:hover {
  background-color: rgb(236 72 153);
}

::ng-deep .custom-dialog-actions__button-ok, ::ng-deep .custom-dialog-actions__button-ok:active {
  background-color: rgb(219 39 119);
}`
      },
      {
        title: 'component.ts',
        code: `import { DialogService } from 'ngx-youi';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }

  openBasicDialog () {
    const dialog = this.dialogService.basic({
      title: 'Basic Dialog',
      body: 'This is basic dialog.'
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('Basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openSuccessDialog () {
    const dialog = this.dialogService.success({
      title: 'Success basic Dialog',
      body: 'This is success basic dialog.'
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('success basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openInfoDialog () {
    const dialog = this.dialogService.info({
      title: 'Info basic Dialog',
      body: 'This is success basic dialog.'
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('info basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openWarningDialog () {
    const dialog = this.dialogService.warning({
      title: 'Warning basic Dialog',
      body: 'This is warning basic dialog.'
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('warning basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openAlertDialog () {
    const dialog = this.dialogService.alert({
      title: 'Alert basic Dialog',
      body: 'This is alert dialog.'
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('alert basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openCustomStyleDialog () {
    const dialog = this.dialogService.basic({
      title: 'Custom basic Dialog',
      body: 'This is Custom dialog.',
      ok: {
        label: 'Sure',
        cssClass: 'custom-dialog-actions__button-ok'
      },
      styles: {
        titleCSSClass: 'custom-youi-dialog-title',
        bodyCSSClass: 'custom-youi-dialog-body',
        actionsCSSClass: 'custom-youi-dialog-actions',
        actionsBtnCSSClass: 'custom-dialog-actions__button'
      }
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('alert basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }
}`
      }
    ] 
  },
  confirm: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button (click)="openConfirmDialog()" class="btn btn-blue">confirm</button>
<button (click)="openConfirmStyleDialog()" class="btn btn-pink">custom confirm</button>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-youi-dialog-title {
  background-color: rgb(251 207 232);
  color: rgb(190 24 93);
}

::ng-deep .custom-youi-dialog-body {
  color: rgb(219 39 119);
}

::ng-deep .custom-youi-dialog-actions {
  background-color: rgb(251 207 232);
}

::ng-deep .custom-dialog-actions__button {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

::ng-deep .custom-dialog-actions__button-ok:hover {
  background-color: rgb(236 72 153);
}

::ng-deep .custom-dialog-actions__button-ok, ::ng-deep .custom-dialog-actions__button-ok:active {
  background-color: rgb(219 39 119);
}

::ng-deep .custom-dialog-actions__button-close {
  border-width: 1px;
  border-color: rgb(107 114 128);
  background-color: transparent;
  color: rgb(75 85 99);
}

::ng-deep .custom-dialog-actions__button-close:hover {
  background-color: rgb(107 114 128);
  color: rgb(255 255 255);
}

::ng-deep .custom-dialog-actions__button-close:active {
  background-color: rgb(75 85 99);
}`
      },
      {
        title: 'component.ts',
        code: `import { DialogService } from 'ngx-youi';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }

  openConfirmDialog () {
    const dialog = this.dialogService.confirm({
      title: 'Confirm Dialog',
      body: 'This is confirm dialog.'
    })

    dialog.closeEmitter.subscribe(result => {
      console.log(\`Confirm dialog closed \${result}\`)
      dialog.closeEmitter.unsubscribe()
    })
  }
  openConfirmStyleDialog () {
    const dialog = this.dialogService.confirm({
      title: 'Confirm Dialog',
      body: 'This is confirm dialog.',
      ok: {
        label: 'Sure',
        cssClass: 'custom-dialog-actions__button-ok'
      },
      close: {
        label: 'Leave',
        cssClass: 'custom-dialog-actions__button-close'
      },
      styles: {
        titleCSSClass: 'custom-youi-dialog-title',
        bodyCSSClass: 'custom-youi-dialog-body',
        actionsCSSClass: 'custom-youi-dialog-actions',
        actionsBtnCSSClass: 'custom-dialog-actions__button'
      }
    })

    dialog.closeEmitter.subscribe(result => {
      console.log(\`Confirm dialog closed \${result}\`)
      dialog.closeEmitter.unsubscribe()
    })
  }
}`
      }
    ]
  },
  backdrop: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button (click)="openBackdropDialog()" class="btn btn-red">Custom backdrop</button>
<button (click)="openBlockBackdropDialog()" class="btn btn-gray">Block backdrop</button>
<button (click)="openNoBackdropDialog()" class="btn btn-gray btn-outline">No backdrop</button>`
      },
      {
        title: 'component.css',
        code: `.bg-red-500\/60 {
  background-color: rgb(239 68 68 / 0.6);
}`
      },
      {
        title: `component.ts`,
        code: `import { DialogService } from 'ngx-youi';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }
        
  openBackdropDialog() {
    const dialog = this.dialogService.basic({
      title: 'Custom Backdrop Basic Dialog',
      body: 'This is custom backdrop basic dialog.'
    }, null, {
      hasBackdrop: true,
      backdropCSSClass: 'bg-red-500/60'
    })
  }

  openBlockBackdropDialog() {
    const dialog = this.dialogService.basic({
      title: 'Block backdrop',
      body: 'You can\\'t close dialog after clicking backdrop.'
    }, null, {
      closeAfterClick: false
    })
  }

  openNoBackdropDialog() {
    const dialog = this.dialogService.basic({
      title: 'Basic Dialog Without Backdrop ',
      body: 'This is backdrop basic dialog without backdrop.'
    }, null, {
      hasBackdrop: false
    })
  }
}`
      }
    ]
  },
  closeOutsideDialog: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-gray"
        (click)="openAndCloseAfter3Seconds()">Close after 3 seconds</button>`
      },
      {
        title: 'component.ts',
        code: `import { DialogService } from 'ngx-youi';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }

  openAndCloseAfter3Seconds () {
    const dialog = this.dialogService.basic({
      title: 'Close Outside dialog',
      body: 'Wait for 3 seconds.'
    })

    let second = 3

    const interval = setInterval(() => {
      dialog.body = \`Wait for \${--second} seconds.\`
    }, 1000)

    setTimeout(() => {
      dialog.handleClose()
      clearInterval(interval)
    }, 3000)
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
        code: `<button (click)="openTemplate()" class="btn btn-gray">Template</button>

<ng-template #titleTemplate let-dialog>
  title template
</ng-template>

<ng-template #bodyTemplate let-dialog>
  body template {{dialog.dialogData}}
</ng-template>

<ng-template #actionsTemplate let-dialog>
  <button class="btn btn-green" (click)="dialog.handleClose()">Button Template</button>
</ng-template>`
      },
      {
        title: 'component.ts',
        code: `import { DialogService } from 'ngx-youi';

export class YourComponentClass {
  constructor(private dialogService: DialogService) { }

  @ViewChild('titleTemplate', { static: false }) titleTemplate: TemplateRef<any>
  @ViewChild('bodyTemplate', { static: false }) bodyTemplate: TemplateRef<any>
  @ViewChild('actionsTemplate', { static: false }) actionsTemplate: TemplateRef<any>

  openTemplate () {
    const dialog = this.dialogService.basic({
      templates: {
        titleTemplate: this.titleTemplate,
        bodyTemplate: this.bodyTemplate,
        actionsTemplate: this.actionsTemplate
      }
    }, '(inject data)')
  }
}`
      }
    ]
  },
  customComponent: {
    expanded: false,
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
  }
}