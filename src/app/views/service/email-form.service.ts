import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailFormService {

  constructor() { }

  SubmitEmail(services:{} , email:string, adress:string): any {

    let emailPayload = {Services:services, Email:email, Adress:adress}
    console.log(emailPayload, email, adress) 

    return emailPayload
  }
}
