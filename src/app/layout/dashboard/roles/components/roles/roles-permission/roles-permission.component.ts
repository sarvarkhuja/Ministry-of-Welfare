import { DepartmentModel } from './../../../models/department.model';
import { DistrictModel } from './../../../models/district.model';
import { RolesPermissionGridComponent } from './roles-permission-grid/roles-permission-grid.component';
import { RolesService } from './../../../services/roles.service';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'roles-permission',
  templateUrl: './roles-permission.component.html',
  styleUrls: ['./roles-permission.component.scss']
})
export class RolesPermissionComponent {
  /**
   * Permission grid by districts
   */
  @ViewChild(RolesPermissionGridComponent)
  grid!: any;

  /**
   * List of all districts by role
   */
  @Input()
  districtsByRole!: any[];

  /**
   * Id of the default district
   */
  defaultDistrictId = 1;

  /**
   * List of updated districts
   */
  updatedDistrictsData: DistrictModel[] = [];

  /**
   * List of updated departments
   */
  updatedDepartments: DepartmentModel[] = [];

  constructor(public $data: RolesService) {

  }

  /**
   * Called when district data changed
   * @param district updated district
   */
  setDistrictData(districtData: any): void {
    const {district, ...data} = districtData;
    this.updatedDistrictsData = this.updatedDistrictsData.filter((row) => row.id !== data.id);
    this.updatedDistrictsData.push(data);

  }

  /**
   * Gets list of updated departments by district
   */
  getDepartments = () => this.grid.departments.updatedDepartments;

  /**
   * Gets list of updated permissions
   */
  getPermissions = () => this.grid.permissions;
}
