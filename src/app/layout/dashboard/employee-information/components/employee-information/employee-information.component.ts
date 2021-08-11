import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateHelper } from '@core/helpers/date.helper';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmployeeQuickSearch } from '../../models/employee-quicksearch.model';
import { PersonalDetail } from '../../models/personal-detail.model';
import { EmployeeInformationService } from '../../services/employee-information.service';
import { UrlString } from './../../../../../core/enums/url.enum';
import { TabNavigationHelper } from './../../models/tab-navigation.helper';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
})
export class EmployeeInformationComponent implements OnInit {
  /**
   * Defines nationalId of current employee
   */
  nationalId!: number;

  /**
   * Defines tabs mode (add or update)
   */
  isNew!: boolean;

  /**
   * Drawer settings
   */
  navigation!: any;
  isDrawerOpen = true;
  buttonOptions = {
    icon: 'menu',
    onClick: () => (this.isDrawerOpen = !this.isDrawerOpen),
  };

  /**
   * Employee personal details
   */
  personalDetails!: Observable<PersonalDetail>;

  /**
   * Employee data shown on quick search above the tabs
   */
  employeeQuickSearch: EmployeeQuickSearch = new EmployeeQuickSearch();

  /**
   *
   */
  constructor(private $data: EmployeeInformationService, private router: Router, private route: ActivatedRoute) {}

  /**
   *
   */
  ngOnInit(): void {
    this.setNationalId();
    this.setNavigationTabs();
    this.setPageMode();
    this.loadPersonalDetails();
  }

  /**
   * Sets employee tabs shown in navigation
   */
  setNavigationTabs = () => (this.navigation = TabNavigationHelper.getNavigationTabs(!this.nationalId));

  /**
   * Sets page mode to add or update
   */
  setPageMode = () => (this.isNew = this.nationalId == 0);

  /**
   * Sets national id taking it from url parameter
   */
  setNationalId() {
    this.nationalId = this.route.snapshot.params.nationalId;
    this.$data.setNationalId(this.nationalId);
  }

  /**
   * Load the chosen tab
   * @param event called on navigation click
   */
  loadTab(event: any) {
    this.router.navigate([UrlString.EMPLOYEE_INFORMATION, this.nationalId, event.addedItems[0].filePath]);
  }

  /**
   * Gets employee personal details if in update mode
   * @param nationalId id of employee to get his/her data
   */
  loadPersonalDetails(): void {
    if (!this.nationalId) {
      this.$data.employeeQuickSearchData = this.employeeQuickSearch;
      return;
    }

    this.personalDetails = this.$data.getPersonalDetails(this.nationalId).pipe(
      tap((data) => {
        this.formatDates(data);

        this.employeeQuickSearch = {
          firstName: data.firstName,
          lastName: data.lastName,
          nationalId: data.nationalId,
          isNew: this.isNew,
        } as EmployeeQuickSearch;

        this.$data.employeeQuickSearchData = this.employeeQuickSearch;
      })
    );

    this.$data.personalDetails = this.personalDetails;
  }

  /**
   * Formats dates coming from back
   * @param data employee personal details
   */
  formatDates(data: PersonalDetail): void {
    data.birthDate = DateHelper.toDate(data.birthDate) ?? data.birthDate;
    data.youngestChildBirthDate = DateHelper.toDate(data.youngestChildBirthDate) ?? data.youngestChildBirthDate;
    data.professionalSeniority = DateHelper.toDate(data.professionalSeniority) ?? data.professionalSeniority;
    data.expertDate = DateHelper.toDate(data.expertDate);
  }
}
