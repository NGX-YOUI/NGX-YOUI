import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/feature/home/page/home.component';
import { BackendComponent } from './backend.component';

const routes: Routes = [
  { 
    path: '', 
    component: BackendComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'guide', loadChildren: () => import('src/app/feature/guide/guide.module').then(m => m.GuideModule) },
      { path: 'auth', loadChildren: () => import('src/app/feature/auth/auth.module').then(m => m.AuthModule) },
      { path: 'demo', loadChildren: () => import('src/app/feature/demo/demo.module').then(m => m.DemoModule) }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
