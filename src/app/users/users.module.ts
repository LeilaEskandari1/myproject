import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import {SidebarModule} from 'primeng/sidebar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SidebarModule,
    SharedModule
  ]
})
export class UsersModule { }
