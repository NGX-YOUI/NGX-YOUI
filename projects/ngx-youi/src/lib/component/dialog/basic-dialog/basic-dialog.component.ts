import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DialogBase } from '../dialog.base';
import { DIALOG_DATA, IDialogStyle, IDialogTemplate } from '../IDialog';

@Component({
  selector: 'youi-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDialogComponent extends DialogBase implements OnInit {
  @Input() title: string
  @Input() body: string
  @Input() ok = {
    label: 'OK',
    cssClass: ''
  }

  @Input() styles: IDialogStyle = {
    containerCSSClass: '',
    titleCSSClass: '',
    bodyCSSClass: '',
    actionsCSSClass: '',
    actionsBtnCSSClass: ''
  }

  @Input() templates: IDialogTemplate

  constructor(@Inject(DIALOG_DATA) public dialogData: any) { 
    super(dialogData)
  }

  ngOnInit(): void {
  }

  @HostBinding('class') override get bindContainerCSS () {
    return `youi-dialog-container ${this.styles?.containerCSSClass}`
  }
}
