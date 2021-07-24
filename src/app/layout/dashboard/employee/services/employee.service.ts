import { AddEmployeeModel } from '../../employee-information/models/add-employee.model';
import { SaveTemplate } from './../models/save-template.model';
import { Template } from './../models/get-templates';

import { nameof } from './../../../../core/utils';
import { EmployeesListQuery } from './../models/queries/employees-list.query';
import { TemplateColumn } from './../models/get-template-columns';
import { EndpointSettings } from './../../../../core/configs/endpoint.settings';
import { EntityService } from './../../../../core/services/base/entity.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { SetChosenEmloyeeCode } from 'src/app/shared/store/configurations/user-info/user-info.action';
import { PersonalDetail } from '../../employee-information/models/personal-detail.model';
import { LookupModel } from 'src/app/core/models/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends EntityService {
  // tslint:disable: member-ordering

  status = new BehaviorSubject<number>(1);

  orderBy = new BehaviorSubject<string>('');

  orderDirection = new BehaviorSubject<number>(1);

  department = new BehaviorSubject<number>(0);


  statusValue!: number;

  orderByValue!: string;

  orderDirectionValue!: number;

  currentEmployeeNumberValue!: number;

  filterByDepartmentValue!: number;

  defaultOrganizationalLevelCode = 0;

  constructor(private actions: Actions) {
    super();
  }

  public changeFilterByStatusValue(statusId: number): void {
    this.status.next(statusId);
  }

  public changeOrderByField(fieldName: string): void {
    this.orderBy.next(fieldName);
  }

  public changeOrderDirection(direction: number): void {
    this.orderDirection.next(direction);
  }

  public changeDepartment(departmentNo: number): void {
    this.department.next(departmentNo);
  }

  public browseGrid(url: string, query?: EmployeesListQuery): Observable<any> {
    const params = query ? this.getBrowseAllParameters(query) : new HttpParams();

    return this.http
      .get<any>(this.baseUrl + url, { params })
      .pipe(map((res) => res));
  }

  public addEmployee(query: AddEmployeeModel): Observable<any> {
    return this.http
      .post<AddEmployeeModel>(this.baseUrl + EndpointSettings.ADD_EMPLOYEE, query)
      .pipe(map((res) => res));
  }

  /**
   *
   */
  public chosenEmployeeChanged(): Observable<any> {
    return this.actions.pipe(ofActionDispatched(SetChosenEmloyeeCode));
  }

  /**
   * Returns parameters to be sent to back-end for getting employees
   */
  private getBrowseAllParameters(query: EmployeesListQuery): HttpParams {
    const params = new HttpParams().set(nameof<EmployeesListQuery>('request'), query?.request);

    return params;
  }

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
  public getGeneralCourses(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_GENERAL_COURSES);
  }

  /**
   * Returns lists of general trainings
   */
  public getGeneralTrainings(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_GENERAL_TRAININGS);
  }

  /**
   * Returns lists of special courses
   */
  public getCourseCycles(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_COURSE_CYCLES);
  }

  /**
   * Returns lists of special trainings
   */
  public getTrainingCycles(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_TRAINING_CYCLES);
  }

  /**
   * Returns lists of wages additions
   */
  public getWagesAdditions(): Observable<LookupModel[]> {
    return this.http.get<LookupModel[]>(this.baseUrl + EndpointSettings.GET_WAGES_ADDITIONS);
  }


  /**
   * Returns parameters of the personal details
   */
  public getPersonalDetails(nationalId: number): Observable<PersonalDetail> {
    const params = new HttpParams().append('nationalId', nationalId.toString());

    return this.http
      .get<PersonalDetail>(this.baseUrl + EndpointSettings.GET_PERSONAL_DETAILS, { params });
  }
  public getTemplatePart(pageId: number): Observable<Array<Template>> {
    const params = new HttpParams().append('pageId', pageId.toString());

    return this.http
      .get<Array<{ id: number; name: string }>>(this.baseUrl + EndpointSettings.GET_TEMPLATE_PARTS, { params })
      .pipe(map((res) => res));
  }

  public getTemplateColumns(templateId: number): Observable<TemplateColumn[]> {
    const params = new HttpParams().append('templateId', templateId.toString());

    return this.http
      .get<TemplateColumn[]>(this.baseUrl + EndpointSettings.GET_TEMPLATE_COLUMNS, { params })
      .pipe(map((res) => res));
  }

  public saveTemplate(data: SaveTemplate): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + EndpointSettings.SAVE_TEMPLATE_COLUMNS, data);
  }

  public deleteTemplate(templateId: number): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + EndpointSettings.DELETE_TEMPLATE_COLUMNS, { templateId });
  }
}
