import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
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
}
