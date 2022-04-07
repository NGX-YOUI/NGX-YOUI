import { InjectionToken, TemplateRef } from "@angular/core";

export interface INotificationBaseProp {
  title?: string,
  content?: string,
  icon?: string,
  timeout?: number,
  templates?: INotificationTemplate,
  styles?: INotificationStyleOption
}

export interface INotificationStyleOption {
  wrapperClass?: string,
  iconCSSClass?: string,
  titleCSSClass?: string,
  contentCSSClass?: string,
  closeCSSClass?: string
}

export interface INotificationTemplate {
  iconTemplate?: TemplateRef<any>,
  titleTemplate?: TemplateRef<any>,
  contentTemplate?: TemplateRef<any>,
  closeTemplate?: TemplateRef<any>
}

export const NOTIFY_DATA = new InjectionToken('NOTIFY DATA');