import { UserComponent } from './page/user/user.component';
import { ProductComponent } from './page/product/product.component';
import { BranchComponent } from './page/branch/branch.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},{
  path: 'home',
  component: HomeComponent
},{
  path: 'product',
  component: ProductComponent,
},{
  path: 'branch',
  component: BranchComponent,
},{
  path: 'user',
  component: UserComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
