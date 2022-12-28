import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../controller/services/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../../controller/models/order";
import {OrderItem} from "../../controller/models/order-item";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public id: string;
  constructor(private orderService: OrderService,private actRoute: ActivatedRoute,private router: Router) { }

  get order(): Order {
    return this.orderService.order;
  }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('code');
    this.orderService.findById(this.id);
    this.orderService.findOrderitem(this.id);

  }
  get ordersItem(): Array<OrderItem> {
    return this.orderService.ordersItem;
  }
  goBack()
  {

    this.router.navigateByUrl('/products/product-list');

  }


  public detail(index: string) {
    this.router.navigate(['/products/product-details/', index] );
  }
}
