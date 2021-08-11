import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUpdateEmployeeModel } from '@layout/dashboard/employee-information/models/add-update-employee.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { GetEmployeeRole } from '../models/get-employee-role.model';
import { GetWorkplace } from '../models/get-workplace.model';
import { PersonalDetail } from '../models/personal-detail.model';
import { SearchJob } from '../models/search-job.model';
import { EndpointSettings } from './../../../../core/configs/endpoint.settings';
import { EntityService } from './../../../../core/services/base/entity.service';
import { SaveTemplate } from './../../employee/models/save-template.model';
import { EmployeeQuickSearch } from './../models/employee-quicksearch.model';
import { SaveEmployeeRole } from './../models/save-employee-role.model';
import { SaveEmployeeModel } from './../models/save-employee.model';
import { SaveWorkplace } from './../models/save-workplace.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeInformationService extends EntityService {
  /**
   * Employee national id
   */
  nationalId!: number;

  /**
   * Employee personal details
   */
  personalDetails!: Observable<PersonalDetail>;

  /**
   * Employee data from box above the tabs
   */
  employeeQuickSearchData!: EmployeeQuickSearch;

  constructor() {
    super();
  }

  /**
   * Sets current employee national id
   * @param id national id
   */
  setNationalId = (id: number) => (this.nationalId = id);

  /**
   * Returns lists of departments
   */
  public getEmployeeDepartments(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_EMPLOYEE_DEPARTMENTS);
  }

  /**
   * Returns lists of statuses
   */
  public getEmployeeStatuses(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_EMPLOYEE_STATUSES);
  }

  /**
   * Returns lists of trainings
   */
  public getSocialTrainings(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_SOCIAL_TRAININGS);
  }

  /**
   * Returns lists of education degrees
   */
  public getEducationDegrees(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_EDUCATION_DEGREES);
  }

  /**
   * Returns lists of education levels
   */
  public getEducationLevels(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_EDUCATION_LEVELS);
  }

  /**
   * Returns lists of leave reasons
   */
  public getLeaveReasons(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_LEAVE_REASONS);
  }

  /**
   * Returns lists of commitments
   */
  public getCommitments(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_COMMITMENTS);
  }

  /**
   * Returns lists of proficiency rewards
   */
  public getProficiencyRewards(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_PROFICIENCY_REWARDS);
  }

  /**
   * Returns lists of general courses
   */
  public getSpecialCourses(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_GENERAL_COURSES);
  }

  /**
   * Returns lists of general trainings
   */
  public getSpecialTrainings(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_GENERAL_TRAININGS);
  }

  /**
   * Returns lists of courses cycles
   */
  public getCourseCycles(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_COURSE_CYCLES);
  }

  /**
   * Returns lists of trainings cycles
   */
  public getTrainingsCycles(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_TRAINING_CYCLES);
  }

  /**
   * Returns lists of wages additions
   */
  public getWagesAdditions(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_WAGES_ADDITIONS);
  }

  public getWorkplaces(nationalId: number): Observable<GetWorkplace> {
    const params = new HttpParams().append('nationalId', nationalId.toString());

    return this.http.get<GetWorkplace>(this.baseUrl + EndpointSettings.GET_WORKPLACES, { params });
  }

  /**
   * Returns parameters of the personal details
   */
  public getPersonalDetails(nationalId: number): Observable<PersonalDetail> {
    const params = new HttpParams().append('nationalId', nationalId.toString());

    return this.http.get<PersonalDetail>(this.baseUrl + EndpointSettings.GET_PERSONAL_DETAILS, { params });
  }

  public saveTemplate(data: SaveEmployeeModel): Observable<SaveTemplate> {
    return this.http.post<SaveTemplate>(this.baseUrl + EndpointSettings.SAVE_TEMPLATE_COLUMNS, data);
  }

  public addEmployee(query: AddUpdateEmployeeModel): Observable<any> {
    return this.http
      .post<AddUpdateEmployeeModel>(this.baseUrl + EndpointSettings.ADD_EMPLOYEE, query)
      .pipe(map((res) => res));
  }

  public updateEmployee(query: AddUpdateEmployeeModel): Observable<any> {
    return this.http.post<AddUpdateEmployeeModel>(this.baseUrl + EndpointSettings.UPDATE_PERSONAL_DETAILS, query);
  }

  public updateWorkplace(query: SaveWorkplace): Observable<SaveWorkplace> {
    return this.http.post<SaveWorkplace>(this.baseUrl + EndpointSettings.UPDATE_WORKPLACES, query);
  }

  /**
   * Returns parameters of the personal details
   */
  public getRoles(nationalId: number): Observable<GetEmployeeRole> {
    const params = new HttpParams().append('nationalId', nationalId.toString());

    return this.http.get<GetEmployeeRole>(this.baseUrl + EndpointSettings.GET_EMPLOYEE_ROLES, { params });
  }

  /**
   *
   * @param jobNumber gets value from input
   * @param district gets district field number
   */
  public getSearchJobs(jobNumber: string, district: number): Observable<SearchJob[]> {
    let params = new HttpParams();
    params = params.append('jobNumber', jobNumber.toString());
    params = params.append('district', district.toString());

    return this.http.get<SearchJob[]>(this.baseUrl + EndpointSettings.GET_SEARCH_JOB, { params });
  }

  public updateEmployeeRole(query: SaveEmployeeRole): Observable<SaveEmployeeRole> {
    return this.http.post<SaveEmployeeRole>(this.baseUrl + EndpointSettings.UPDATE_EMPLOYEE_ROLES, query);
  }
}
