import { Component, OnInit } from '@angular/core';
import {Customer} from "../../controller/models/customer";
import {LocationService} from "../../controller/services/location.service";
import {Location} from "../../controller/models/location";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {

  constructor(public locationService : LocationService,private router:Router) { }
  ngOnInit(): void {
  }
  get location(): Location {
    return this.locationService.location;
  }

  save() {
    this.locationService.save();

  }
  goBack() {

    this.router.navigateByUrl('/location/location-list');

  }


}
