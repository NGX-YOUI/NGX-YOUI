import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { GettingStartComponent } from './page/getting-start/getting-start.component';


@NgModule({
  declarations: [GettingStartComponent],
  imports: [
    CommonModule,
    SharedModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
