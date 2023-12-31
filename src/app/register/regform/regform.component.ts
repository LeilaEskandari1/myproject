import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

import { Gender } from 'src/app/enums/gender';
import { confirmPasswordValidator } from 'src/app/custom validators/confirm-password.validator';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})


export class RegformComponent implements OnInit {




  genders = Object.values(Gender).filter(f => isNaN(Number(f)));





  constructor(private registerservice: RegisterService, private router: Router) { }

  userForm!: FormGroup;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('',[ Validators.required,Validators.min(1),Validators.max(120)]),

      gender: new FormControl('مرد'),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required])
    }, { validators: confirmPasswordValidator });




  }
  save() {

    this.registerservice.addUser(this.userForm.value);

    this.router.navigateByUrl('/summery/summeryform');
   

  }

  get f() {
    return this.userForm.controls
  }

}
