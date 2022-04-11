import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BreadcrumbPageComponent } from "./page/breadcrumb/breadcrumb.page.component";
import { DatatablePageComponent } from "./page/datatable/datatable.page.component";
import { DialogPageComponent } from "./page/dialog/dialog.page.component";
import { DropdownPageComponent } from "./page/dropdown/dropdown.page.component";
import { ExpansionMenuItemPageComponent } from "./page/expansion-menu-item/expansion-menu-item.page.component";
import { MenuItemPageComponent } from "./page/menu-item/menu-item.page.component";
import { NotifyPageComponent } from "./page/notification/notification.page.component";
import { PaginationPageComponent } from "./page/pagination/pagination-page.component";
import { SpinnerPageComponent } from "./page/spinner/spinner-page.component";
import { SelectPageComponent } from "./select/select.page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'breadcrumb', component: BreadcrumbPageComponent, data: { title: 'NGX-YOUI - Breadcrumb' } },
      { path: 'youi-menu-item', component: MenuItemPageComponent, data: { title: 'NGX-YOUI - Menu Item' } },
      { path: 'youi-expansion-menu-item', component: ExpansionMenuItemPageComponent, data: { title: 'NGX-YOUI - Expansion Menu Item' } },
      { path: 'spinner', component: SpinnerPageComponent, data: { title: 'NGX-YOUI - Spinner' } },
      { path: 'notification', component: NotifyPageComponent, data: { title: 'NGX-YOUI - Notification' } },
      { path: 'dialog', component: DialogPageComponent, data: { title: 'NGX-YOUI - Dialog' } },
      { path: 'dropdown', component: DropdownPageComponent, data: { title: 'NGX-YOUI - Dropdown' } },
      { path: 'select', component: SelectPageComponent, data: { title: 'NGX-YOUI - Select' } },
      { path: 'pagination', component: PaginationPageComponent, data: { title: 'NGX-YOUI - Pagination' } },
      { path: 'datatable', component: DatatablePageComponent, data: { title: 'NGX-YOUI - Datatable' } }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DemoRoutingModule {}