import { Injectable } from '@angular/core';
import { CartModule } from '../models/cart/cart.module';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartModule[] = [];
  private cart = new Subject<CartModule[]>();

  constructor() { }

  addToCart(product: CartModule) {
    this.items.push(product);
    this.cart.next(this.items);
  }

  removeFromCart(product: CartModule) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cart.next(this.items);
    }
  }

  getCart(): Observable<CartModule[]> {
    return this.cart.asObservable();
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item?.totalAmount || 0), 0);
  }

  getItems(): CartModule[] {
    return this.items
  }

  clearCart() {
    this.items = [];
    this.cart.next(this.items);
  }
}
