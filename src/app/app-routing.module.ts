import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PageLoginComponent }   from './pages/page-login/page-login.component';
import { PageListingComponent } from './pages/page-listing/page-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent },
  { path: 'listing', component: PageListingComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}