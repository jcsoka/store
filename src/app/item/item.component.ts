import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../services/http.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: any;
  results: any;
  cartcount: any;
  allIds: any;
  stringcheck: any;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.cartcount = this.cookieService.get('cartCount');
    this.getJson();
  }

  addToCart(title) {
    this.cartcount = this.cookieService.get('cartCount');
    this.cartcount = (this.cartcount * 1) + 1;
    this.allIds = this.cookieService.get('allIds');
    if (this.cartcount > 1) {
      this.allIds += "---";
    }
    this.allIds += this.id;
    // update values
    this.cookieService.set('cartCount', this.cartcount);
    this.cookieService.set('allIds',this.allIds);
    // store new value
    this.cookieService.set(this.id, title);
  }

  itemInCart() {
    return this.cookieService.check(this.id);
  }

  getJson() {
    this.httpService.get('?q=' + this.id).subscribe(res => {
      this.results = res;
    });
  }

}
