import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../controller/services/customer.service";
import {Customer} from "../../controller/models/customer";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService : CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.customerService.customerList();

  }

  get customer(): Customer {
    return this.customerService.customer;
  }
  get customers(): Array<Customer>{
    return  this.customerService.customers;
  }

  update(i: number, c: any) {
    this.router.navigateByUrl('/customers/customer-create');
    this.customerService.edit(i, c);

  }

  delete(customer: number, index: number) {
    const conf = confirm("Are you sure you want to delete this customer ?");
    if(!conf) return;
    this.customerService.deletecustomer(customer, index);

  }
  btnClick= function () {
    console.log('clicked');
    this.router.navigateByUrl('/customers/customer-create');

  };
  findcustomers() {
    this.customerService.customerList();

  }

  public detail(index: string) {
    this.router.navigate(['/customers/customer-details/', index] );
  }
}
