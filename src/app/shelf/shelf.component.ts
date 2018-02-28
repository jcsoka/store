import { Component, OnInit } from '@angular/core';
import {HttpService } from '../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  results: any;
  search: any;
  cartCount: any;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.cartCount = this.cookieService.get('cartCount');
    if (this.cartCount < 1) {
      this.cookieService.set('cartCount','0');
      this.cartCount = 0;
    }
    this.search = this.route.snapshot.params['title'];
    this.getJson();
  }

  doSearch() {
    this.router.navigate(['/search/' + this.search]);
    this.getJson();
  }

  getJson() {
    this.httpService.get('?q=' + this.search).subscribe(res => {
      this.results = res;
    });
  }

}
