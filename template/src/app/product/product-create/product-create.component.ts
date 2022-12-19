import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../controller/services/product.service";
import {Product} from "../../controller/models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {


  constructor(public productService: ProductService,private  router:Router) { }

  ngOnInit(): void {
  }

  get product(): Product {
    return this.productService.product;
  }
  get products(): Array<Product>{
    return  this.productService.products;
  }
  save() {
    this.productService.save();

  }
goBack()
{

  this.router.navigateByUrl('/products/product-list');

}

}
