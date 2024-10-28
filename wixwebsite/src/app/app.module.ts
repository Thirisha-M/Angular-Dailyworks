import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { SolutionscomponentComponent } from './solutionscomponent/solutionscomponent.component';
import { ResourcescomponentComponent } from './resourcescomponent/resourcescomponent.component';
import { PricingcomponentComponent } from './pricingcomponent/pricingcomponent.component';
import { NavbarrightComponent } from './navbarright/navbarright.component';
import { Content1Component } from './content1/content1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    NavbarcomponentComponent,
    ProductcomponentComponent,
    SolutionscomponentComponent,
    ResourcescomponentComponent,
    PricingcomponentComponent,
    NavbarrightComponent,
    Content1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
