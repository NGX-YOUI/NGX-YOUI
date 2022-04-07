import { OverlayRef } from "@angular/cdk/overlay"
import { Component, EventEmitter } from "@angular/core"
import { Output } from "@angular/core"
import { ChangeDetectionStrategy, HostBinding, ViewEncapsulation } from "@angular/core"
import { Inject } from "@angular/core"
import { DIALOG_DATA } from "./IDialog"

@Component({
  selector: 'youi-dialog',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogBase {
  overlayRef: OverlayRef
  visible: boolean = false
  
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter<any>(true)

  constructor(@Inject(DIALOG_DATA) public dialogData: any) { }

  @HostBinding('class') get bindContainerCSS () {
    return `dialog-container`
  }

  public handleClose (data?: any) {
    this.closeEmitter.emit(data)
    this.overlayRef.detach()
  }
}