import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseGridComponent } from '@core/components/base-grid.component';
import { PersonalPaymentModel } from '@layout/dashboard/employee-information/models/personal-payment.model';
import { EmployeeInformationService } from '@layout/dashboard/employee-information/services/employee-information.service';
import { Store } from '@ngxs/store';
import { EndpointSettings } from './../../../../../../../core/configs/endpoint.settings';
import { LanguageHelper } from './../../../../../../../core/helpers/language.helper';

@Component({
  selector: 'personal-payment-tab',
  templateUrl: './personal-payment-tab.component.html',
})
export class PersonalPaymentTabComponent extends BaseGridComponent implements OnInit {
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl('', Validators.email),
    acceptNews: new FormControl(),
  });

  /**
   * Defines nationalId of current employee
   */
  nationalId!: number;

  /**
   * Used to check the currently chosen language
   */
  isHebrew!: boolean;

  /**
   *
   */
  constructor(private $data: EmployeeInformationService, private $store: Store) {
    super($store);
    this.type = PersonalPaymentModel.prototype;
  }

  /**
   *
   */
  ngOnInit(): void {
    super.ngOnInit();
    this.getNationalId();
    this.loadData();
    this.isHebrew = LanguageHelper.isHebrew();
  }

  /**
   * Gets national id based on the url param
   */
  getNationalId = () => (this.nationalId = this.$data.nationalId);

  /**
   *
   */
  loadData(): void {
    // TODO: Avoid using direct string
    this.parameters.push({ name: 'nationalId', value: this.nationalId });
    super.loadData(EndpointSettings.GET_EMPLOYEE_PERSONAL_PAYMENTS, 'id');
  }
}
