import { Component } from '@angular/core';
import { ProductModule as Product } from './../../models/product/product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(){}

  ngOnInit(): void {}
}
