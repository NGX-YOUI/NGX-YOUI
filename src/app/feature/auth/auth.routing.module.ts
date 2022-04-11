import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserReadComponent } from "./page/user-read/user-read.component";
import { UserCreateComponent } from "./page/user-create/user-create.component";
import { UserEditComponent } from "./page/user-edit/user-edit.component";
import { UserListComponent } from "./page/user-list/user-list.component";

const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'list', component: UserListComponent, data: { title: 'NGX-YOUI - User List' } },
      { path: 'create', component: UserCreateComponent, data: { title: 'NGX-YOUI - Add User' } },
      { path: 'edit/:id', component: UserEditComponent, data: { title: 'NGX-YOUI - Edit User' } },
      { path: 'read/:id', component: UserReadComponent, data: { title: 'NGX-YOUI - Browse User' } }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule {}