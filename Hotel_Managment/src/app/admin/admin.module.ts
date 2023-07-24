import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from '../user/user.component';
import { OwnerRoutingModule } from '../owner/owner-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
  
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OwnerRoutingModule,
    UserRoutingModule
    
  ]
})
export class AdminModule { }
