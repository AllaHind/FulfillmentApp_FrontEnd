import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import {
  NgbButtonsModule,
  NgbDropdownModule,
  NgbModule,
  NgbTabsetModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import {NgxBarcodeModule} from 'ngx-barcode';
import {
  BarcodeGeneratorAllModule,
  BarcodeGeneratorModule,
  DataMatrixGeneratorAllModule
} from '@syncfusion/ej2-angular-barcode-generator';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import {authInterceptorProviders} from "./security/_helpers/auth.interceptor";
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    ProductListComponent,
    PackageListComponent,
    OrderListComponent,
    CustomerListComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    CustomerCreateComponent,
    OrderDetailsComponent,
    LocationListComponent,
    LocationCreateComponent,
    LocationDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BarcodeGeneratorModule,
    DataMatrixGeneratorAllModule
  ],
  providers: [NavigationItem, authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
