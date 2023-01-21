import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {PackageListComponent} from './packages/package-list/package-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {OrderDetailsComponent} from './order/order-details/order-details.component';
import {LocationListComponent} from './location/location-list/location-list.component';
import {LocationCreateComponent} from './location/location-create/location-create.component';
import {LocationDetailsComponent} from './location/location-details/location-details.component';
import {LoginComponent} from './login/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
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
        path: 'location',

        children : [
          {
            path: 'location-list',
            component: LocationListComponent
          },
          {
            path: 'location-create',
            component: LocationCreateComponent
          },
          {
            path: 'location-details/:code',
            component: LocationDetailsComponent
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
    path: 'login',
    component: LoginComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
