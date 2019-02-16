import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChopperAddComponent } from './chopper/chopper-add/chopper-add.component';
import { ChopperGetComponent } from './chopper/chopper-get/chopper-get.component';
import { ChopperEditComponent } from './chopper/chopper-edit/chopper-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChopperService } from './chopper.service';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ChopperAddComponent,
    ChopperGetComponent,
    ChopperEditComponent
  ],
  providers: [ ChopperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
