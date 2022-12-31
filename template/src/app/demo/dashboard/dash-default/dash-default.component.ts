import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import {ProductService} from "../../../controller/services/product.service";
import {OrderService} from "../../../controller/services/order.service";

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  nbr: number;

  constructor(public productService: ProductService,public  orderService:OrderService) {

  }

  ngOnInit() {
this.out_of_stock();
this.orderService.pendingOrder();

  }
  out_of_stock()
  {
    return this.productService.out_of_stock();
  }
}
