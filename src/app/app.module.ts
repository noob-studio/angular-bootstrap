import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductComponent } from './page/product/product.component';
import { BranchComponent } from './page/branch/branch.component';
import { UserComponent } from './page/user/user.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { DropdownBranchComponent } from './shared/dropdown-branch/dropdown-branch.component';
import { DropdownProductComponent } from './shared/dropdown-product/dropdown-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    BranchComponent,
    UserComponent,
    DropdownComponent,
    DropdownBranchComponent,
    DropdownProductComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
