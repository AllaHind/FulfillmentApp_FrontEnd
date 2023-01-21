import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../controller/services/location.service";
import {Product} from "../../controller/models/product";
import {Location} from "../../controller/models/location";
import {Order} from "../../controller/models/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  constructor(private locationService : LocationService,private router:Router) { }

  ngOnInit(): void {
    this.locationService.locationList();
  }
  get location(): Location {
    return this.locationService.location;
  }
  get locations(): Array<Location> {
    return  this.locationService.locations;
  }

  delete(location: number, index: number) {
    const conf = confirm("Are you sure you want to delete this location ?");
    if(!conf) return;
    this.locationService.deleteLocation(location, index);

  }
  public detail(index: string) {
    this.router.navigate(['/location/location-details/', index] );
  }
}
