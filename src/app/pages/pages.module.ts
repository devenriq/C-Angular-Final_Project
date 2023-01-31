import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SingupComponent,
    DetailsComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
