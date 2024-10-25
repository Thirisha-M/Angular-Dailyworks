import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Content1Component } from './content1/content1.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { NavbarrightComponent } from './navbarright/navbarright.component';
import { PricingcomponentComponent } from './pricingcomponent/pricingcomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { ResourcescomponentComponent } from './resourcescomponent/resourcescomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Content1Component,
    HomecomponentComponent,
    NavbarcomponentComponent,
    NavbarrightComponent,
    PricingcomponentComponent,
    ProductcomponentComponent,
    ResourcescomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
