import { NgModule } from "@angular/core";
import { BreadcrumbModule, DatatableModule, DialogModule, DropdownModule, ExpansionMenuItemModule, MenuItemModule, NotificationModule, PaginationModule, SelectModule, SpinnerModule, TabModule } from 'ngx-youi';

@NgModule({
  declarations: [],
  imports: [BreadcrumbModule, DropdownModule, DatatableModule, SpinnerModule, NotificationModule, SelectModule, ExpansionMenuItemModule, MenuItemModule, PaginationModule, DialogModule, TabModule],
  exports: [BreadcrumbModule, DropdownModule, DatatableModule, SpinnerModule, NotificationModule, SelectModule, ExpansionMenuItemModule, MenuItemModule, PaginationModule, DialogModule, TabModule]
})

export class SharedNgxYouiModule {}