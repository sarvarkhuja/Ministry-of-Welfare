import { nameof } from 'src/app/core/utils';
import { DistrictModel } from './../models/district.model';
import { UserRoleModel } from './../models/user-role.model';
import { HttpParams } from '@angular/common/http';
import { EndpointSettings } from './../../../../core/configs/endpoint.settings';
import { Observable } from 'rxjs';
import { EntityService } from './../../../../core/services/base/entity.service';
import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends EntityService {
  constructor() {
    super();
  }

  /**
   * Gets list of roles
   */
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + EndpointSettings.GET_ROLES);
  }

  /**
   * Gets list of districts by role
   */
  getDistrictsByRole(roleId: number): Observable<any> {
    const params = new HttpParams().set(nameof<DistrictModel>('roleId'), roleId.toString());

    return this.http.get<any[]>(this.baseUrl + EndpointSettings.GET_DISTRICTS_BY_ROLE, { params });
  }

  /**
   * Gets list of departments by district
   */
  getDepartmentsByDistrict(roleId: number, districtId: number): Observable<any> {
    const params = new HttpParams()
      .set(nameof<DistrictModel>('roleId'), roleId.toString())
      .set(nameof<DistrictModel>('districtId'), districtId.toString());

    return this.http.get<any>(this.baseUrl + EndpointSettings.GET_DEPARTMENTS, { params });
  }

  /**
   * Gets list of pages permissions for district of a specific role
   */
  getAccessControlEntries(roleId: number, districtId: number): Observable<GridDataResult> {
    const params = new HttpParams()
      .set(nameof<DistrictModel>('roleId'), roleId.toString())
      .set(nameof<DistrictModel>('districtId'), districtId.toString());

    return this.http.get<any>(this.baseUrl + EndpointSettings.BROWSE_PERMISSIONS, { params });
  }

  /**
   * Updates districts data of a specific role
   * @param models array of updated districts
   */
  updateDistricts = (models: DistrictModel[]) =>
    this.http.put<DistrictModel[]>(this.baseUrl + EndpointSettings.UPDATE_DISTRICTS, models)

  /**
   * Updates departments for districts of specific roles
   * @param models array of updated departments
   */
  updateDepartments = (models: DepartmentModel[]) =>
    this.http.put<DepartmentModel[]>(this.baseUrl + EndpointSettings.UPDATE_DEPARTMENTS, models)

  /**
   * Update permissions for districts of specific roles
   * @param models array of updated permissisons
   */
  updatePermissions = (models: UserRoleModel[]) =>
    this.http.put<UserRoleModel[]>(this.baseUrl + EndpointSettings.UPDATE_PERMISSIONS, models)
}
