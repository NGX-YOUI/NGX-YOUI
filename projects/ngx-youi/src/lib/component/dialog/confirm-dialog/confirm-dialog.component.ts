import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BasicDialogComponent } from '../basic-dialog/basic-dialog.component';
import { DIALOG_DATA } from '../IDialog';

@Component({
  selector: 'youi-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent extends BasicDialogComponent {
  @Input() close = {
    label: 'CLOSE',
    cssClass: ''
  }

  constructor(@Inject(DIALOG_DATA) public dialogData: any) {
    super(dialogData)
  }

  ngOnInit(): void {
  }
}
