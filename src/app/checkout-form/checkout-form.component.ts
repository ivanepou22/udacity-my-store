import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutModule } from '../models/checkout/checkout.module';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  @Input() orderTotal: number = 0;
  name = '';
  address = '';
  card_number = '';
  order_total = 0;
  constructor(private cartService: CartService, private router: Router) {}

  formSubmit(): void {
    let order: CheckoutModule = {
      name: this.name,
      address: this.address,
      card_number: this.card_number,
      order_total: this.order_total,
    };

    //clear the form
    this.name = '';
    this.address = '';
    this.card_number = '';

    //clear cart
    this.cartService.clearCart();
  }
}
