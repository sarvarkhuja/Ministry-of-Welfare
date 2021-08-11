import { Component, Input, OnInit } from '@angular/core';
import { EmployeeInformationService } from '@layout/dashboard/employee-information/services/employee-information.service';
import { Store } from '@ngxs/store';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { GetEmployeeJob } from '../../../../models/get-employee-job.model';
import { EndpointSettings } from './../../../../../../../core/configs/endpoint.settings';

@Component({
  selector: 'jobs-tab',
  templateUrl: './jobs-tab.component.html',
})
export class JobsTabComponent extends BaseGridComponent implements OnInit {
  /**
   * Defines nationalId of current employee
   */
  @Input()
  nationalId!: number;

  /**
   *
   */
  constructor(private $data: EmployeeInformationService, private $store: Store) {
    super($store);
    this.type = GetEmployeeJob.prototype;
  }

  /**
   *
   */
  ngOnInit(): void {
    super.ngOnInit();
    this.getNationalId();
    this.loadData();
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
    super.loadData(EndpointSettings.GET_EMPLOYEE_JOBS, 'id');
  }
}
