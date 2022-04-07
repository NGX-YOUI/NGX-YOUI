import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DatatableComponent } from "./datatable.component";
import { DatatableTemplateDirective } from "./datatable.directive";

@NgModule({
  declarations: [DatatableTemplateDirective, DatatableComponent],
  imports: [CommonModule],
  exports: [DatatableTemplateDirective, DatatableComponent]
})

export class DatatableModule {}