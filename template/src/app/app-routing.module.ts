import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {PackageListComponent} from './packages/package-list/package-list.component';
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {OrderListComponent} from "./order/order-list/order-list.component";
import {OrderDetailsComponent} from "./order/order-details/order-details.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'products',

        children : [
          {
            path: 'product-list',
            component: ProductListComponent
          },
          {
            path: 'product-create',
            component: ProductCreateComponent
          },
          {
            path: 'product-details/:sku',
            component: ProductDetailsComponent
          }
          ]},
      {
        path: 'customers',

        children : [
          {
            path: 'customer-list',
            component: CustomerListComponent
          }, {
            path: 'customer-create',
            component: CustomerCreateComponent
          },
          ]}, {
        path: 'orders',

        children : [
          {
            path: 'order-list',
            component: OrderListComponent
          }, {
            path: 'order-detail/:code',
            component: OrderDetailsComponent
          },
          ]},
      {
        path: 'package',
        component: PackageListComponent

      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
