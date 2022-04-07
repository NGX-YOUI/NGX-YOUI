import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotificationService, NotificationPositionEnum } from 'ngx-youi';
import { NotificationSample } from './notification.page.sample';

@Component({
  selector: 'youi-notification-page',
  templateUrl: './notification.page.component.html',
  styleUrls: ['./notification.page.component.scss']
})
export class NotifyPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(NotificationSample))

  @ViewChild('notifyIcon', { static: false }) notifyIcon: TemplateRef<any>
  @ViewChild('notifyTitle', { static: false }) notifyTitle: TemplateRef<any>
  @ViewChild('notifyContent', { static: false }) notifyContent: TemplateRef<any>
  @ViewChild('notifyClose', { static: false }) notifyClose: TemplateRef<any>

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  showSuccessNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.success(NotificationPositionEnum.topRight, {
      title: 'title success',
      content: `content success ${randomNumber}`,
      timeout: 5000
    })
  }

  showInfoNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.info(NotificationPositionEnum.topRight, {
      title: 'title info',
      content: `content info ${randomNumber}`,
      timeout: 5000
    })
  }

  showWarningNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.warning(NotificationPositionEnum.topRight, {
      title: 'title warning',
      content: `content warning ${randomNumber}`,
      timeout: 5000
    })
  }

  showDangerNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.error(NotificationPositionEnum.topRight, {
      title: 'title error',
      content: `content error ${randomNumber}`,
      timeout: 5000
    })
  }

  showCustomNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.basic(NotificationPositionEnum.topRight, {
      title: 'title custom',
      content: `content custom ${randomNumber}`,
      icon: 'thumb_up',
      timeout: 5000,
      styles: {
        iconCSSClass: 'custom-notification-icon',
        wrapperClass: 'custom-notification-wrapper',
        titleCSSClass: 'custom-notification-title',
        contentCSSClass: 'custom-notification-content',
        closeCSSClass: 'custom-notification-close'
      }
    }, null)
  }

  showNotifyPosition (position: string) {
    this.notificationService.basic((position as NotificationPositionEnum), {
      title: position,
      content: position,
      styles: {
        wrapperClass: 'bg-gray-500 text-white'
      }
    }, null)
  }

  showTimeoutNotify (timeout?: number) {
    if (timeout === undefined || timeout === null) {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: `default timeout 5000 ms`
      })
    } else if (timeout === 0) {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: `forever open`,
        timeout: 0
      })
    } else {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: `timeout ${timeout} ms`,
        timeout: timeout
      })
    }
  }

  showTemplateNotify () {
    this.notificationService.success(NotificationPositionEnum.topRight, {
      timeout: 5000,
      templates: {
        iconTemplate: this.notifyIcon,
        titleTemplate: this.notifyTitle,
        contentTemplate: this.notifyContent,
        closeTemplate: this.notifyClose
      }
    }, null)
    
    this.notificationService.basic(NotificationPositionEnum.topRight, {
      timeout: 5000,
      templates: {
        iconTemplate: this.notifyIcon,
        titleTemplate: this.notifyTitle,
        contentTemplate: this.notifyContent,
        closeTemplate: this.notifyClose
      },
      styles: {
        iconCSSClass: 'text-lg mt',
        wrapperClass: 'p-0 bg-gray-200',
        titleCSSClass: 'font-normal text-blue-700 text-2xl',
        contentCSSClass: 'text-blue-700 text-md',
        closeCSSClass: 'text-blue-700'
      }
    }, null)
  }
}
