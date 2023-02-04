import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModule as Product } from './../../models/product/product.module';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product: Product = new Product;
  products: Product[] = [];

  constructor(private productService: ProductService,private route: ActivatedRoute){}

  ngOnInit() {
    this.productService.getProducts().subscribe(prods => {
      this.products = prods;

      this.route.params.subscribe(params => {
        const id = params['productId'];
        console.log(params)
        let prod = this.getProductById(id);
        if(prod){
          this.product = prod;
        }
      });
    })
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === +id);
  }
}
