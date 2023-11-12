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
  public  rowData:any;
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'family' },
    { field: 'age' },
    { field: 'password' },
    { field: 'gender' },
    { field: 'email' },
];



ngOnInit(): void {
  this.regUser$=this.registerservice.regUsers$;
  this.registerservice.regUsers$.subscribe(console.log);
  this.user=this.registerservice.users;

this.rowData=[{
  name: this.user[0].firstName,family: this.user[0].lastName, age:this.user[0].age ,
     password:this.user[0].password,gender:this.user[0].gender,email:this.user[0].email}
    ];
  
 
}



}
