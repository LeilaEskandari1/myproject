import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegformComponent } from './regform/regform.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,SharedModule
  ]
})
export class RegisterModule { }
