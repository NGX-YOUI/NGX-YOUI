import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionMenuItemComponent } from "./expansion-menu-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ExpansionMenuItemComponent],
  exports: [ExpansionMenuItemComponent]
})

export class ExpansionMenuItemModule {}