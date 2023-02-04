import { Component, Input } from '@angular/core';
import { ProductModule } from './../../models/product/product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: ProductModule;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
}
