import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  search: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.search = 'budapest';
    this.doSearch();
  }

  doSearch() {
    this.router.navigate(['search/' + this.search]);
  }
}
