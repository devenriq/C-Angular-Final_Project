import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';

import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SingupComponent,
    DetailsComponent,
    ProductsComponent,
    AddProductComponent,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SingupComponent,
    DetailsComponent,
    ProductsComponent,
    AddProductComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class PagesModule {}
