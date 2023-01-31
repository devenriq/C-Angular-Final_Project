import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  exports:[
    NavComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
