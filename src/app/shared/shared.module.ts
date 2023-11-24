import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {BrowserModule} from '@angular/platform-browser'
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ReactiveFormsModule, 
  
    InputTextModule,PasswordModule,
    ButtonModule,AgGridModule,
    DropdownModule,CardModule,ToolbarModule
  ]
})
export class SharedModule { }
