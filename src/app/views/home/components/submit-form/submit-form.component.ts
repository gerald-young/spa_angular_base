import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray, FormBuilder } from "@angular/forms";
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
  console = console;
  
  servicesPayload = {
    "services": [
      {selected: false, service: 'Single webpage with applcation form', base_cost: 30, hours_mod: false},
      {selected: false, service: 'Single webpage with crud api', base_cost: 60, hours_mod: false},
      {selected: false, service: '5 webpages of text/pictuers', base_cost: 50, hours_mod: false},
    ],
  }

  emailForm: FormGroup;

  constructor(private  emailFormService:EmailFormService, private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      services: this.buildServices(),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      name:  new FormControl('', [Validators.required]),
      description:  new FormControl('', [Validators.required])

    });
  }

  services(): FormArray {
    return this.emailForm.get('services') as FormArray;
  };
    
  buildServices() {
    const arr = this.servicesPayload.services.map(service => {
      return this.formBuilder.group({
        selected: new FormControl(service.selected),
        hours: new FormControl(1)
      });
    });
    return  this.formBuilder.array(arr);
  }

  submitEmail() {
    const formValue = Object.assign({},  this.emailForm.value, {
      services: this.emailForm.value.services.map((selected:any  , i:number) => {
        return {
          selected: selected.selected,
          service: this.servicesPayload.services[i].service,
          base_cost: this.servicesPayload.services[i].base_cost, 
          hours:  selected.hours,
          mod_cost: this.servicesPayload.services[i].base_cost * selected.hours,
        }
      })
    });
    this.console.log(formValue)
  }

}
