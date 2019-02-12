import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PageLoginComponent }   from './pages/page-login/page-login.component';
import { PageListingComponent } from './pages/page-listing/page-listing.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/business', pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: PageLoginComponent 
  },
  { 
    path: 'listing', 
    component: PageListingComponent 
  },
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}