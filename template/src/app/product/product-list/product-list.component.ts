import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../controller/services/product.service";
import {Product} from "../../../controller/models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productList();
  }

  get product():Product {
    return this.productService.product;
  }
  get products():Array<Product>{
    return  this.productService.products;
  }
  btnClick= function () {
    console.log('clicked');
    this.router.navigateByUrl('/products/product-create');

  };

}
