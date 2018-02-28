// Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components //
import { AppComponent } from './app.component';
import { ShelfComponent } from './shelf/shelf.component';
import { ItemComponent } from './item/item.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CartComponent } from './cart/cart.component';
import { CookieService } from 'ngx-cookie-service';

// Services //
import {HttpService} from './services/http.service';

const appRoutes: Routes = [
  {path: '', component: SearchpageComponent},
  {path: 'search/:title', component: ShelfComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'cart/', component: CartComponent}
  {path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    ItemComponent,
    SearchpageComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    HttpService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
