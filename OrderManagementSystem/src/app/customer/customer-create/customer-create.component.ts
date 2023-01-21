import { Component, OnInit } from '@angular/core';
import {Product} from '../../controller/models/product';
import {CustomerService} from '../../controller/services/customer.service';
import {Customer} from '../../controller/models/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  constructor(public  customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  get customer(): Customer {
    return this.customerService.customer;
  }

  save() {
    this.customerService.save();

  }
  goBack() {

    this.router.navigateByUrl('/customers/customer-list');

  }


}
