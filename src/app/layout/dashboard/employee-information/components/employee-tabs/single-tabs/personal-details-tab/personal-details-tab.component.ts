import { Router } from '@angular/router';
import { UrlString } from '@core/enums/url.enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddUpdateEmployeeModel } from '@layout/dashboard/employee-information/models/add-update-employee.model';
import { EmployeeQuickSearch } from '@layout/dashboard/employee-information/models/employee-quicksearch.model';
import { DxFormComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { DateHelper } from 'src/app/core/helpers/date.helper';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { PersonalDetail } from '../../../../models/personal-detail.model';
import { EmployeeInformationService } from '../../../../services/employee-information.service';
import { selectMap } from './../../../../../../../core/configs/rxjs.settings';
import { Gender } from './../../../../models/gender.enum';

@Component({
  selector: 'personal-details-tab',
  templateUrl: './personal-details-tab.component.html',
  styleUrls: ['./personal-details-tab.component.scss'],
})
export class PersonalDetailsTabComponent implements OnInit {
  /**
   * DevExtreme form
   */
  @ViewChild(DxFormComponent, { static: false })
  form!: DxFormComponent;

  /**
   * Employee personal details
   */
  personalDetails!: Observable<PersonalDetail>;

  /**
   * Lookups
   */
  statuses$!: Observable<LookupModel[]>;
  departments$!: Observable<LookupModel[]>;
  socialTrainings$!: Observable<LookupModel[]>;
  educationDegrees$!: Observable<LookupModel[]>;
  educationLevels$!: Observable<LookupModel[]>;
  leaveReasons$!: Observable<LookupModel[]>;
  commitments$!: Observable<LookupModel[]>;
  proficiencyRewards$!: Observable<LookupModel[]>;
  generalCourses$!: Observable<LookupModel[]>;
  generalTrainings$!: Observable<LookupModel[]>;
  courseCycles$!: Observable<LookupModel[]>;
  trainingsCycles$!: Observable<LookupModel[]>;
  wagesAdditions$!: Observable<LookupModel[]>;

  /**
   * Text-value of gender radio button
   */
  genderSelection = [
    { text: 'זכר', value: 1 },
    { text: 'נקבה', value: 2 },
  ];

  /**
   * Text-value of other radio buttons
   */
  radioButtonOptions = [
    { text: 'Yes', value: 'כ' },
    { text: 'No', value: 'ל' },
  ];

  /**
   * Default values to be displayed in the form
   */
  defaultRadioButtonValue = this.radioButtonOptions[1].value;
  defaultEmployeeStatus = 1; // Active
  defaultStartDate = new Date();
  defaultEducationYears = 0;
  defaultFramePercent = 100;
  defaultJobsPercent = 100;
  defaultLeaveReason = 0;

  /**
   * Properties used to validate the form
   */
  minBirthDate!: Date;
  maxBirthDate!: Date;
  minChildBirthDate!: Date;
  maxChildBirthDate!: Date;
  minProfessionalSeniority!: Date;
  maxProfessionalSeniority!: Date;
  minStartDate!: Date;
  maxStartDate!: Date;
  minExpertDate!: Date;
  maxExpertDate!: Date;
  minAge = 18;
  maxAge = 67;
  minChildAge = 1;
  maxChildAge = 17;
  minProfessionalSeniorityYears = 0;
  maxProfessionalSeniorityYears = 50;
  minStartYear = 5;
  minExpertYear = 50;

  /**
   * Value to be passed to datepickers [format] attribute
   */
  get dateFormat(): string {
    return DateHelper.DATE_FORMAT;
  }

  /**
   * Gender enum
   */
  get gender(): typeof Gender {
    return Gender;
  }

  constructor(private $data: EmployeeInformationService, private router: Router) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getPersonalDetails();
    this.getLookups();
    this.setValidators();
  }

  /**
   * Called on Save button click
   * @param event emitted on form submit
   */
  public onFormSubmit = (event: any): any => {
    event.preventDefault();
    this.saveEmployee();
  };

  /**
   * Adds new employee if in add mode
   * Updates existing employee data if in udpate mode
   */
  private saveEmployee = () => {
    const data = this.getEmployeeFormValues();
    this.personalDetails ? this.updateEmployee(data) : this.addEmployee(data);
  };

  /**
   * Sends request to add new employee
   * @param employeeData data from personal details tab
   */
  private addEmployee(employeeData: AddUpdateEmployeeModel): void {
    const query = this.prepareQuery(employeeData);
    this.$data.addEmployee(query).subscribe(() => {
      this.router.navigate([UrlString.EMPLOYEES]);
    });
  }

  /**
   * Sends request to update existing employee
   * @param employeeData data from personal details tab
   */
  private updateEmployee(employeeData: AddUpdateEmployeeModel): void {
    const query = this.prepareQuery(employeeData);
    this.$data.updateEmployee(query).subscribe();
  }

  /**
   * Prepares query to add or update employee
   * @param employeeData data from personal details tab
   * @returns query
   */
  private prepareQuery = (employeeData: AddUpdateEmployeeModel) => {
    const employeeQuickSearch = this.$data.employeeQuickSearchData ?? new EmployeeQuickSearch();

    return {
      firstName: employeeQuickSearch.firstName,
      lastName: employeeQuickSearch.lastName,
      nationalId: employeeQuickSearch.nationalId,
      department: employeeQuickSearch.departmentId,
      ...employeeData,
    };
  };

  /**
   *
   */
  private getEmployeeFormValues(): AddUpdateEmployeeModel {
    const optionName = 'formData';

    return {
      birthDate: DateHelper.calculateWithoutTimeOffset(this.form.instance.option(optionName).birthDate),
      sex: this.form.instance.option(optionName).sex,
      lastChildBirthDate: DateHelper.calculateWithoutTimeOffset(
        this.form.instance.option(optionName).youngestChildBirthDate
      ),
      employeeStatus: this.form.instance.option(optionName).employeeStatus,
      professionalSeniority: DateHelper.calculateWithoutTimeOffset(
        this.form.instance.option(optionName).professionalSeniority
      ),
      socialWorkerTraining: this.form.instance.option(optionName).socialTraining,
      degree: this.form.instance.option(optionName).degree,
      education: this.form.instance.option(optionName).education,
      educationYears: this.form.instance.option(optionName).educationYears,
      startDate: this.form.instance.option(optionName).startDate,
      endDate: this.form.instance.option(optionName).endDate,
      leaveReason: this.form.instance.option(optionName).leaveReason,
      commitment: this.form.instance.option(optionName).obligation,
      increasedWages: this.form.instance.option(optionName).increasedWages,
      proficiencyReward: this.form.instance.option(optionName).proficiencyReward,
      diplomaReward: this.form.instance.option(optionName).diplomaReward,
      personalRank: this.form.instance.option(optionName).personalRank,
      generalCourse: this.form.instance.option(optionName).generalCourse,
      generalTraining: this.form.instance.option(optionName).generalTraining,
      course: this.form.instance.option(optionName).courseCycle,
      training: this.form.instance.option(optionName).trainingCycle,
      wagesAdditions: this.form.instance.option(optionName).wagesAdditions,
      framePercent: this.form.instance.option(optionName).framePercent,
      expertDate: DateHelper.calculateWithoutTimeOffset(this.form.instance.option(optionName).expertDate),
    };
  }

  /**
   * Gets personal details from service
   */
  private getPersonalDetails(): void {
    if (this.$data.nationalId) {
      this.personalDetails = this.$data.personalDetails;
    }
  }

  /**
   * Sets validators of type 'range'
   */
  private setValidators(): void {
    this.minBirthDate = DateHelper.subtractTimeUnitFromDate(this.maxAge);
    this.maxBirthDate = DateHelper.subtractTimeUnitFromDate(this.minAge);
    this.minChildBirthDate = DateHelper.subtractTimeUnitFromDate(this.maxChildAge);
    this.maxChildBirthDate = DateHelper.subtractTimeUnitFromDate(this.minChildAge);
    this.minProfessionalSeniority = DateHelper.subtractTimeUnitFromDate(this.maxProfessionalSeniorityYears);
    this.maxProfessionalSeniority = DateHelper.subtractTimeUnitFromDate(this.minProfessionalSeniorityYears);
    this.minStartDate = DateHelper.subtractTimeUnitFromDate(this.minStartYear);
    this.maxStartDate = new Date();
    this.minExpertDate = DateHelper.subtractTimeUnitFromDate(this.minExpertYear);
    this.maxExpertDate = new Date();
  }

  /**
   * Gets date to which endDate is compared
   * @returns start date value
   */
  getEndDateComparisonTarget = () => {
    return this.form?.instance.option('formData')?.startDate;
  };

  /**
   * Retrieves lookups data
   */
  private getLookups(): void {
    this.statuses$ = this.$data.getEmployeeStatuses().pipe(selectMap);
    this.socialTrainings$ = this.$data.getSocialTrainings().pipe(selectMap);
    this.educationDegrees$ = this.$data.getEducationDegrees().pipe(selectMap);
    this.educationLevels$ = this.$data.getEducationLevels().pipe(selectMap);
    this.leaveReasons$ = this.$data.getLeaveReasons().pipe(selectMap);
    this.commitments$ = this.$data.getCommitments().pipe(selectMap);
    this.proficiencyRewards$ = this.$data.getProficiencyRewards().pipe(selectMap);
    this.generalCourses$ = this.$data.getSpecialCourses().pipe(selectMap);
    this.generalTrainings$ = this.$data.getSpecialTrainings().pipe(selectMap);
    this.courseCycles$ = this.$data.getCourseCycles().pipe(selectMap);
    this.trainingsCycles$ = this.$data.getTrainingsCycles().pipe(selectMap);
    this.wagesAdditions$ = this.$data.getWagesAdditions().pipe(selectMap);
  }
}
