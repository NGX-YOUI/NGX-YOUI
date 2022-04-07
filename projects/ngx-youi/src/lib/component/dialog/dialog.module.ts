import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BasicDialogComponent } from './basic-dialog/basic-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    BasicDialogComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ConfirmDialogComponent, BasicDialogComponent],
  providers: [DialogService]
})
export class DialogModule { }
