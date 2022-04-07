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
      { path: 'list', component: UserListComponent },
      { path: 'create', component: UserCreateComponent },
      { path: 'edit/:id', component: UserEditComponent },
      { path: 'read/:id', component: UserReadComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule {}