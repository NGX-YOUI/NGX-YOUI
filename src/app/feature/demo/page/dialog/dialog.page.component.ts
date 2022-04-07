import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from 'ngx-youi';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { DialogSample } from './dialog.page.sample';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog.page.component.html',
  styleUrls: ['./dialog.page.component.scss']
})
export class DialogPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(DialogSample))

  @ViewChild('titleTemplate', { static: false }) titleTemplate: TemplateRef<any>
  @ViewChild('bodyTemplate', { static: false }) bodyTemplate: TemplateRef<any>
  @ViewChild('actionsTemplate', { static: false }) actionsTemplate: TemplateRef<any>

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }


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
        titleCSSClass: 'custom-dialog-title',
        bodyCSSClass: 'custom-dialog-body',
        actionsCSSClass: 'custom-dialog-actions',
        actionsBtnCSSClass: 'custom-dialog-actions__button'
      }
    })

    dialog.closeEmitter.subscribe(() => {
      console.log('alert basic dialog closed !')
      dialog.closeEmitter.unsubscribe()
    })
  }

  openConfirmDialog () {
    const dialog = this.dialogService.confirm({
      title: 'Confirm Dialog',
      body: 'This is confirm dialog.'
    })

    dialog.closeEmitter.subscribe(result => {
      console.log(`Confirm dialog closed ${result}`)
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
        titleCSSClass: 'custom-dialog-title',
        bodyCSSClass: 'custom-dialog-body',
        actionsCSSClass: 'custom-dialog-actions',
        actionsBtnCSSClass: 'custom-dialog-actions__button'
      }
    })

    dialog.closeEmitter.subscribe(result => {
      console.log(`Confirm dialog closed ${result}`)
      dialog.closeEmitter.unsubscribe()
    })
  }

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
      body: 'You can\'t close dialog after clicking backdrop.'
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

  openAndCloseAfter3Seconds () {
    const dialog = this.dialogService.basic({
      title: 'Close Outside dialog',
      body: 'Wait for 3 seconds.'
    })

    let second = 3

    const interval = setInterval(() => {
      dialog.body = `Wait for ${--second} seconds.`
    }, 1000)

    setTimeout(() => {
      dialog.handleClose()
      clearInterval(interval)
    }, 3000)
  }

  openTemplate () {
    const dialog = this.dialogService.basic({
      templates: {
        titleTemplate: this.titleTemplate,
        bodyTemplate: this.bodyTemplate,
        actionsTemplate: this.actionsTemplate
      }
    }, '(inject data)')
  }

  openCustomComponent () {
    const dialog = this.dialogService.open(CustomDialogComponent, {
      customTitle: 'TITLE',
      customBody: 'name:'
    })

    dialog.customOpenEmitter.subscribe(() => {
      console.log(`Custom dialog open!`)
      dialog.customOpenEmitter.unsubscribe()
    })

    dialog.customOkEmitter.subscribe(result => {
      console.log(`Custom dialog OK!: ${result}`)
      dialog.customOkEmitter.unsubscribe()
    })

    dialog.closeEmitter.subscribe(() => {
      console.log(`Custom dialog close!`)
      dialog.closeEmitter.unsubscribe()
    })
  }
}
