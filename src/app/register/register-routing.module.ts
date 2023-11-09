import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform/regform.component';

const routes: Routes = [{path:"regist",component:RegformComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
