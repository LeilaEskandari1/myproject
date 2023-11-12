
import { Gender } from 'src/app/enums/gender';
export interface users {


  firstName: string,
  lastName: string,
  age: number,
  password: string,
  confirmPassword: string,
  gender: Gender,
  email: string,


}