import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../controller/services/product.service';
import {Product} from '../../controller/models/product';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public id: string;

  constructor(private productService: ProductService,private actRoute: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('sku');
    this.productService.findById(this.id);
console.log(this.product.name) ;
  }
  get product(): Product {
    return this.productService.product;
  }
  goBack()
  {

    this.router.navigateByUrl('/products/product-list');

  }


}
