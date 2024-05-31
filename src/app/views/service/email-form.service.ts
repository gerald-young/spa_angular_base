import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface  emailBody {
  services: {
      selected: boolean;
      service: string;
      base_cost: number;
  }[];
  email: string;
  adress: string;
}


@Injectable({
  providedIn: 'root'
})

export class EmailFormService {
  
  constructor() { }

  SubmitEmail(emailFormData:emailBody): any {

    let emailPayload = {Services:emailFormData.services, Email:emailFormData.email, Adress:emailFormData.adress}
    console.log(emailPayload) 

    return emailPayload
  }
}
