import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummeryformComponent } from './summeryform/summeryform.component';

const routes: Routes = [{path:"summeryform",component:SummeryformComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummeryRoutingModule { }
