import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductItemDetailComponent } from './products/product-item-detail/product-item-detail.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    OrderConfirmationComponent,
    CartComponent,
    NavBarComponent,
    CheckoutFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
