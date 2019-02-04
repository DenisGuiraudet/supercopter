import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageListingComponent } from './page-listing/page-listing.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageListingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
