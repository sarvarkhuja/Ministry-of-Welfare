import { selectMap } from './../../../../../../../core/configs/rxjs.settings';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { EmployeeRadioButton } from './../../../../models/employee-radio-button.enum';
import { Gender } from './../../../../models/gender.enum';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UpdateEmployeeModel } from '../../../../models/update-employee.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateHelper } from 'src/app/core/helpers/date.helper';
import { PersonalDetail } from '../../../../models/personal-detail.model';
import { EmployeeInformationService } from '../../../../services/employee-information.service';
import { AddEmployeeModel } from '../../../../models/add-employee.model';
import { calculateWithoutTimeOffset } from 'src/app/core/utils';
import { event } from 'devextreme/events';


@Component({
  selector: 'personal-details-tab',
  templateUrl: './personal-details-tab.component.html',
  styleUrls: ['./personal-details-tab.component.scss'],
})
export class PersonalDetailsTabComponent implements OnInit {
  /**
   * Employee form
   */
  form!: FormGroup;

  /**
   * TODO: logic should be clarified
   */
  jobsConnection = 'ל';


  priorities: string[]= [
    "Low", 
    "Normal", 
    "Urgent", 
    "High"
];
  /**
   *
   */
  @Input()
  personalDetail!: PersonalDetail;

  /**
   *
   */
  @Output()
  update = new EventEmitter<UpdateEmployeeModel>();

  /**
   *
   */
  @Output()
  add = new EventEmitter<AddEmployeeModel>();

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
  specialCourses$!: Observable<LookupModel[]>;
  specialTrainings$!: Observable<LookupModel[]>;
  wagesAdditions$!: Observable<LookupModel[]>;

  /**
   * Default lookup values
   */
  defaultStatus!: LookupModel;
  defaultSocialTraining!: LookupModel;
  defaultEducationDegree!: LookupModel;
  defaultEducationLevel!: LookupModel;
  defaultLeaveReason!: LookupModel;
  defaultCommitment!: LookupModel;
  defaultCourseCycle!: LookupModel;
  defaultTrainingCycle!: LookupModel;
  defaultGeneralCourse!: LookupModel;
  defaultGeneralTraining!: LookupModel;
  defaultPersonalRank!: LookupModel;
  defaultProficiencyReward!: LookupModel;
  defaultWageAdditions!: LookupModel;


truefalse = [
    { text: 'Yes', value: true },
    { text: 'No', value: false }
  ];
  /**
   * Default education years value to be displayed in the form
   */
  defaultEducationYears = 0;

  /**
   * Default frame percent value to be displayed in the form
   */
  defaultFramePercent = 100;

  /**
   * Default jobs percent value to be displayed in the form
   */
  defaultJobsPercent = 100.0;

  /**
   * Data of specific employee retrieved from back
   */
  employeeData!: any;

  /**
   * Value to be passed to datepickers [format] attribute
   */
  get dateFormat(): string {
    return DateHelper.DATE_FORMAT;
  }

  /**
   * Form fields
   */
  get fields(): any {
    return this.form.controls;
  }

  /**
   * Gender enum
   */
  get gender(): typeof Gender {
    return Gender;
  }

  /**
   * Radio button enum
   */
  get radioButton(): typeof EmployeeRadioButton {
    return EmployeeRadioButton;
  }
  constructor(
    private $data: EmployeeInformationService,
    
    // public intl: IntlService,
    // private notificationService: NotificationService
  ) {
    
  }

  employee!:Observable<PersonalDetail> 
  /**
   *
   */
  ngOnInit(): void {
    this.getLookups();
    //this.createFormGroup();
    //this.getEmployeePersonalDetails();
    this.employee=this.$data.getPersonalDetails(4739)

    console.log(this.employee);
    

    
  }
  onFormSubmit = function(e:Event):any {
    console.log("dasd");
    
    
    e.preventDefault();
}
  public modelToForm(model: PersonalDetail): void {
    this.form.patchValue(model);
    this.employeeData = model;
  }

  /**
   * Form controls for adding employee
   */
  public createFormGroup(): void {
    this.form = new FormGroup({
      birthDate: new FormControl(),
      sexId: new FormControl(this.gender.FEMALE),
      lastChildBirthDate: new FormControl(),
      employeeStatusId: new FormControl(),
      professionalSeniority: new FormControl(),
      socialWorkerTraining: new FormControl(),
      socialTrainingId: new FormControl(),
      degree: new FormControl(),
      degreeId: new FormControl(),
      education: new FormControl(),
      educationLevelId: new FormControl(),
      educationYears: new FormControl(this.defaultEducationYears),
      startDate: new FormControl(new Date()),
      endDate: new FormControl(),
      leaveReason: new FormControl(),
      leaveReasonId: new FormControl(),
      commitment: new FormControl(),
      commitmentId: new FormControl(),
      increasedWages: new FormControl(this.radioButton.NO),
      proficiencyReward: new FormControl(),
      proficiencyRewardId: new FormControl(),
      diplomaReward: new FormControl(this.radioButton.NO),
      personalRank: new FormControl(this.radioButton.NO),
      generalCourse: new FormControl(),
      generalCourseId: new FormControl(),
      generalTraining: new FormControl(),
      generalTrainingId: new FormControl(),
      course: new FormControl(),
      courseCycleId: new FormControl(),
      training: new FormControl(),
      trainingId: new FormControl(),
      wagesAdditions: new FormControl(),
      wagesAdditionsId: new FormControl(),
      framePercent: new FormControl(this.defaultFramePercent),
      expertDate: new FormControl(),
    });
  }

  /**
   * Sends new employee data to back
   * Called on add button click
   */
  public saveEmployee(): void {
    if (this.personalDetail.nationalId) {
      this.update.emit(this.bodyForEdit());
      return;
    }
    this.add.emit(this.bodyForAdd());
  }

  /**
   * Navigates back to employees screen on Close click
   */
  public closeEmployeeForm(): void {
    // this.notificationService.show({
    //   content: 'Your data has been saved. Time for tea',
    //   cssClass: 'button-notification',
    //   animation: { type: 'fade', duration: 400 },
    //   position: { horizontal: 'left', vertical: 'top' },
    //   type: { style: 'success', icon: true },
    //   closable: true,
    //   hideAfter: 2000,
    // });
  }

  bodyForEdit(): UpdateEmployeeModel {
    return {
      birthDate: this.getDate(this.fields.birthDate?.value),
      sex: this.fields.sexId.value,
      lastChildBirthDate: this.getDate(this.fields.lastChildBirthDate?.value),
      employeeStatus: this.fields.employeeStatusId.value,
      professionalSeniority: this.getDate(this.fields.professionalSeniority.value),
      degree: this.fields.degreeId.value || this.defaultEducationDegree.entryNumber,
      education: this.fields.educationLevelId.value || this.defaultEducationLevel.entryNumber,
      educationYears: this.fields.educationYears.value,
      startDate: this.getDate(this.fields.startDate?.value),
      endDate: this.getDate(this.fields.endDate?.value),
      commitment: this.fields.commitmentId.value || this.defaultCommitment.entryNumber,
      leaveReason: this.fields.leaveReasonId.value || this.defaultLeaveReason.entryNumber,
      increasedWages: this.fields.increasedWages.value || this.radioButton.NO,
      proficiencyReward: this.fields.proficiencyRewardId.value || this.defaultProficiencyReward.entryNumber,
      diplomaReward: this.fields.diplomaReward.value || this.radioButton.NO,
      personalRank: this.fields.personalRank.value || this.radioButton.NO,
      generalCourse: this.fields.generalCourseId.value || this.defaultGeneralCourse.entryNumber,
      generalTraining: this.fields.generalTrainingId.value || this.defaultGeneralTraining.entryNumber,
      course: this.fields.courseCycleId.value || this.defaultCourseCycle.entryNumber,
      training: this.fields.trainingId.value,
      wagesAdditions: this.fields.wagesAdditionsId.value || this.defaultWageAdditions.entryNumber,
      framePercent: this.fields.framePercent.value,
      expertDate: this.getDate(this.fields.expertDate?.value),
      socialWorkerTraining: this.fields.socialTrainingId.value || this.defaultSocialTraining.entryNumber,
    };
  }

  /**
   *
   */
  bodyForAdd(): AddEmployeeModel {
    return {
      birthDate: this.getDate(this.fields.birthDate?.value),
      sex: this.fields.sexId.value,
      employeeStatus: this.fields.employeeStatusId.value || this.defaultStatus?.entryNumber,
      professionalSeniority: this.getDate(this.fields.professionalSeniority.value),
      degree: this.fields.degreeId.value || this.defaultEducationDegree?.entryNumber,
      education: this.fields.educationLevelId.value || this.defaultEducationLevel?.entryNumber,
      educationYears: this.fields.educationYears.value,
      startDate: this.getDate(this.fields.startDate?.value),
      endDate: this.getDate(this.fields.endDate?.value),
      commitment: this.fields.commitmentId.value,
      leaveReason: this.fields.leaveReasonId.value || this.defaultLeaveReason?.entryNumber,
      increasedWages: this.fields.increasedWages.value,
      proficiencyReward: this.fields.proficiencyRewardId.value,
      diplomaReward: this.fields.diplomaReward.value,
      personalRank: this.fields.personalRank.value,
      generalCourse: this.fields.generalCourseId.value,
      generalTraining: this.fields.generalTrainingId.value,
      course: this.fields.courseCycleId.value,
      training: this.fields.trainingId.value,
      wagesAdditions: this.fields.wagesAdditionsId.value,
      framePercent: this.fields.framePercent.value,
      expertDate: this.getDate(this.fields.expertDate?.value),
      lastChildBirthDate: this.getDate(this.fields.lastChildBirthDate?.value),
      socialWorkerTraining: this.fields.socialTrainingId.value || this.defaultSocialTraining?.entryNumber,
      jobsConnection: this.jobsConnection,
      jobsPercent: this.fields.jobsPercent || this.defaultJobsPercent,
    };
  }

  /**
   * Returns date in dd-MM-yyyy format
   * @param date date to be formatted
   * @returns formatted date
   */
  private getDate(date: Date): Date | undefined {
    // const formattedDate = new Date(this.intl.formatDate(new Date(date), this.dateFormat));

    return calculateWithoutTimeOffset(date);
  }

  /**
   * Retrieves lookups data
   */
  private getLookups(): void {
    this.statuses$ = this.$data.getEmployeeStatuses().pipe(
      selectMap,
      tap((data) => (this.defaultStatus = data[1]))
    );

    this.educationDegrees$ = this.$data.getEducationDegrees().pipe(
      selectMap,
      tap((data) => (this.defaultEducationDegree = data[0]))
    );
    this.educationLevels$ = this.$data.getEducationLevels().pipe(
      selectMap,
      tap((data) => (this.defaultEducationLevel = data[0]))
    );
    this.leaveReasons$ = this.$data.getLeaveReasons().pipe(
      selectMap,
      tap((data) => (this.defaultLeaveReason = data[0]))
    );
    this.commitments$ = this.$data.getCommitments().pipe(
      selectMap,
      tap((data) => (this.defaultCommitment = data[0]))
    );
    this.proficiencyRewards$ = this.$data.getProficiencyRewards().pipe(
      selectMap,
      tap((data) => (this.defaultProficiencyReward = data[0]))
    );
    this.generalCourses$ = this.$data.getCycleCourses().pipe(
      selectMap,
      tap((data) => (this.defaultGeneralCourse = data[0]))
    );
    this.generalTrainings$ = this.$data.getCycleTrainings().pipe(
      selectMap,
      tap((data) => (this.defaultGeneralTraining = data[0]))
    );
    this.specialCourses$ = this.$data.getSpecialCourses().pipe(
      selectMap,
      tap((data) => (this.defaultCourseCycle = data[0]))
    );
    this.specialTrainings$ = this.$data.getSpecialTrainings().pipe(
      selectMap,
      tap((data) => (this.defaultTrainingCycle = data[0]))
    );
    this.wagesAdditions$ = this.$data.getWagesAdditions().pipe(
      selectMap,
      tap((data) => (this.defaultWageAdditions = data[0]))
    );
  }

  /**
   * Get personal details of the chosen employee
   */
  private getEmployeePersonalDetails(): void {
    if (this.personalDetail?.nationalId > 0) {
      if (this.personalDetail.birthDate) {
        this.personalDetail.birthDate = new Date(this.personalDetail.birthDate);
      }

      if (this.personalDetail.professionalSeniority) {
        this.personalDetail.professionalSeniority = new Date(this.personalDetail.professionalSeniority);
      }

      this.personalDetail.endDate = DateHelper.toDate(this.personalDetail.endDate);

      this.personalDetail.expertDate = DateHelper.toDate(this.personalDetail.expertDate);

      this.personalDetail.lastChildBirthDate = DateHelper.toDate(this.personalDetail.lastChildBirthDate);

      this.personalDetail.startDate = DateHelper.toDate(this.personalDetail.startDate);

      this.modelToForm(this.personalDetail);
    }
  }
}
