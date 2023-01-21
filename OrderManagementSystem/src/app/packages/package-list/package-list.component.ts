import {Component, OnDestroy, OnInit} from '@angular/core';
import {PackagingService} from "../../controller/services/packaging.service";
import {Packaging} from "../../controller/models/packaging";
import {Product} from "../../controller/models/product";
import {HttpClient} from "@angular/common/http";
import {element} from "protractor";
import {Observable} from "rxjs";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit,OnDestroy {
  nbr: number;
  packagingNumOfPackages: any[] = [];
  private interval: NodeJS.Timeout;
  constructor(private packagingService: PackagingService,private http:HttpClient) { }

  ngOnInit(): void {
    this.packagingService.packagingList();
    this.interval = setInterval(() => {
      this.getNumOfPackages();
    }, 10);

  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
 get packages(): Array<Packaging> {
  return  this.packagingService.packagings;
}

  public numberOfPackages(id:number): Observable<number> {
   return  this.http.get<number>('http://localhost:8080/api/v1/packaging/numberOfPackages/' + id);
  }
  getNumOfPackages() {
    this.packages.forEach((packagee) => {
      this.numberOfPackages(packagee.id).subscribe((data) => {
        this.packagingNumOfPackages[packagee.id] = data;
      });
    });
  }
}
