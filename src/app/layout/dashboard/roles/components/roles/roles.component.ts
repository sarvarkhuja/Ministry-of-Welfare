import { UserRoleModel } from './../../models/user-role.model';
import { DistrictModel } from './../../models/district.model';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { RolesService } from './../../services/roles.service';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, OnInit, Component } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { DepartmentModel } from '../../models/department.model';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  /**
   * Roles tabstrip
   */
  @ViewChild('tabstrip', { static: false })
  tabstrip!: TabStripComponent;

  /**
   * Access to roles permission component
   * Used to pass districts by role data
   */
  @ViewChild(RolesPermissionComponent)
  permissions!: any;

  /**
   * List of all roles
   */
  roles: any;

  /**
   * Id of the default role
   */
  defaultRoleId = 1;

  /**
   * List of all updated districts
   */
  updatedDistricts: DistrictModel[] = [];

  /**
   * List of all updated departments
   */
  updatedDepartments: DepartmentModel[] = [];

  /**
   * List of all updated permissions
   */
  updatedPermissions: UserRoleModel[] = [];

  // Modal Boolean
  public opened = false;

  // modal addable list
  public listItems: Array<string> =
    [
      'User',
      'User 2',
      'User 3',
      'User 4'
    ];

  // Selected value from modal
  public selectedValue = this.listItems[0];

  constructor(public $data: RolesService, public route: ActivatedRoute) {

  }

  /**
   *
   */
  public ngOnInit(): void {
    this.getRoles();
    this.getDistricts();
  }

  /**
   * Called when a role is chosen from the list
   */
  public onRoleChange(tabData: any): void {
    const tabId = tabData.index;
    const chosenRole = this.roles[tabId];

    this.getDistricts(chosenRole.id);
    this.getUpdatedData();
  }

  /**
   * Save changes on the page
   */
  public saveChanges(): void {
    this.getUpdatedData();
    this.updateDistricts();
    this.updateDepartments();
    this.updatePermissions();
  }

  /**
   * Remove roles from list
   * @param index role index
   */
  public removeData(index: number): void {
    this.tabstrip.selectTab(index - 1);
    this.roles = this.roles.filter((w: any, id: number) => id !== index);
  }

  /**
   * Add roles to list
   * @param status role name
   */
  public sendData(status: any): void {
    this.opened = false;
    // TODO: connect with back
    this.roles.push({id: this.roles.length + 1, name: status});
  }

  /**
   * Open modal for adding new employee
   * TODO: rename
   */
  public open(): void {
    this.opened = true;
  }

  /**
   * Retrieves roles data
   */
  private getRoles(): void {
    this.$data
    .getRoles()
    .subscribe((data: any) => {
      this.roles = data;
    });
  }

  /**
   * Retrieves districts data
   */
  private getDistricts(roleIndex = 1): void {
    this.$data
      .getDistrictsByRole(roleIndex)
      .subscribe((data: any) => {
        this.permissions.districtsByRole = data;
      });
  }

  /**
   * Gets all the changes made for a specific role
   */
  private getUpdatedData(): void {
    this.updatedDistricts = this.updatedDistricts.concat(this.permissions.updatedDistrictsData);
    this.updatedDepartments = this.updatedDepartments.concat(this.permissions.getDepartments());
    this.updatedPermissions = this.updatedPermissions.concat(this.permissions.getPermissions());
  }

  /**
   * Updates districts for all roles
   */
  private updateDistricts(): void {
    this.$data.updateDistricts(this.updatedDistricts).subscribe();
    this.updatedDistricts = [];
  }

  /**
   * Updates departments for districts of all roles
   */
  private updateDepartments(): void {
    this.$data.updateDepartments(this.updatedDepartments).subscribe();
    this.updatedDepartments = [];
  }

  /**
   * Updates permissions for districts of all roles
   */
  private updatePermissions(): void {
    this.$data.updatePermissions(this.updatedPermissions).subscribe();
    this.updatedPermissions = [];
  }
}
