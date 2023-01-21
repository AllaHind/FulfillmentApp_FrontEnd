import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../controller/services/product.service';
import {Product} from '../../controller/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public id: string;
  public value: '12D23';
  imageUrl: SafeResourceUrl;
  uploading: boolean = false;
  imageToShow: any = null;
  showSpinner: boolean = true;

  constructor(public productService: ProductService, private actRoute: ActivatedRoute, private router: Router, private  http: HttpClient, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('sku');
    this.productService.findById(this.id);
    if(this.product.stockQuantity <=this.product.supplyLevel)
    {
      this.product.status='OUT_OF_STOCK';
      this.productService.save();
    }
    console.log(this.product.name);
    this.productService.fetchProfileImage(this.id).subscribe(image => this.createImage(image),
      err => {
      });
  }

  get product(): Product {
    return this.productService.product;
  }

  goBack() {

    this.router.navigateByUrl('/products/product-list');

  }


  private createImage(image: Blob) {
    if (image && image.size > 0) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
        this.showSpinner = false;
      }, false);

      reader.readAsDataURL(image);
    } else {
      this.showSpinner = false;
    }
  }


}
