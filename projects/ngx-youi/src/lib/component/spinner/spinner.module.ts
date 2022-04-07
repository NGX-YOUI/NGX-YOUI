import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner.component";
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from "../../pipe/safe-html.pipe";

@NgModule({
  declarations: [SpinnerComponent, SafeHtmlPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [SpinnerComponent]
})

export class SpinnerModule {}