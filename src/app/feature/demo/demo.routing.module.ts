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
      { path: 'breadcrumb', component: BreadcrumbPageComponent },
      { path: 'youi-menu-item', component: MenuItemPageComponent },
      { path: 'youi-expansion-youi-menu-item', component: ExpansionMenuItemPageComponent },
      { path: 'spinner', component: SpinnerPageComponent },
      { path: 'notification', component: NotifyPageComponent },
      { path: 'dialog', component: DialogPageComponent },
      { path: 'dropdown', component: DropdownPageComponent },
      { path: 'select', component: SelectPageComponent },
      { path: 'pagination', component: PaginationPageComponent },
      { path: 'datatable', component: DatatablePageComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DemoRoutingModule {}