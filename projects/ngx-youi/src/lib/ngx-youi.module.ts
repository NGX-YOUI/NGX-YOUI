import { NgModule } from "@angular/core";
import { BreadcrumbModule } from "./component/breadcrumb/breadcrumb.module";
import { DatatableModule } from "./component/datatable/datatable.module";
import { DialogModule } from "./component/dialog/dialog.module";
import { DropdownModule } from "./component/dropdown/dropdown.module";
import { ExpansionMenuItemModule } from "./component/expansion-menu-item/expansion-menu-item.module";
import { MenuItemModule } from "./component/menu-item/menu-item.module";

import { NotificationModule } from "./component/notification/notification.module";
import { PaginationModule } from "./component/pagination/pagination.module";
import { SelectModule } from "./component/select/select.module";
import { SpinnerModule } from "./component/spinner/spinner.module";
import { TabModule } from "./component/tab/tab.module";

export { BreadcrumbModule } from "./component/breadcrumb/breadcrumb.module";
export { DatatableModule } from "./component/datatable/datatable.module";
export { DropdownModule } from "./component/dropdown/dropdown.module";
export { ExpansionMenuItemModule } from "./component/expansion-menu-item/expansion-menu-item.module";
export { MenuItemModule } from "./component/menu-item/menu-item.module";
export { NotificationModule } from "./component/notification/notification.module";
export { PaginationModule } from "./component/pagination/pagination.module";
export { SelectModule } from "./component/select/select.module";
export { SpinnerModule } from "./component/spinner/spinner.module";
export { DialogModule } from "./component/dialog/dialog.module";
export { TabModule } from "./component/tab/tab.module";

export { BreadcrumbComponent } from "./component/breadcrumb/breadcrumb.component";
export { BreadcrumbItemComponent } from "./component/breadcrumb/breadcrumb-item/breadcrumb-item.component";
export { DatatableComponent } from "./component/datatable/datatable.component";
export { DatatableTemplateDirective } from "./component/datatable/datatable.directive";
export * from "./component/datatable/ITable";
export { DropdownComponent } from "./component/dropdown/dropdown.component";
export { DropdownDirective } from "./component/dropdown/dropdown.directive";
export { DropdownItemDirective } from "./component/dropdown/dropdown-item.directive";
export { ExpansionMenuItemComponent } from "./component/expansion-menu-item/expansion-menu-item.component";
export { MenuItemComponent } from "./component/menu-item/menu-item.component";
export { NotificationComponent } from "./component/notification/notification.component";
export { NotificationContainerComponent } from "./component/notification/notification-container/notification-container.component";
export { NotificationService } from "./component/notification/notification.service";
export { NotificationBase } from "./component/notification/notification.base";
export { PaginationComponent } from "./component/pagination/pagination.component";
export { SelectComponent } from "./component/select/select.component";
export { SelectOptionComponent } from "./component/select/select-option/select-option.component";
export { SpinnerComponent } from "./component/spinner/spinner.component";
export * from "./component/dialog/IDialog";
export { DialogService } from "./component/dialog/dialog.service";
export { BasicDialogComponent } from "./component/dialog/basic-dialog/basic-dialog.component";
export { ConfirmDialogComponent } from "./component/dialog/confirm-dialog/confirm-dialog.component";
export { DialogBase } from "./component/dialog/dialog.base";
export { TabComponent } from "./component/tab/tab.component";
export { TabPanelDirective } from "./component/tab/tab-panel.directive";

export { NotificationPositionEnum } from "./component/notification/NotificationPositionEnum";
export { IOption } from "./component/select/IOption";

@NgModule({
  declarations: [],
  imports: [BreadcrumbModule, DropdownModule, DatatableModule, SpinnerModule, NotificationModule, SelectModule, ExpansionMenuItemModule, MenuItemModule, PaginationModule, DialogModule, TabModule],
  exports: [BreadcrumbModule, DropdownModule, DatatableModule, SpinnerModule, NotificationModule, SelectModule, ExpansionMenuItemModule, MenuItemModule, PaginationModule, DialogModule, TabModule]
})

export class NgxYouiModule {}