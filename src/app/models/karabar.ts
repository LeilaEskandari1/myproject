import { Gender } from 'src/app/enums/gender';
import { hair } from './hair';
import { address } from './address';
import { company } from './company';
import { bank } from './bank';
export interface karbar {

  id: string;
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: Gender,
  email: string,
  password: string,
  birthDate: string,
  image: string,

  bloodGroup: string,
  height: string,
  weight: string,
  eyeColor: string,
  hair: hair,
  domain: string,
  ip: string,
  address: address,
  macAddress: string,
  university: string,
  bank: bank,
  company: company,
  ein: string,
  ssn: string,
  userAgent: string



}