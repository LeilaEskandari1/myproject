import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'project';
  new(){
    this.router.navigateByUrl('/register/regist');
  }
  result()
  {
    this.router.navigateByUrl('/summery/summeryform');
  }
}
