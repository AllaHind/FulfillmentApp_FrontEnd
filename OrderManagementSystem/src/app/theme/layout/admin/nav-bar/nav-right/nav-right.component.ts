import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {TokenStorageService} from "../../../../../security/_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  currentUser: any;
  constructor(private tokenStorageService: TokenStorageService, private router:Router) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();

  }

  logout() {
    const conf = confirm('Are you sure you want to logout ?');
    if (!conf) { return; }
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
