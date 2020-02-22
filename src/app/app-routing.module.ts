import { AboutComponent } from './page/about/about.component';
import { FeaturesComponent } from './page/features/features.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},{
  path: 'home',
  component: HomeComponent,
},{
  path: 'features',
  component: FeaturesComponent,
},{
  path: 'about',
  component: AboutComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
