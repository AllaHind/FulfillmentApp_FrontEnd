import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}


const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }],

  },
  {
  id: 'Inventory',
  title: 'Inventory',
  type: 'group',
    icon: 'feather icon-monitor',
  children: [
    {

      id: 'Products',
      title: 'Products',
      type: 'item',
      url: '/products/product-list',
      icon: 'feather icon-inbox',
      classes: 'nav-item',
      children:  [{
        id: 'Products',
        title: 'Products',
        type: 'item',

        url: '/products/product-create',
        icon: 'feather icon-inbox',
        classes: 'nav-item'
      }]
    },
  ]},
  {
  id: 'Sales',
  title: 'Sales',
  type: 'group',
  icon: 'feather icon-monitor',
  children: [
  {
        id: 'Orders',
        title: 'Orders',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-shopping-cart'
      },
      {
        id: 'Package',
        title: 'Packages',
        type: 'item',
        url: '/package',
        classes: 'nav-item',
        icon: 'feather icon-package'
      },
  {
    id: 'Customers',
    title: 'Customers',
    type: 'item',
    icon: 'feather icon-user',
    url: '/tbl-bootstrap/bt-basc',
    classes: 'nav-item',
  },
    {
        id: 'charts',
        title: 'Charts',
        type: 'group',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      },
    {
      id: 'maps',
      title: 'Maps',
      type: 'item',
      url: '/maps/google',
      classes: 'nav-item',
      icon: 'feather icon-map',
    }

  ], }];
@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
