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
export class SummeryformComponent implements OnInit {
  constructor(private registerservice: RegisterService) { }
  public regUser$!: Observable<users>;
  public user!: users[];
  public rowData: any;
  columnDefs: ColDef[] = [
    { headerName: "ایمیل", field: 'email' },
    { headerName: "جنسیت", field: 'gender' },
    { headerName: "پسورد", field: 'password' },
    { headerName: "سن", field: 'age' },
    { headerName: "نام خانوادگی", field: 'family' },
    { headerName: "نام", field: 'name' }
  ];



  ngOnInit(): void {

    this.registerservice.regUsers$.subscribe((t) => {
      this.rowData = [{

        name: t.firstName, family: t.lastName, age: t.age,
        password: t.password, gender: t.gender, email: t.email
      }
      ];
    });
    this.user = this.registerservice.users;

    // this.rowData=[{
    //   name: this.user[0].firstName,family: this.user[0].lastName, age:this.user[0].age ,
    //      password:this.user[0].password,gender:this.user[0].gender,email:this.user[0].email}
    //     ];



  }


}
