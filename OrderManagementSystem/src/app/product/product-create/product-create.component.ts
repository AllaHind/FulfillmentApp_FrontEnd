import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../controller/services/product.service";
import {Product} from "../../controller/models/product";
import {Router} from "@angular/router";
import {CategoryService} from "../../controller/services/category.service";
import {Category} from "../../controller/models/category";
import {LocationService} from "../../controller/services/location.service";
import {Location} from "../../controller/models/location";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {


  constructor(public productService: ProductService,private  router:Router,private categoryService:CategoryService,private locationService:LocationService) { }

  ngOnInit(): void {
    this.findCategory();
    this.locationService.notTaken();

  }
  get location(): Location {
    return this.locationService.location;
  }
  get locations(): Array<Location> {
    return  this.locationService.locations;
  }
  get categories(): Array<Category>{
    return  this.categoryService.categories;
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

findCategory()
{
  return this.categoryService.categoryList();
}

}
