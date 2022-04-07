import { NgModule } from '@angular/core';

import { BackendRoutingModule } from './backend-routing.module';

import { HomeComponent } from 'src/app/feature/home/page/home.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { BackendComponent } from './backend.component';
import { CommonModule } from '@angular/common';
import { LayoutSystemModule } from 'src/app/shared/layout/layout.module';


@NgModule({
  imports: [CommonModule, SharedModule, BackendRoutingModule, LayoutSystemModule],
  declarations: [BackendComponent, HomeComponent],
  exports: [HomeComponent]
})
export class BackendModule { }
