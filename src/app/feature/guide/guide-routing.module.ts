import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartComponent } from './page/getting-start/getting-start.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'getting-start', component: GettingStartComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
