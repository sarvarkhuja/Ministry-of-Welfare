import { DateHelper } from 'src/app/core/helpers/date.helper';
import { SaveEmployeeRole } from './../../../../models/save-employee-role.model';
import { PersonalDetail } from './../../../../models/personal-detail.model';
import { GetEmployeeRole } from './../../../../models/get-employee-role.model';
import { EmployeeInformationService } from './../../../../services/employee-information.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap, delay, map } from 'rxjs/operators';
import { SearchJob } from '../../../../models/search-job.model';
import { calculateWithoutTimeOffset } from 'src/app/core/utils';

@Component({
  selector: 'roles-tab',
  templateUrl: './roles-tab.component.html',
  styleUrls: ['./roles-tab.component.scss'],
})
export class RolesTabComponent {
  // // Mock Data starts
  // // TODO: CHANGE WITH REAL DATA
  // public min: Date = new Date(1917, 0, 1);
  // public max: Date = new Date(2020, 4, 31);

  // public list: Array<{ value: number; text: string }> = [
  //   { value: 0, text: 'Item 1' },
  //   { value: 1, text: 'Item 2' },
  //   { value: 2, text: 'Item 3' },
  //   { value: 3, text: 'Item 4' },
  //   { value: 4, text: 'Item 5' },
  //   { value: 5, text: 'Item 6' },
  // ];
  // // Mock Data ends
  // public searchJobList!: SearchJob[];

  // tableBDistrict1Job!: SearchJob[];
  // /**
  //  *
  //  */
  // employeeRole!: GetEmployeeRole;

  // /**
  //  *
  //  */
  // personalDetails!: PersonalDetail;

  // /**
  //  * TODO: Get from employee grid
  //  */
  // nationalID = 4739;
  // district = 1;

  // /**
  //  * Form fields
  //  */
  // get fields(): any {
  //   return this.rolesForm.controls;
  // }
  // public rolesForm: FormGroup = new FormGroup({
  //   tableADistrict1Job: new FormControl(),
  //   tableADistrict1FromJob: new FormControl(),
  //   tableADistrict1UntilJob: new FormControl(),

  //   tableADistrict2Job: new FormControl(),
  //   tableADistrict2FromJob: new FormControl(),
  //   tableADistrict2UntilJob: new FormControl(),

  //   tableADistrict3Job: new FormControl(),
  //   tableADistrict3FromJob: new FormControl(),
  //   tableADistrict3UntilJob: new FormControl(),

  //   tableADistrict4Job: new FormControl(),
  //   tableADistrict4FromJob: new FormControl(),
  //   tableADistrict4UntilJob: new FormControl(),

  //   tableBDistrict1Job: new FormControl(),
  //   tableBDistrict1FromJob: new FormControl(),
  //   tableBDistrict1UntilJob: new FormControl(),
  //   tableBDistrict1Minister: new FormControl(),

  //   tableBDistrict2Job: new FormControl(),
  //   tableBDistrict2FromJob: new FormControl(),
  //   tableBDistrict2UntilJob: new FormControl(),
  //   tableBDistrict2Minister: new FormControl(),

  //   tableBDistrict3Job: new FormControl(),
  //   tableBDistrict3FromJob: new FormControl(),
  //   tableBDistrict3UntilJob: new FormControl(),
  //   tableBDistrict3Minister: new FormControl(),

  //   tableBDistrict4Job: new FormControl(),
  //   tableBDistrict4FromJob: new FormControl(),
  //   tableBDistrict4UntilJob: new FormControl(),
  //   tableBDistrict4Minister: new FormControl(),

  //   tableCDistrict1AJob: new FormControl(),
  //   tableCDistrict1AFromJob: new FormControl(),
  //   tableCDistrict1AUntilJob: new FormControl(),

  //   tableCDistrict1BJob: new FormControl(),
  //   tableCDistrict1BFromJob: new FormControl(),
  //   tableCDistrict1BUntilJob: new FormControl(),

  //   tableCDistrict2AJob: new FormControl(),
  //   tableCDistrict2AFromJob: new FormControl(),
  //   tableCDistrict2AUntilJob: new FormControl(),

  //   tableCDistrict2BJob: new FormControl(),
  //   tableCDistrict2BFromJob: new FormControl(),
  //   tableCDistrict2BUntilJob: new FormControl(),

  //   tableCDistrict3AJob: new FormControl(),
  //   tableCDistrict3AFromJob: new FormControl(),
  //   tableCDistrict3AUntilJob: new FormControl(),

  //   tableCDistrict3BJob: new FormControl(),
  //   tableCDistrict3BFromJob: new FormControl(),
  //   tableCDistrict3BUntilJob: new FormControl(),

  //   tableCDistrict4AJob: new FormControl(),
  //   tableCDistrict4AFromJob: new FormControl(),
  //   tableCDistrict4AUntilJob: new FormControl(),

  //   tableCDistrict4BJob: new FormControl(),
  //   tableCDistrict4BFromJob: new FormControl(),
  //   tableCDistrict4BUntilJob: new FormControl(),
  // });

  // constructor(public $data: EmployeeInformationService, private notificationService: NotificationService) {}

  /**
   *
   */
  // ngOnInit(): void {

  //   // this.createFormGroup();
  // }

  // private createFormGroup(): void{
  //   this.$data.getRoles(this.nationalID).subscribe((data: any) => {
  //     this.employeeRole = data;
  //     this.employeeRole.tableBDistrict1FromJob = new Date(this.employeeRole.tableBDistrict1FromJob);
  //     this.employeeRole.tableBDistrict1UntilJob = new Date(this.employeeRole.tableBDistrict1UntilJob);
  //     this.employeeRole.tableCDistrict1AFromJob = new Date(this.employeeRole.tableCDistrict1AFromJob);
  //     this.employeeRole.tableCDistrict1AUntilJob = new Date(this.employeeRole.tableCDistrict1AUntilJob);
  //     this.employeeRole.tableCDistrict1BFromJob = new Date(this.employeeRole.tableCDistrict1BFromJob);
  //     this.employeeRole.tableADistrict1FromJob = new Date(this.employeeRole.tableADistrict1FromJob);
  //     this.employeeRole.tableADistrict1UntilJob = new Date(this.employeeRole.tableADistrict1UntilJob);
  //     this.employeeRole.tableADistrict1UntilJob = new Date(this.employeeRole.tableADistrict1UntilJob);
  //     this.employeeRole.tableBDistrict2FromJob = new Date(this.employeeRole.tableBDistrict2FromJob);
  //     this.employeeRole.tableBDistrict2UntilJob = new Date(this.employeeRole.tableBDistrict2UntilJob);
  //     this.employeeRole.tableCDistrict2AFromJob = new Date(this.employeeRole.tableCDistrict2AFromJob);
  //     this.employeeRole.tableCDistrict2AUntilJob = new Date(this.employeeRole.tableCDistrict2AUntilJob);
  //     this.employeeRole.tableCDistrict2BFromJob = new Date(this.employeeRole.tableCDistrict2BFromJob);
  //     this.employeeRole.tableCDistrict2BUntilJob = new Date(this.employeeRole.tableCDistrict2BUntilJob);
  //     this.employeeRole.tableADistrict2FromJob = new Date(this.employeeRole.tableADistrict2FromJob);
  //     this.employeeRole.tableADistrict2UntilJob = new Date(this.employeeRole.tableADistrict2UntilJob);
  //     this.employeeRole.tableBDistrict3FromJob = new Date(this.employeeRole.tableBDistrict3FromJob);
  //     this.employeeRole.tableBDistrict3UntilJob = new Date(this.employeeRole.tableBDistrict3UntilJob);
  //     this.employeeRole.tableCDistrict3AFromJob = new Date(this.employeeRole.tableCDistrict3AFromJob);
  //     this.employeeRole.tableCDistrict3AUntilJob = new Date(this.employeeRole.tableCDistrict3AUntilJob);
  //     this.employeeRole.tableCDistrict3BFromJob = new Date(this.employeeRole.tableCDistrict3BFromJob);
  //     this.employeeRole.tableCDistrict3BUntilJob = new Date(this.employeeRole.tableCDistrict3BUntilJob);
  //     this.employeeRole.tableADistrict3FromJob = new Date(this.employeeRole.tableADistrict3FromJob);
  //     this.employeeRole.tableADistrict3UntilJob = new Date(this.employeeRole.tableADistrict3UntilJob);
  //     this.employeeRole.tableBDistrict4FromJob = new Date(this.employeeRole.tableBDistrict4FromJob);
  //     this.employeeRole.tableBDistrict4UntilJob = new Date(this.employeeRole.tableBDistrict4UntilJob);
  //     this.employeeRole.tableCDistrict4AFromJob = new Date(this.employeeRole.tableCDistrict4AFromJob);
  //     this.employeeRole.tableCDistrict4AUntilJob = new Date(this.employeeRole.tableCDistrict4AUntilJob);
  //     this.employeeRole.tableCDistrict4BFromJob = new Date(this.employeeRole.tableCDistrict4BFromJob);
  //     this.employeeRole.tableCDistrict4BUntilJob = new Date(this.employeeRole.tableCDistrict4BUntilJob);
  //     this.employeeRole.tableADistrict4FromJob = new Date(this.employeeRole.tableADistrict4FromJob);
  //     this.employeeRole.tableADistrict4UntilJob = new Date(this.employeeRole.tableADistrict4UntilJob);
  //     this.modelToForm(data);
  //   });
  // }


  // /**
  //  *  param searchText
  //  *  param district
  //  *  param searchJobListName
  //  */
  // public handleFilter(searchText: string, district: number | undefined, searchJobListName = ''): void {
  //   if (searchText.length >= 3) {
  //     this.$data.getSearchJobs(searchText, district || 0).subscribe((data) => {
  //       this.searchJobList = data;
  //     });
  //   }
  // }
  // /**
  //  *
  //  */
  // modelToForm(model: GetEmployeeRole): void {
  //   this.rolesForm.patchValue(model);
  // }

  // /**
  //  *
  //  */
  // public submitFormRoles(): void {
  //   const query = this.prepareQuery();
  //   this.$data.updateEmployeeRole(query).subscribe((w) => {
  //     this.notificationService.show({
  //       content: 'Your data has been saved. Time for tea',
  //       cssClass: 'button-notification',
  //       animation: { type: 'fade', duration: 400 },
  //       position: { horizontal: 'left', vertical: 'top' },
  //       type: { style: 'success', icon: true },
  //       hideAfter: 2000,
  //     });
  //   });
  // }

  // /**
  //  * Data passed to back-end when new employee added
  //  */
  // private prepareQuery(): SaveEmployeeRole {
  //   const saveWorkplace: SaveEmployeeRole = {
  //     nationalId: this.employeeRole.nationalId,
  //     district1: this.employeeRole.district1,
  //     district2: this.employeeRole.district2,
  //     district3: this.employeeRole.district3,
  //     district4: this.employeeRole.district4,
  //     tableADistrict1Job: this.fields.tableDistrict?.value,
  //     tableADistrict1FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict1FromJob?.value)
  //     ),
  //     tableADistrict1UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict1UntilJob?.value)
  //     ),
  //     tableADistrict2Job: this.fields.tableADistrict2Job?.value,
  //     tableADistrict2FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict2FromJob?.value)
  //     ),
  //     tableADistrict2UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict2UntilJob?.value)
  //     ),
  //     tableADistrict3Job: this.fields.tableADistrict3Job?.value,
  //     tableADistrict3FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict3UntilJob?.value)
  //     ),
  //     tableADistrict3UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict3UntilJob?.value)
  //     ),
  //     tableADistrict4Job: this.fields.tableADistrict4Job?.value,
  //     tableADistrict4FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict4FromJob?.value)
  //     ),
  //     tableADistrict4UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableADistrict4UntilJob?.value)
  //     ),
  //     tableBDistrict1Job: this.fields.tableBDistrict1Job?.value,
  //     tableBDistrict1FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict1FromJob?.value)
  //     ),
  //     tableBDistrict1UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict1UntilJob?.value)
  //     ),
  //     tableBDistrict1Minister: this.fields.tableBDistrict1Minister?.value,
  //     tableBDistrict2Job: this.fields.tableBDistrict2Job?.value,
  //     tableBDistrict2FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict2FromJob?.value)
  //     ),
  //     tableBDistrict2UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict2UntilJob?.value)
  //     ),
  //     tableBDistrict2Minister: this.fields.tableBDistrict2Minister?.value,
  //     tableBDistrict3Job: this.fields.tableBDistrict3Job?.value,
  //     tableBDistrict3FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict3FromJob?.value)
  //     ),
  //     tableBDistrict3UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict3UntilJob?.value)
  //     ),
  //     tableBDistrict3Minister: this.fields.tableBDistrict3Minister?.value,
  //     tableBDistrict4Job: this.fields.tableBDistrict4Job?.value,
  //     tableBDistrict4FromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict4FromJob?.value)
  //     ),
  //     tableBDistrict4UntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableBDistrict4UntilJob?.value)
  //     ),
  //     tableBDistrict4Minister: this.fields.tableBDistrict4Minister?.value,
  //     tableCDistrict1AJob: this.fields.tableCDistrict1AJob?.value,
  //     tableCDistrict1AFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict1AFromJob?.value)
  //     ),
  //     tableCDistrict1AUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict1AUntilJob?.value)
  //     ),
  //     tableCDistrict1BJob: this.fields.tableCDistrict1BJob?.value,
  //     tableCDistrict1BFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict1BFromJob?.value)
  //     ),
  //     tableCDistrict1BUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict1BUntilJob?.value)
  //     ),
  //     tableCDistrict2AJob: this.fields.tableCDistrict2AJob?.value,
  //     tableCDistrict2AFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict2AFromJob?.value)
  //     ),
  //     tableCDistrict2AUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict2AUntilJob?.value)
  //     ),
  //     tableCDistrict2BJob: this.fields.tableCDistrict2BJob?.value,
  //     tableCDistrict2BFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict2BFromJob?.value)
  //     ),
  //     tableCDistrict2BUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict2BUntilJob?.value)
  //     ),
  //     tableCDistrict3AJob: this.fields.tableCDistrict3AJob?.value,
  //     tableCDistrict3AFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict3AFromJob?.value)
  //     ),
  //     tableCDistrict3AUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict3AUntilJob?.value)
  //     ),
  //     tableCDistrict3BJob: this.fields.tableCDistrict3BJob?.value,
  //     tableCDistrict3BFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict3BFromJob?.value)
  //     ),
  //     tableCDistrict3BUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict3BUntilJob?.value)
  //     ),
  //     tableCDistrict4AJob: this.fields.tableCDistrict4AJob?.value,
  //     tableCDistrict4AFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict4AFromJob?.value)
  //     ),
  //     tableCDistrict4AUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict4AUntilJob?.value)
  //     ),
  //     tableCDistrict4BJob: this.fields.tableCDistrict4BJob?.value,
  //     tableCDistrict4BFromJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict4BFromJob?.value)
  //     ),
  //     tableCDistrict4BUntilJob: DateHelper.calculateWithoutTimeOffset(
  //       new Date(this.fields.tableCDistrict4BUntilJob?.value)
  //     ),
  //     id: this.employeeRole.id,
  //   };

  //   return saveWorkplace;
  // }
}
