import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../controller/services/location.service";
import {Location} from "../../controller/models/location";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
id:string;
  constructor(private locationService: LocationService,private actRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('code');
    this.locationService.findById(this.id);
  }
  get location(): Location {
    return this.locationService.location;
  }
  goBack() {

    this.router.navigateByUrl('/location/location-list');

  }
}
