
import {Gender} from 'src/app/enums/gender';
export class users{
    
    constructor(
        public firstName:string,
        public lastName:string,
       public  age:number,
        public password:string,
        public confirmPassword:string,
      public gender: Gender ,
        public email:string,
        ) {}
      
}