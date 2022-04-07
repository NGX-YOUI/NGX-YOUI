import { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, HostBinding, Inject, OnDestroy, Output, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { NOTIFY_DATA } from "./INotification";
import { NotificationComponent } from "./notification.component";
import { NotificationPositionEnum } from "./NotificationPositionEnum";

@Component({
  selector: 'youi-notification',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationBase implements OnInit, OnDestroy{
  destroy$ = new Subject();
  timeout: number = 5000 // ms, 0 代表永遠開啟

  @Output() closeEmitter = new EventEmitter<boolean>()

  componentRef: ComponentRef<NotificationComponent>
  position: NotificationPositionEnum

  @HostBinding('@showHide') get showHide () {
    if (this.position.includes('Left')) {
      return 'fromLeft'
    } else if (this.position.includes('Right')) {
      return 'fromRight'
    } else if (this.position === NotificationPositionEnum.topCenter) {
      return 'fromTopCenter'
    } else {
      return 'fromBottomCenter'
    }
  }

  constructor(@Inject(NOTIFY_DATA) public notificationData: any) { }

  ngOnInit(): void {
    if (this.timeout > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        this.close()
      }, this.timeout)
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }

  public close () {
    this.closeEmitter.emit(true)
  }
}