import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations'
import { OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, HostBinding, Inject, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { NOTIFY_DATA, INotificationStyleOption, INotificationTemplate } from './INotification';
import { NotificationBase } from './notification.base';
import { NotificationPositionEnum } from './NotificationPositionEnum';

@Component({
  selector: 'youi-notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHide', [
      transition('void => fromLeft', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease',
          style({ transform: 'translateX(0%)' }))
      ]),
      transition('fromLeft => void', [
        style({ transform: 'translateX(0%)' }),
        animate('200ms ease',
          style({ transform: 'translateX(-100%)' }))
      ]),

      transition('void => fromRight', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease',
          style({ transform: 'translateX(0%)' }))
      ]),
      transition('fromRight => void', [
        style({ transform: 'translateX(0%)' }),
        animate('200ms ease',
          style({ transform: 'translateX(100%)' }))
      ]),

      transition('void => fromTopCenter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease',
          style({ transform: 'translateY(0%)' }))
      ]),
      transition('fromTopCenter => void', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('200ms ease',
          style({ transform: 'translateY(-100%)', opacity: 0 }))
      ]),

      transition('void => fromBottomCenter', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms ease',
          style({ transform: 'translateY(0%)' }))
      ]),
      transition('fromBottomCenter => void', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('200ms ease',
          style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotificationComponent extends NotificationBase {
  icon: string = ''
  title: string = ''
  content: string = ''

  styles: INotificationStyleOption = {
    wrapperClass: '',
    iconCSSClass: '',
    titleCSSClass: '',
    contentCSSClass: '',
    closeCSSClass: ''
  }

  templates: INotificationTemplate = {
    iconTemplate: null,
    titleTemplate: null,
    contentTemplate: null,
    closeTemplate: null
  }

  constructor(@Inject(NOTIFY_DATA) public notificationData: any) {
    super(notificationData)
  }

  get notifyWrapperCSS () {
    return this.styles?.wrapperClass
  }
}
