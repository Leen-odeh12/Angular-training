import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EShoppingComponentComponent } from './e-shopping-component/e-shopping-component.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ProductsComponent } from './Friends/products.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    EShoppingComponentComponent,
    NavComponent,
    HomeComponent,
    NotificationsComponent,
    EventBindingComponent,
    ProductsComponent,
    ProductComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
