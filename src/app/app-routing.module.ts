import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';

const routes: Routes = [{path:" ",component:AppComponent},
{path:"register",loadChildren:()=>import('./register/register.module').then(q=>q.RegisterModule),},
{path:"summery",loadChildren:()=>import('./summery/summery.module').then(q=>q.SummeryModule),},
{path:"users",loadChildren:()=>import('./users/users.module').then(q=>q.UsersModule),},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
