import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyPageComponent } from './page/notification/notification.page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { DemoRoutingModule } from './demo.routing.module';
import { DropdownPageComponent } from './page/dropdown/dropdown.page.component';
import { SelectPageComponent } from './select/select.page.component';
import { DatatablePageComponent } from './page/datatable/datatable.page.component';
import { MenuItemPageComponent } from './page/menu-item/menu-item.page.component';
import { ExpansionMenuItemPageComponent } from './page/expansion-menu-item/expansion-menu-item.page.component';
import { BreadcrumbPageComponent } from './page/breadcrumb/breadcrumb.page.component';
import { SpinnerPageComponent } from './page/spinner/spinner-page.component';
import { PaginationPageComponent } from './page/pagination/pagination-page.component';
import { DialogPageComponent } from './page/dialog/dialog.page.component';
import { CustomDialogComponent } from './page/dialog/custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [NotifyPageComponent, DropdownPageComponent, SelectPageComponent, DatatablePageComponent, MenuItemPageComponent, ExpansionMenuItemPageComponent, BreadcrumbPageComponent, SpinnerPageComponent, PaginationPageComponent, DialogPageComponent, CustomDialogComponent],
  imports: [
    CommonModule, DemoRoutingModule, FormsModule, ReactiveFormsModule, SharedModule
  ]
})
export class DemoModule { }
