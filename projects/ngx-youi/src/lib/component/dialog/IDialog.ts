import { InjectionToken, TemplateRef } from "@angular/core"

export interface IBasicDialogProp {
  title?: string,
  body?: string,
  ok?: { label?: string, cssClass?: string },
  templates?: IDialogTemplate,
  styles?: IDialogStyle
}

export interface IConfirmDialogProp extends IBasicDialogProp{
  close?: { label?:string, cssClass?: string }
}

export interface IDialogStyle {
  containerCSSClass?: string,
  titleCSSClass?: string,
  bodyCSSClass?: string,
  actionsCSSClass?: string,
  actionsBtnCSSClass?: string
}

export interface IDialogTemplate {
  titleTemplate?: TemplateRef<any>,
  bodyTemplate?: TemplateRef<any>,
  actionsTemplate?: TemplateRef<any>
}

export interface IDialogBackdropConfig {
  hasBackdrop?: boolean,
  backdropCSSClass?: string,
  closeAfterClick?: boolean
}

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');