import { Timestamp } from 'rxjs';

export interface User{
    uid:string
    email:string,
    male?:boolean,
    displayName:string,
    role:string,
    birthDate?:Timestamp<Date>
}