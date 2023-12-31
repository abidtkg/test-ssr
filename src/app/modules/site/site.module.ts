import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class SiteModule { }
