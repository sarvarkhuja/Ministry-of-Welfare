import { DepartmentMultiselectComponent } from './../../department-multiselect/department-multiselect.component';
import { DistrictModel } from './../../../../models/district.model';
import { UserRoleModel } from './../../../../models/user-role.model';
import { groupAccessContent } from './../permission-data';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { RolesService } from './../../../../services/roles.service';
import { Observable } from 'rxjs';
import { EntryTypes } from './../../../../models/entry-type.enum';
import { ActionType } from './../../../../models/action-type.enum';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'roles-permission-grid',
  templateUrl: './roles-permission-grid.component.html',
  styleUrls: ['./roles-permission-grid.component.scss']
})
export class RolesPermissionGridComponent implements OnInit {
  /**
   * Mock data used for sub-pages template
   * TODO: remove once not needed
   */
  rolesData: any[] = groupAccessContent;

  /**
   * Default grid data
   */
  defaultValue: GridDataResult = {
    data: [],
    total: 0,
  };

  /**
   * Departments data by district
   */
  @ViewChild(DepartmentMultiselectComponent)
  departments: any;

  /**
   * Permissions data displayed in grid
   */
  @Input()
  data$!: Observable<GridDataResult>;

  /**
   * Data on chosen district of a specific role
   * Used to show what districts are chosen and which of them is main
   */
  @Input()
  districtData!: any;

  /**
   * Emitted on district checkboxes value change
   */
  @Output()
  districtDataChanged = new EventEmitter<DistrictModel>();

  /**
   * Default id for role and district
   */
  defaultId = 1;

  /**
   * List of permissions to be sent for update
   */
  permissions: UserRoleModel[] = [];

  /**
   * Checks if district permissions are accessible by role
   */
  isAccessibleByRole!: boolean;

  /**
   * Action type enum (deny, view, write)
   */
  get actionType(): typeof ActionType {
    return ActionType;
  }

  constructor(public $data: RolesService) {

  }

  /**
   *
   */
  public ngOnInit(): void {
    this.getPermissionsData();
    this.setIsAccessibleByRole();
  }

  /**
   * Set isAccessibleByRole value
   */
  public setIsAccessibleByRole = () => this.isAccessibleByRole = !this.districtData?.isAccessibleDistrict;

  /**
   * Checks if grid for sub-pages should be displayed
   */
  public isSubGridShown = (dataItem: any) => dataItem.entryType === EntryTypes.Child;

  /**
   * Retrieves permissions data to be displayed in grid
   */
  private getPermissionsData(): void {
    const roleId = this.districtData.roleId ?? this.defaultId;
    const districtId = this.districtData.districtId ?? this.defaultId;

    this.data$ = this.$data.getAccessControlEntries(roleId, districtId);
  }

  /**
   * Called when radio button is clicked
   * @param event Pointer Event fired on (click)
   * @param dataItem Grid data
   */
  public setActionType(event: any, dataItem: any): void {
    dataItem.actionId = event.target?.value;
    this.permissions = this.permissions.filter((row) => row.id !== dataItem.id);
    this.permissions.push(dataItem);
  }

  /**
   * @param action Action type value
   * @returns Action type index
   */
   public getActionTypeId = (action: any): number => Object.values(ActionType).indexOf(action);


  /**
   * Called when value of any district checkboxes is changed
   * @param checkbox the checkbox that is changed
   */
  public setDistrictData(checkbox: any): void {
    this.districtData[checkbox.name] = checkbox.checked;
    this.districtDataChanged.emit(this.districtData);
  }
}
