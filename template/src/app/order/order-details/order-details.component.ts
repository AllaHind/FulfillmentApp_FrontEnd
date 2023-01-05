import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../controller/services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../controller/models/order';
import {OrderItem} from '../../controller/models/order-item';
import {ProductService} from '../../controller/services/product.service';
import {SafeResourceUrl} from '@angular/platform-browser';
import {Product} from '../../controller/models/product';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public id: string;
  imageUrl: SafeResourceUrl;
  uploading = false;
  imageToShow: any = null;
  showSpinner = true;
  orderr=new Order();
  @ViewChild('htmlData') htmlData!: ElementRef;
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      // @ts-ignore
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Order Picking'+this.order.code+'.pdf');
    });
  }

  constructor(private http:HttpClient,private productService: ProductService, private orderService: OrderService, private actRoute: ActivatedRoute, private router: Router) {
  }

  get order(): Order {
    return this.orderService.order;
  }

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.paramMap.get('code');
    this.http.get<Order>('http://localhost:8080/api/v1/orders/' + this.id ).subscribe(order => {
      this.orderr = order;

    });

    this.orderService.findById(this.id);
    this.orderService.findOrderitem(this.id);
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.fetchProfileImage(this.orderr.items.forEach((element) => (element.product.sku))).subscribe(image => this.createImage(image),
      err => {
      });


  }

  private createImage(image: Blob) {
    if (image && image.size > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageToShow = reader.result;
        this.showSpinner = false;
      }, false);

      reader.readAsDataURL(image);
    } else {
      this.showSpinner = false;
    }
  }

  get ordersItem(): Array<OrderItem> {
    return this.orderService.ordersItem;
  }

  get product(): Product {
    return this.productService.product;
  }

  goBack() {

    this.router.navigateByUrl('/products/product-list');

  }


  public detail(index: string) {
    this.router.navigate(['/products/product-details/', index]);
  }
}
