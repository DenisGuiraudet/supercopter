import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChopperAddComponent } from './chopper/chopper-add/chopper-add.component';
import { ChopperEditComponent } from './chopper/chopper-edit/chopper-edit.component';
import { ChopperGetComponent } from './chopper/chopper-get/chopper-get.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/chopper', pathMatch: 'full' 
  },
  {
    path: 'chopper/create',
    component: ChopperAddComponent
  },
  {
    path: 'chopper/edit/:id',
    component: ChopperEditComponent
  },
  {
    path: 'chopper',
    component: ChopperGetComponent
  }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}