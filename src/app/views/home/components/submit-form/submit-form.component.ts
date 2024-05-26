import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { EmailFormService } from '../../../service/email-form.service';
@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [EmailFormService],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css'
})
export class SubmitFormComponent {
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  emailForm: FormGroup;





  constructor(private  emailFormService:EmailFormService) {

    this.emailForm = new FormGroup({
      services: new FormGroup({
      services_lm: new FormControl(false),
      service_lawnEdging: new FormControl(false),
      service_rockWall: new FormControl(false),
      service_bushMunch: new FormControl(false),
      service_treeTrim: new FormControl(false),
      service_garden: new FormControl(false),
      }),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      adress:  new FormControl('', [Validators.required])
    });
  }

  submitEmail() {
      const val = this.emailForm.value;
    
      
        if (val.services && val.email && val.adress) {
            this.emailFormService.SubmitEmail(val.services , val.email, val.adress)
          
                        console.log("Form is submitted");
           
        }
        

      console.log(val)
      console.log("Form is submitted");
      
    }
}
