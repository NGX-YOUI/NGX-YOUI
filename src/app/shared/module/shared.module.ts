import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighlightModule } from "ngx-highlightjs";
import { CodeTabComponent } from "src/app/feature/demo/component/code-tab/code-tab.component";
import { LoadingDialogComponent } from "../component/loading-dialog/loading-dialog.component";
import { SharedNgYouiModule } from "./shared.ngxyoui.module";

@NgModule({
  declarations: [LoadingDialogComponent, CodeTabComponent],
  imports: [CommonModule, SharedNgYouiModule, HighlightModule],
  exports: [SharedNgYouiModule, LoadingDialogComponent, HighlightModule, CodeTabComponent]
})

export class SharedModule {}