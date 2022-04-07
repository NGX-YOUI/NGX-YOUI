import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NOTIFY_DATA, INotificationBaseProp, INotificationStyleOption, INotificationTemplate } from './INotification';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationComponent } from './notification.component';
import { NotificationPositionEnum } from './NotificationPositionEnum';

@Injectable()
export class NotificationService {
  private containerOverlayRef: OverlayRef;

  public notifications: { [key: string]: ComponentRef<any>[] } = {
    topLeft: [],
    topCenter: [],
    topRight: [],
    bottomLeft: [],
    bottomCenter: [],
    bottomRight: [],
  };

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private componenFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) {}
  
  public basic (position: NotificationPositionEnum, prop: INotificationBaseProp, data?: any) {
    prop.icon = prop.icon ?? ''
    prop.timeout = prop.timeout ?? 5000

    return this.show(NotificationComponent, position, prop, data)
  }

  public success (position: NotificationPositionEnum, prop: INotificationBaseProp, data?: any) {
    prop.icon = prop.icon ?? 'check'
    prop.styles = prop.styles ?? {}
    prop.styles.wrapperClass = 'notification_success'

    return this.basic(position, prop, data)
  }

  public warning (position: NotificationPositionEnum, prop: INotificationBaseProp, data?: any) {
    prop.icon = prop.icon ?? 'warning'
    prop.styles = prop.styles ?? {}
    prop.styles.wrapperClass = 'notification_warning'

    return this.basic(position, prop, data)
  }

  public error (position: NotificationPositionEnum, prop: INotificationBaseProp, data?: any) {
    prop.icon = prop.icon ?? 'error'
    prop.styles = prop.styles ?? {}
    prop.styles.wrapperClass = 'notification_danger'

    return this.basic(position, prop, data)
  }

  public info (position: NotificationPositionEnum, prop: INotificationBaseProp, data?: any) {
    prop.icon = prop.icon ?? 'info'
    prop.styles = prop.styles ?? {}
    prop.styles.wrapperClass = 'notification_info'

    return this.basic(position, prop, data)
  }

  public show <T extends NotificationComponent>(
    componentType: ComponentType<T>,
    position: NotificationPositionEnum,
    props?: { [key: string]: any },
    data?: any
  ) {
    this.createContainer();
    const componentRef = this.createNotification(componentType, position, props, data)
    this.attachComponent(componentRef, position)

    componentRef.instance.closeEmitter.pipe(
      takeUntil(componentRef.instance.destroy$)
    ).subscribe(() => {
      this.removeNotification(componentRef)
    })

    return componentRef.instance
  }

  /**
   * 建立 Notification 的 Container
   */
  private createContainer() {
    if (this.containerOverlayRef) {
      return;
    }

    this.containerOverlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global(),
    });

    const componentPortal = new ComponentPortal(
      NotificationContainerComponent,
      null,
      this.injector
    )
    this.containerOverlayRef.attach(componentPortal)
  }
  
  /**
   * 建立 Notification 元件
   * @param componentType 元件的類型
   * @param position 顯示位置
   * @param props 資料屬性
   * @param styleOptions CSS 樣式
   * @returns 
   */
  private createNotification <T extends NotificationComponent>(
    componentType: ComponentType<T>,
    position: NotificationPositionEnum,
    props?: { [key: string]: any },
    data?: any
  ) {
    if (this.notifications[position].length >= 7) {
      this.removeNotification(this.notifications[position][0])
    }

    const dataInjector = this.injectData(data, this.injector)
    const componentFactory = this.componenFactoryResolver.resolveComponentFactory(componentType)
    const componentRef = componentFactory.create(dataInjector)

    componentRef.instance.componentRef = componentRef
    componentRef.instance.position = position

    if (props) {
      for (const propsKey in props) {
        (componentRef.instance as any )[propsKey]= props[propsKey]
      }
    }

    this.notifications[position].push(componentRef)

    return componentRef
  }

  private attachComponent<T extends NotificationComponent> (componentRef: ComponentRef<T>, position: NotificationPositionEnum) {
    this.applicationRef.attachView(componentRef.hostView);
    
    const componentEl = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
    const adHost = document.querySelector(`.notification-container-${position}`)

    if (position.includes('bottom')) {
      adHost.append(componentEl)
    } else {
      adHost.prepend(componentEl)
    }
  }

  private removeNotification (componentRef: ComponentRef<any>) {
    this.applicationRef.detachView(componentRef.hostView)
    componentRef.destroy()

    const index = this.notifications[componentRef.instance.position].indexOf(componentRef)
    if (index >= 0) {
      this.notifications[componentRef.instance.position].splice(index, 1)
    }
  }

  private injectData (data: any, injector: Injector) {
    return Injector.create({
      parent: injector,
      providers: [
        { provide: NOTIFY_DATA, useValue: data ?? null }
      ]
    });
  }
}
