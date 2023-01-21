import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import html2canvas from 'html2canvas';

import {OrderService} from '../../controller/services/order.service';
import {Order} from "../../controller/models/order";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrderService,private router:Router) { }

  ngOnInit(): void {
    this.orderService.orderList();
  }

  get order(): Order {
    return this.orderService.order;
  }
  get orders(): Array<Order>{
    return  this.orderService.orders;
  }

  update(i: number, c: any) {
    this.router.navigateByUrl('/orders/order-create');
    this.orderService.edit(i, c);

  }

  delete(order: number, index: number) {
    const conf = confirm("Are you sure you want to delete this order ?");
    if(!conf) return;
    this.orderService.deleteOrder(order, index);

  }
  btnClick= function () {
    console.log('clicked');
    this.router.navigateByUrl('/orders/order-create');

  };

  findOrders() {
    this.orderService.orderList();

  }

  public detail(index: string) {
    this.router.navigate(['/orders/order-detail/', index] );
  }

}
