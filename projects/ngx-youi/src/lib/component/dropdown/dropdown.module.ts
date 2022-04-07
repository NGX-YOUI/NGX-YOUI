import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { DropdownComponent } from "./dropdown.component";
import { DropdownDirective } from "./dropdown.directive";
import { DropdownItemDirective } from "./dropdown-item.directive";

@NgModule({
  declarations: [DropdownComponent, DropdownDirective, DropdownItemDirective],
  imports: [CommonModule, OverlayModule],
  exports: [DropdownComponent, DropdownDirective, DropdownItemDirective]
})

export class DropdownModule {}