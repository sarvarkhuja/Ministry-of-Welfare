import { Component, Input, OnInit } from '@angular/core';
import { LeaveWorkModel } from '@layout/dashboard/employee-information/models/leave-work.model';
import { EmployeeInformationService } from '@layout/dashboard/employee-information/services/employee-information.service';
import { Store } from '@ngxs/store';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { EndpointSettings } from './../../../../../../../core/configs/endpoint.settings';
import { LanguageHelper } from './../../../../../../../core/helpers/language.helper';

@Component({
  selector: 'leave-work-tab',
  templateUrl: './leave-work-tab.component.html',
})
export class LeaveWorkTabComponent extends BaseGridComponent implements OnInit {
  /**
   * Defines nationalId of current employee
   */
  @Input()
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
    this.type = LeaveWorkModel.prototype;
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
    super.loadData(EndpointSettings.GET_EMPLOYEE_LEAVE_WORKS, 'id');
  }
}
