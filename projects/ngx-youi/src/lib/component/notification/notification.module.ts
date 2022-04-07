import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotificationComponent } from "./notification.component";
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { NotificationService } from "./notification.service";
import { ABSTRACT_INJECT } from "../../model/inject.token";

@NgModule({
  declarations: [NotificationContainerComponent, NotificationComponent],
  imports: [CommonModule, OverlayModule],
  exports: [NotificationContainerComponent, NotificationComponent],
  providers: [NotificationService, 
      {
        provide: ABSTRACT_INJECT,
        useExisting: NotificationService 
      }
  ]
})

export class NotificationModule {}