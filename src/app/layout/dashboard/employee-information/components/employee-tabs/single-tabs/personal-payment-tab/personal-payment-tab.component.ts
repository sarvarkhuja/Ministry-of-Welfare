import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'personal-payment-tab',
  templateUrl: './personal-payment-tab.component.html',
  styleUrls: ['./personal-payment-tab.component.scss']
})
export class PersonalPaymentTabComponent {
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);


  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl('', Validators.email),
    acceptNews: new FormControl(),
  });

}
