import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import {Gender} from 'src/app/enums/gender';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  constructor(private registerservice:RegisterService,private router:Router){}
userForm!:FormGroup;

public gender=Object.values(Gender);
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
ngOnInit(): void {
  this.userForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl(''),
   age:new FormControl(),
   password:new FormControl(),
   confirmPassword:new FormControl(),
   gender:new FormControl(),
   email:new FormControl('')});
   
}
save(){
 
  this.registerservice.addUser( this.userForm.value  );
 console.log(this.userForm.value);
 this.router.navigateByUrl('/summery/summeryform');
}
print(){
  console.log(this.registerservice.users);
  this.registerservice.regUsers$.subscribe(console.log);
}
get f(){
  return this.userForm.controls}

}
