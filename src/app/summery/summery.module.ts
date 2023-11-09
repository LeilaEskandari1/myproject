import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummeryRoutingModule } from './summery-routing.module';
import { SummeryformComponent } from './summeryform/summeryform.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SummeryformComponent
  ],
  imports: [
    CommonModule,
    SummeryRoutingModule,SharedModule
  ]
})
export class SummeryModule { }
