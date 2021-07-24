import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeInformationService } from '../../services/employee-information.service';
import { PersonalDetail } from '../../models/personal-detail.model';
import { EmployeeQuickSearch } from '../../models/employee-quicksearch.model';
import { UpdateEmployeeModel } from '../../models/update-employee.model';
import { AddEmployeeModel } from '../../models/add-employee.model';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
  selector: 'employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTabsComponent implements OnInit {
  /**
   * Defines nationalId of current employee
   */
  nationalId!: number;

  /**
   * Defines edit or add screen
   */
  isNew!: boolean;

  /**
   * Instance of subscription
   */
  subscription?: Subscription;

  /**
   *
   */
  personalDetails!: PersonalDetail;

  /**
   *
   */
  employeeQuickSearch: EmployeeQuickSearch = new EmployeeQuickSearch();

  selectedIndex: number = 2;

  /**
   *
   */
  constructor(
    private $data: EmployeeInformationService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute // private notificationService: NotificationService
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.loadParams();
  }

  // /**
  //  * Defines add or edit screen
  //  */
  findScreenType(): void {
    if (this.nationalId > 0) {
      this.isNew = false;
      return;
    }
    this.isNew = true;
  }

  /**
   *
   */
  loadParams(): void {
    this.nationalId = this.route.snapshot.params.nationalId;
    this.findScreenType();
    this.loadPersonalDetails(this.nationalId);
  }

  loadPersonalDetails(nationalId: number): void {
    if (!nationalId) {
      this.personalDetails = new PersonalDetail();
      return;
    }

    this.$data.getPersonalDetails(nationalId).subscribe((w) => {
      this.personalDetails = w;

      if (this.personalDetails) {
        // Pick properties from an object
        this.setEmployeeQuickSearch(
          // tslint:disable-next-line: no-shadowed-variable
          (({ firstName, lastName, nationalId }) => ({
            firstName,
            lastName,
            nationalId,
            isNew: this.isNew,
          }))(this.personalDetails)
        );
      }
    });
  }

  setEmployeeQuickSearch(model: EmployeeQuickSearch): void {
    this.employeeQuickSearch = model;
  }

  /**
   *
   * param body
   */
  update(body: UpdateEmployeeModel): void {
    this.$data
      .updateEmployee({
        ...body,
        firstName: this.employeeQuickSearch.firstName,
        lastName: this.employeeQuickSearch.lastName,
        nationalId: this.employeeQuickSearch.nationalId,
      })
      .subscribe(() => {
        this.closeEmployeeForm();
      });
  }

  add(body: AddEmployeeModel): void {
    this.employeeService
      .addEmployee({
        ...body,
        firstName: this.employeeQuickSearch.firstName,
        lastName: this.employeeQuickSearch.lastName,
        nationalId: this.employeeQuickSearch.nationalId,
      })
      .subscribe(() => {
        this.closeEmployeeForm();
      });
  }

  public closeEmployeeForm(): void {
    // this.notificationService.show({
    //   content: 'Your data has been saved. Time for tea',
    //   cssClass: 'button-notification',
    //   animation: { type: 'fade', duration: 400 },
    //   position: { horizontal: 'right', vertical: 'top' },
    //   type: { style: 'success', icon: true },
    //   closable: true,
    //   hideAfter: 1500,
    // });
  }

  /**
   *
   */

}
