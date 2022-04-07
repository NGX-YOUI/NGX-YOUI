import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { BasicDialogComponent } from './basic-dialog/basic-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogBase } from './dialog.base';
import { DIALOG_DATA, IDialogBackdropConfig, IBasicDialogProp, IConfirmDialogProp } from './IDialog';

@Injectable()
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) { }

  public basic (prop: IBasicDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    const ok = {
      label: prop.ok?.label ?? 'OK',
      cssClass: prop.ok?.cssClass ?? ''
    }
    
    return this.open(BasicDialogComponent, {
      title: prop.title,
      body: prop.body,
      ok,
      templates: prop.templates,
      styles: prop.styles
    }, data, backdropConfig)
  }

  public info (prop: IBasicDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    return this.basic({
      title: prop.title,
      body: prop.body,
      ok: prop.ok,
      styles: {
        titleCSSClass: 'dialog-title_info',
        actionsBtnCSSClass: 'dialog-actions__btn_info'
      }
    }, data, backdropConfig)
  }

  public success (prop: IBasicDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    return this.basic({
      title: prop.title,
      body: prop.body,
      ok: prop.ok,
      styles: {
        titleCSSClass: 'dialog-title_info',
        actionsBtnCSSClass: 'dialog-actions__btn_info'
      }
    }, data, backdropConfig)
  }

  public alert (prop: IBasicDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    return this.basic({
      title: prop.title,
      body: prop.body,
      ok: prop.ok,
      styles: {
        titleCSSClass: 'dialog-title_alert',
        actionsBtnCSSClass: 'dialog-actions__btn_alert'
      }
    }, data, backdropConfig)
  }

  public warning (prop: IBasicDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    return this.basic({
      title: prop.title,
      body: prop.body,
      ok: prop.ok,
      styles: {
        titleCSSClass: 'dialog-title_warning',
        actionsBtnCSSClass: 'dialog-actions__btn_warning'
      }
    }, data, backdropConfig)
  }

  public confirm (prop: IConfirmDialogProp, data?: any, backdropConfig?: IDialogBackdropConfig ) {
    const ok = {
      label: prop.ok?.label ?? 'OK',
      cssClass: prop.ok?.cssClass
    }
    const close = {
      label: prop.close?.label ?? 'CLOSE',
      cssClass: prop.close?.cssClass
    }

    return this.open(ConfirmDialogComponent, {
      title: prop.title,
      body: prop.body,
      ok,
      close,
      styles: prop.styles
    }, data, backdropConfig)
  }

  public open<T extends DialogBase>(component: ComponentType<T>, prop?: { [key: string]: any }, data?: any, backdropConfig?: IDialogBackdropConfig ) {  
    backdropConfig = {
      hasBackdrop: backdropConfig?.hasBackdrop ?? true,
      backdropCSSClass: backdropConfig?.backdropCSSClass ?? '',
      closeAfterClick: backdropConfig?.closeAfterClick ?? true
    }

    if (!backdropConfig.closeAfterClick) {
      backdropConfig.backdropCSSClass += ' dialog-backdrop--block'
    }
    
    const overlayRef = this.createOverlay(backdropConfig.hasBackdrop, backdropConfig.backdropCSSClass);
    const dialogComponent = this.attachDialogContainer<T>(component, overlayRef, data);
    if (prop) {
      for (let key in prop) {
        (dialogComponent as any)[key] = prop[key]
      }
    }

    if (backdropConfig.hasBackdrop && backdropConfig.closeAfterClick) {
      overlayRef.backdropClick().subscribe(event => {
        dialogComponent.handleClose()
      })
    }

    dialogComponent.visible = true
    return dialogComponent
  }

  private attachDialogContainer<T extends DialogBase>(component: ComponentType<T>, overlayRef: OverlayRef, passData?: any) {
    const dataInjector = this.injectData(passData, this.injector)
    const containerPortal = new ComponentPortal(component, null, dataInjector);
    const containerRef: ComponentRef<T> = overlayRef.attach(containerPortal);
    containerRef.instance.overlayRef = overlayRef
    return containerRef.instance;
  }

  // private attachComponent<T extends DialogBase> (componentRef: ComponentRef<T>) {
  //   this.appRef.attachView(componentRef.hostView);
    
  //   const componentEl = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
  //   document.append(componentEl)
  // }

  private createOverlay(hasBackdrop: boolean, backdropClass: string) {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: hasBackdrop,
      backdropClass: ['dialog-backdrop', ...backdropClass.split(' ')],
      panelClass: '',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return this.overlay.create(overlayConfig);
  }

  private injectData (data: any, injector: Injector) {
    return Injector.create({
      parent: injector,
      providers: [
        { provide: DIALOG_DATA, useValue: data ?? null }
      ]
    });
  }
}
