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
import {PackagingService} from "../../controller/services/packaging.service";
import {Packaging} from "../../controller/models/packaging";
import {TokenStorageService} from "../../security/_services/token-storage.service";


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
  packaging1 =new Packaging();

  @ViewChild('htmlData') htmlData!: ElementRef;
  private currentUser: any;
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
  constructor(private http:HttpClient,private productService: ProductService,private packagingService:PackagingService, private orderService: OrderService, private actRoute: ActivatedRoute
              , private router: Router,private token:TokenStorageService) {
  }

  get order(): Order {
    return this.orderService.order;
  }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.id = this.actRoute.snapshot.paramMap.get('code');
    this.packaging.order.code = this.id;
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
  get packaging(): Packaging {
    return this.packagingService.packaging;
  }

  goBack() {

    this.router.navigateByUrl('/products/product-list');

  }
  createPackage()
  {
    const conf = confirm("Are you sure you want create a packaging for this order ?");
    if(!conf) return;
    return this.SAVE();
  }
  SAVE() {
    this.http.post<string>('http://localhost:8080/api/v1/packaging/packageOrder', this.packaging).subscribe(
    data => {
      console.log("success");
      alert("Package created successfully");
      window.location.reload();
    },
    error => {
      console.log("error")
    });
  }
  public detail(index: string) {
    this.router.navigate(['/products/product-details/', index]);
  }
  changeOrderStatus(sku: string, status: string) {
    const conf = confirm("Are you sure you want to change this order status ?");
    if(!conf) return;
    this.orderService.changeStatus(sku, status, this.currentUser.username).subscribe(response => {
      alert("Status changed to "+this.order.status);
      window.location.reload();
    });
  }
}
