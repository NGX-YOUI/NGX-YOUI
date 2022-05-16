import { ICodeTab } from "../../component/code-tab/ICodeTab";

export const NotificationSample: {[key:string]: ICodeTab } = {
  setup: {
    expanded: true,
    examples: [
      {
        title: 'style.css',
        code: `@import '~ngx-youi/style/component/notification.css';`
      },
      {
        title: 'module.ts',
        code: `import { NgModule } from "@angular/core";
import { NotificationModule } from 'ngx-youi';

@NgModule({
  imports: [NotificationModule],
})

export class YourModuleClass {}`
      }
    ]
  },
  style: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-green" (click)="showSuccessNotify()">success</button>
<button class="btn btn-cyan" (click)="showInfoNotify()">info</button>
<button class="btn btn-yellow" (click)="showWarningNotify()">warning</button>
<button class="btn btn-red" (click)="showDangerNotify()">danger</button>
<button class="btn btn-red bg-red-200 text-black" (click)="showCustomNotify()">custom</button>`
      },
      {
        title: 'component.css',
        code: `::ng-deep .custom-youi-notification-icon {
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-notification-wrapper {
  background-color: rgb(254 202 202);
}

::ng-deep .custom-youi-notification-title {
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-notification-content {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(185 28 28);
}

::ng-deep .custom-youi-notification-close {
  border-radius: 9999px;
  background-color: rgb(0 0 0 / 0.1);
  color: rgb(255 255 255);
}

::ng-deep .custom-youi-notification-close:hover {
  background-color: rgb(0 0 0 / 0.3);
}`
      },
      {
        title: 'component.ts',
        code: `import { NotificationService, NotificationPositionEnum } from 'ngx-youi'

export class YourComponentClass {
  constructor(private notificationService: NotificationService) { }

  showSuccessNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.success(NotificationPositionEnum.topRight, {
      title: 'title success',
      content: \`content success \${randomNumber}\`,
      timeout: 5000
    })
  }

  showInfoNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.info(NotificationPositionEnum.topRight, {
      title: 'title info',
      content: \`content info \${randomNumber}\`,
      timeout: 5000
    })
  }

  showWarningNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.warning(NotificationPositionEnum.topRight, {
      title: 'title warning',
      content: \`content warning \${randomNumber}\`,
      timeout: 5000
    })
  }

  showDangerNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.error(NotificationPositionEnum.topRight, {
      title: 'title error',
      content: \`content error \${randomNumber}\`,
      timeout: 5000
    })
  }

  showCustomNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.basic(NotificationPositionEnum.topRight, {
      title: 'title custom',
      content: \`content custom \${randomNumber}\`,
      icon: 'thumb_up',
      timeout: 5000,
      styles: {
        iconCSSClass: 'custom-youi-notification-icon',
        wrapperClass: 'custom-notification-wrapper',
        titleCSSClass: 'custom-youi-notification-title',
        contentCSSClass: 'custom-notification-content',
        closeCSSClass: 'custom-youi-notification-close'
      }
    })
  }
}`
      }
    ]
  } ,
  position: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<button class="btn btn-gray" (click)="showNotifyPosition('topLeft')">topLeft</button>
<button class="btn btn-gray" (click)="showNotifyPosition('topCenter')">topCenter</button>
<button class="btn btn-gray" (click)="showNotifyPosition('topRight')">topRight</button>
<button class="btn btn-gray" (click)="showNotifyPosition('bottomLeft')">bottomLeft</button>
<button class="btn btn-gray" (click)="showNotifyPosition('bottomCenter')">bottomCenter</button>
<button class="btn btn-gray" (click)="showNotifyPosition('bottomRight')">bottomRight</button>`
      },
      {
        title: 'component.ts',
        code: `import { NotificationService, NotificationPositionEnum } from 'ngx-youi'

export class YourComponentClass {
  constructor(private notificationService: NotificationService) { }

  showNotifyPosition (position: string) {
    this.notificationService.basic((position as NotificationPositionEnum), {
      title: position,
      content: position,
      styles: {
        wrapperClass: 'bg-gray-500 text-white'
      }
    })
  }
}`
      }
    ]
  },
  timeout: {
    expanded: false,
    examples: [
      { 
        title: 'component.html',
        code: `<button class="btn btn-cyan" (click)="showTimeoutNotify(3000)">3s</button>
<button class="btn btn-cyan" (click)="showTimeoutNotify(0)">0: forever</button>
<button class="btn btn-cyan" (click)="showTimeoutNotify()">default (5s)</button>`
      },
      {
        title: 'component.ts',
        code: `import { NotificationService, NotificationPositionEnum } from 'ngx-youi'

export class YourComponentClass {
  constructor(private notificationService: NotificationService) { }

  showTimeoutNotify (timeout?: number) {
    if (timeout === undefined || timeout === null) {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: \`default timeout 5000 ms\`
      })
    } else if (timeout === 0) {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: \`forever open\`,
        timeout: 0
      })
    } else {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'title',
        content: \`timeout \${timeout} ms\`,
        timeout: timeout
      })
    }
  }
}`
      }
    ]
  },
  template: {
    expanded: false,
    examples: [
      {
        title: 'component.html',
        code: `<button class="btn btn-blue" (click)="showTemplateNotify()">template</button>
  
<ng-template #notifyIcon>
  <div class="shadow-md p-3 bg-blue-300 text-blue-700 ">iconTemplate</div>
</ng-template>

<ng-template #notifyTitle>
  <div class="shadow-md p-3 bg-rose-300 rounded-sm text-rose-700">titleTemplate</div>
</ng-template>

<ng-template #notifyContent>
  <div class="text-gray-500 bg-white mt-1 flex items-center p-2">
    <span class="material-icons text-3xl animate-spin mr-1">hourglass_empty</span>
    <span>Content Template</span>
  </div>
</ng-template>

<ng-template #notifyClose let-notify>
  <div class="shadow-md p-3 bg-green-200 rounded-sm text-green-700 italic cursor-pointer" (click)="notify.close()">closeTemplate</div>
</ng-template>`
      },
      {
        title: 'component.css',
        code: `.mt-1 {
  margin-top: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.flex {
  display: flex;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.cursor-pointer {
  cursor: pointer;
}

.items-center {
  align-items: center;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.bg-gray-200 {
  background-color: rgb(229 231 235);
}

.bg-blue-300 {
  background-color: rgb(147 197 253);
}

.bg-rose-300 {
  background-color: rgb(253 164 175);
}

.bg-white {
  background-color: rgb(255 255 255);
}

.bg-green-200 {
  background-color: rgb(187 247 208);
}

.p-0 {
  padding: 0px;
}

.p-3 {
  padding: 0.75rem;
}

.p-2 {
  padding: 0.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-normal {
  font-weight: 400;
}

.italic {
  font-style: italic;
}

.text-blue-700 {
  color: rgb(29 78 216);
}

.text-rose-700 {
  color: rgb(190 18 60);
}

.text-gray-500 {
  color: rgb(107 114 128);
}

.text-green-700 {
  color: rgb(21 128 61);
}

.shadow-md {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}`
      },
      {
        title: 'component.ts',
        code: `import { NotificationService, NotificationPositionEnum } from 'ngx-youi'

export class YourComponentClass {
  constructor(private notificationService: NotificationService) { }

  showTemplateNotify () {
    this.notificationService.success(NotificationPositionEnum.topRight, {
      timeout: 5000,
      templates: {
        iconTemplate: this.notifyIcon,
        titleTemplate: this.notifyTitle,
        contentTemplate: this.notifyContent,
        closeTemplate: this.notifyClose
      }
    })
    
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
    })
  }
}`
      }
    ]
  }
}