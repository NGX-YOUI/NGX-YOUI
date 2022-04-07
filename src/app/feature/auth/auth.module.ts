import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/module/shared.module";
import { UserCreateComponent } from "./page/user-create/user-create.component";
import { AuthRoutingModule } from "./auth.routing.module";
import { UserListComponent } from "./page/user-list/user-list.component";
import { UserCrudComponent } from './component/user-crud-wrapper/user-crud-wrapper.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserReadComponent } from './page/user-read/user-read.component';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent, UserCrudComponent, UserEditComponent, UserReadComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, SharedModule]
})

export class AuthModule {}