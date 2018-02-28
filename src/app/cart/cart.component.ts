import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartcount: any;
  allIds: any;
  allCookies: any;

  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.cartcount = this.cookieService.get('cartCount');
    this.getAllCookies();
  }

  getAllCookies() {
    this.allCookies = this.cookieService.getAll();
    this.allIds = this.allCookies.allIds.split("---");
  }

}
