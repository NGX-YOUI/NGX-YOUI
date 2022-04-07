import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogBase, DIALOG_DATA } from 'ngx-youi';

@Component({
  selector: 'youi-loading-dialog',
  templateUrl: './loading-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingDialogComponent extends DialogBase implements OnInit {
  @Input() styles = {
    containerCSSClass: '',
    loadingCSSClass: ''
  }

  @Input() body = 'Loading'

  constructor(@Inject(DIALOG_DATA) public dialogData: any) {
    super(dialogData);
  }

  @HostBinding('class') get bindContainerCSS () {
    return `dialog-container loading-dialog-container ` + this.styles.containerCSSClass ?? ''
  }

  ngOnInit(): void {
  }
}
