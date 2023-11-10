import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, from, of } from 'rxjs';
import { users } from 'src/app/models/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-summeryform',
  templateUrl: './summeryform.component.html',
  styleUrls: ['./summeryform.component.css']
})
export class SummeryformComponent implements OnInit{
  constructor(private registerservice:RegisterService){}
  public regUser$!:Observable<users[]>;
  public user!:users[];
  columnDefs: ColDef[] = [
    { field: 'نام' },
    { field: 'نامخانوادگی' },
    { field: 'سن' },
    { field: 'پسورد' },
    { field: 'جنسیت' },
    { field: 'ایمیل' },
];

rowData = [
  { نام: 'Toyota', نامخانوادگی: 'Celica', سن:35000 },
  {نام: 'Ford', نامخانوادگی: 'Mondeo', سن: 32000 },
  {نام: 'Porsche', نامخانوادگی: 'Boxster', سن: 72000 }
];

ngOnInit(): void {
  this.regUser$=this.registerservice.regUsers$;
  this.registerservice.regUsers$.subscribe(console.log);
  this.user=this.registerservice.users;
  console.log(this.user);
  
}



}
