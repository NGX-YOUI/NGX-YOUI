import { Component, Inject, OnInit } from '@angular/core';
import { ABSTRACT_INJECT } from '../../../model/inject.token';
import type { NotificationService } from '../notification.service';

@Component({
  selector: 'youi-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {
  constructor(@Inject(ABSTRACT_INJECT) private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public get notifications () {
    return this.notificationService.notifications
  }
}
