import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: 'ng-template[youi-datatable-template]'
})

export class DatatableTemplateDirective {
  /**
   * headerTemplate: 表格的 thead
   * bodyTemplate: 表格的 tbody
   * header-xxx: 表格 thead 的某一個欄位 th
   * body-xxx: 表格 tbody 的某一個欄位 td
   */
  @Input('youi-datatable-template') name: string

  constructor(public template: TemplateRef<any>) {}
}

// https://stackoverflow.com/questions/54908344/dynamic-and-multiple-ngtemplate-in-angular-7
// https://www.c-sharpcorner.com/article/dynamically-loading-the-ng-template-from-its-name-in-angular-9/