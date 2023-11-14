import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public regUsers$!: Observable<users[]>;
  public users: users[] = [];
  constructor() { }
  getAll(): Observable<users[]> {
    return this.regUsers$;
  }
  //   addUser(a:Observable<users[]>):Observable<users[]>{
  // this.regUsers$=a;

  //     return this.regUsers$;
  //   }
  addUser(a: any): Observable<users[]> {
    this.users.push(a);
    this.regUsers$ = of(a);
    return this.regUsers$;


  }
}
