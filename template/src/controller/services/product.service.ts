import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product = new Product();
  private _products = new Array<Product>();
  public errorMessage: ' ';
  public isCreateFailed = false;
  public isCreateSucessed = false;
  public local_url: 'http://localhost:8080/api/v1/products';
  constructor(private http: HttpClient) {
  }

  get product(): Product {
    if (this._product == null) {
      this._product = new Product();
    }
    return this._product;
  }

  get products(): Array<Product> {
    if (this._products == null) {
      this._products = new Array<Product>();
    }
    return this._products;
  }

  set product(value: Product) {
    this._product = value;
  }

  set products(value: Array<Product>) {
    this._products = value;
  }

  public productList() {
    this.http.get<Array<Product>>('http://localhost:8080/api/v1/products').subscribe(
      data => {

        this._products = data;

      },
      error => {
        console.log('erreur');
      }
    );

  }
}
