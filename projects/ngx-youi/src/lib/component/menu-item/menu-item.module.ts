import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuItemComponent } from "./menu-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent]
})

export class MenuItemModule {}