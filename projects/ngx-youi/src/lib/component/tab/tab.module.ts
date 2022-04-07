import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabPanelDirective } from "./tab-panel.directive";
import { TabComponent } from "./tab.component";

@NgModule({
  declarations: [TabComponent, TabPanelDirective],
  imports: [CommonModule],
  exports: [TabComponent, TabPanelDirective]
})

export class TabModule {}