import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DateHelper } from '@core/helpers/date.helper';
import { GetEmployeeRole } from '@layout/dashboard/employee-information/models/get-employee-role.model';
import { SearchJob } from '@layout/dashboard/employee-information/models/search-job.model';
import { EmployeeInformationService } from '@layout/dashboard/employee-information/services/employee-information.service';
import { DxFormComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SaveEmployeeRole } from './../../../../models/save-employee-role.model';

@Component({
  selector: 'roles-tab',
  templateUrl: './roles-tab.component.html',
  styleUrls: ['./roles-tab.component.scss'],
})
export class RolesTabComponent implements OnInit {
  /**
   * DevExtreme form
   */
  @ViewChild(DxFormComponent, { static: false })
  form!: DxFormComponent;

  /**
   *
   */
  employeeRole!: Observable<GetEmployeeRole>;

  /**
   *
   */
  searchText: string[] = new Array();

  /**
   *
   */
  selectBoxData!: SearchJob[];

  /**
   * Text-value of other radio buttons
   */
  radioButtonOptions = [
    //TODO: value field should be changed
    { text: 1, value: 'כ' },
    { text: 0, value: 'ל' },
  ];
  /**
   * Default min max values for datepicker
   */
  //TODO: Specify default value
  minDate = new Date(1970, 0, 1);
  maxDate = new Date(2080, 12, 31);

  /**
   * Toast information
   */
  isVisibleToast: boolean = false;
  type: string = 'info';
  message: string = ' ';

  /**
   * Defines nationalId of current employee
   */
  nationalId!: number;

  /**
   * Value to be passed to datepickers [format] attribute
   */
  get dateFormat(): string {
    return DateHelper.DATE_FORMAT;
  }

  /**
   *
   */
  constructor(private $data: EmployeeInformationService) {
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getNationalId();
    this.createFormGroup();
  }

  /**
   * Gets national id based on the url param
   */
  getNationalId = () => (this.nationalId = this.$data.nationalId);

  /**
   *
   */
  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.saveEmployee();
  }

  createFormGroup(): void {
    if (this.nationalId) {
      this.employeeRole = this.$data.getRoles(this.nationalId).pipe(
        tap((data) => {
          this.formatDates(data);
        })
      );
    }
  }

  onValueChanged(e: any): void {
    const stringSearchText = e.event.target.value;
    if (stringSearchText.length > 2) {
      this.$data.getSearchJobs(stringSearchText, 2).subscribe((data) => {
        this.selectBoxData = data;
      });
    }
  }

  /**
   * Updates existing Roles data if in udpate mode
   */
  private saveEmployee = () => {
    const data = this.getEmployeeFormValues();
    if (this.employeeRole) {
      this.updateRoles(data);
      // TODO: need translation
      this.message = 'Data saved successfully';
      this.type = 'success';
      this.isVisibleToast = true;
    } else {
      // TODO: need translation
      this.message = 'Error happened while saving';
      this.type = 'error';
      this.isVisibleToast = true;
    }
  };

  /**
   * Sends request to update existing employee
   * @param employeeData data from personal details tab
   */
  private updateRoles(employeeData: SaveEmployeeRole): void {
    this.$data.updateEmployeeRole(employeeData).subscribe();
  }

  private getEmployeeFormValues(): SaveEmployeeRole {
    const optionName = 'formData';
    return {
      nationalId: this.nationalId,
      district1: this.form.instance.option(optionName).district1,
      district2: this.form.instance.option(optionName).district2,
      district3: this.form.instance.option(optionName).district3,
      district4: this.form.instance.option(optionName).district4,

      tableADistrict1Job: this.form.instance.option(optionName).tableADistrict1Job,
      tableADistrict1FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict1FromJob)
      ),
      tableADistrict1UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict1UntilJob)
      ),
      tableADistrict2Job: this.form.instance.option(optionName).tableADistrict2Job,
      tableADistrict2FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict2FromJob)
      ),
      tableADistrict2UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict2UntilJob)
      ),
      tableADistrict3Job: this.form.instance.option(optionName).tableADistrict3Job,
      tableADistrict3FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict3FromJob)
      ),
      tableADistrict3UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict3UntilJob)
      ),
      tableADistrict4Job: this.form.instance.option(optionName).tableADistrict4Job,
      tableADistrict4FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict4FromJob)
      ),
      tableADistrict4UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableADistrict4UntilJob)
      ),
      tableBDistrict1Job: this.form.instance.option(optionName).tableBDistrict1Job,
      tableBDistrict1FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict1FromJob)
      ),
      tableBDistrict1UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict1UntilJob)
      ),
      tableBDistrict1Minister: this.form.instance.option(optionName).tableBDistrict1Minister,
      tableBDistrict2Job: this.form.instance.option(optionName).tableBDistrict2Job,
      tableBDistrict2FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict2FromJob)
      ),
      tableBDistrict2UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict2UntilJob)
      ),
      tableBDistrict2Minister: this.form.instance.option(optionName).tableBDistrict1Minister,
      tableBDistrict3Job: this.form.instance.option(optionName).tableBDistrict3Job,
      tableBDistrict3FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict3FromJob)
      ),
      tableBDistrict3UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict3UntilJob)
      ),
      tableBDistrict3Minister: this.form.instance.option(optionName).tableBDistrict3Minister,
      tableBDistrict4Job: this.form.instance.option(optionName).tableBDistrict4Job,
      tableBDistrict4FromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict4FromJob)
      ),
      tableBDistrict4UntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableBDistrict4UntilJob)
      ),
      tableBDistrict4Minister: this.form.instance.option(optionName).tableBDistrict4Minister,
      tableCDistrict1AJob: this.form.instance.option(optionName).tableCDistrict1AJob,
      tableCDistrict1AFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict1AFromJob)
      ),
      tableCDistrict1AUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict1AUntilJob)
      ),
      tableCDistrict1BJob: this.form.instance.option(optionName).tableCDistrict1BJob,
      tableCDistrict1BFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict1BFromJob)
      ),
      tableCDistrict1BUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict1BUntilJob)
      ),
      tableCDistrict2AJob: this.form.instance.option(optionName).tableCDistrict2AJob,
      tableCDistrict2AFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict2AFromJob)
      ),
      tableCDistrict2AUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict2AUntilJob)
      ),
      tableCDistrict2BJob: this.form.instance.option(optionName).tableCDistrict2BJob,
      tableCDistrict2BFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict2BFromJob)
      ),
      tableCDistrict2BUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict2BUntilJob)
      ),
      tableCDistrict3AJob: this.form.instance.option(optionName).tableCDistrict3AJob,
      tableCDistrict3AFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict3AFromJob)
      ),
      tableCDistrict3AUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict3AUntilJob)
      ),
      tableCDistrict3BJob: this.form.instance.option(optionName).tableCDistrict3BJob,
      tableCDistrict3BFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict3BFromJob)
      ),
      tableCDistrict3BUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict3BUntilJob)
      ),
      tableCDistrict4AJob: this.form.instance.option(optionName).tableCDistrict4AJob,
      tableCDistrict4AFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict4AFromJob)
      ),
      tableCDistrict4AUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict4AUntilJob)
      ),
      tableCDistrict4BJob: this.form.instance.option(optionName).tableCDistrict4BJob,
      tableCDistrict4BFromJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict4BFromJob)
      ),
      tableCDistrict4BUntilJob: DateHelper.calculateWithoutTimeOffset(
        new Date(this.form.instance.option(optionName).tableCDistrict4BUntilJob)
      ),
      id: this.form.instance.option(optionName).id,
    };
  }

  /**
   * Format dates received on GetRoles request
   */
  private formatDates(data: GetEmployeeRole): void {
    data.tableADistrict1FromJob = DateHelper.formatDate(data.tableADistrict1FromJob);
    data.tableADistrict1UntilJob = DateHelper.formatDate(data.tableADistrict1UntilJob);
    data.tableADistrict2FromJob = DateHelper.formatDate(data.tableADistrict2FromJob);
    data.tableADistrict2UntilJob = DateHelper.formatDate(data.tableADistrict2UntilJob);
    data.tableADistrict3FromJob = DateHelper.formatDate(data.tableADistrict3FromJob);
    data.tableADistrict3UntilJob = DateHelper.formatDate(data.tableADistrict3UntilJob);
    data.tableADistrict4FromJob = DateHelper.formatDate(data.tableADistrict4FromJob);
    data.tableADistrict4UntilJob = DateHelper.formatDate(data.tableADistrict4UntilJob);

    data.tableBDistrict1FromJob = DateHelper.formatDate(data.tableBDistrict1FromJob);
    data.tableBDistrict1UntilJob = DateHelper.formatDate(data.tableBDistrict1UntilJob);
    data.tableBDistrict2FromJob = DateHelper.formatDate(data.tableBDistrict2FromJob);
    data.tableBDistrict2UntilJob = DateHelper.formatDate(data.tableBDistrict2UntilJob);
    data.tableBDistrict3FromJob = DateHelper.formatDate(data.tableBDistrict3FromJob);
    data.tableBDistrict3UntilJob = DateHelper.formatDate(data.tableBDistrict3UntilJob);
    data.tableBDistrict4FromJob = DateHelper.formatDate(data.tableBDistrict4FromJob);
    data.tableBDistrict4UntilJob = DateHelper.formatDate(data.tableBDistrict4UntilJob);

    data.tableCDistrict1AFromJob = DateHelper.formatDate(data.tableCDistrict1AFromJob);
    data.tableCDistrict1AUntilJob = DateHelper.formatDate(data.tableCDistrict1AUntilJob);
    data.tableCDistrict2AFromJob = DateHelper.formatDate(data.tableCDistrict2AFromJob);
    data.tableCDistrict2AUntilJob = DateHelper.formatDate(data.tableCDistrict2AUntilJob);
    data.tableCDistrict3AFromJob = DateHelper.formatDate(data.tableCDistrict3AFromJob);
    data.tableCDistrict3AUntilJob = DateHelper.formatDate(data.tableCDistrict3AUntilJob);
    data.tableCDistrict4AFromJob = DateHelper.formatDate(data.tableCDistrict4AFromJob);
    data.tableCDistrict4AUntilJob = DateHelper.formatDate(data.tableCDistrict4AUntilJob);

    data.tableCDistrict1BFromJob = DateHelper.formatDate(data.tableCDistrict1BFromJob);
    data.tableCDistrict1BUntilJob = DateHelper.formatDate(data.tableCDistrict1BUntilJob);
    data.tableCDistrict2BFromJob = DateHelper.formatDate(data.tableCDistrict2BFromJob);
    data.tableCDistrict2BUntilJob = DateHelper.formatDate(data.tableCDistrict2BUntilJob);
    data.tableCDistrict3BFromJob = DateHelper.formatDate(data.tableCDistrict3BFromJob);
    data.tableCDistrict3BUntilJob = DateHelper.formatDate(data.tableCDistrict3BUntilJob);
    data.tableCDistrict4BFromJob = DateHelper.formatDate(data.tableCDistrict4BFromJob);
    data.tableCDistrict4BUntilJob = DateHelper.formatDate(data.tableCDistrict4BUntilJob);
  }
}
