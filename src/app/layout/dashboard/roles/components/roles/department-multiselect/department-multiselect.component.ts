import { RolesService } from './../../../services/roles.service';
import { DepartmentModel } from './../../../models/department.model';
import { Component, Input, OnInit } from '@angular/core';

interface PendingSelection {
  [key: number]: boolean;
}

@Component({
  selector: 'department-multiselect',
  templateUrl: './department-multiselect.component.html',
  styleUrls: ['./department-multiselect.component.scss'],
})
export class DepartmentMultiselectComponent implements OnInit {
  /**
   * List of all departments
   */
  departments: DepartmentModel[] = [];

  /**
   * List of selected departments
   */
  selectedDepartments: DepartmentModel[] = [];

  /**
   * List of unselected departments
   */
  unselectedDepartments: DepartmentModel[] = [];

  /**
   * Departments ticked to be moved to the opposite side (list)
   */
  pendingSelection: PendingSelection = {};

  /**
   * List of updated departments
   */
  updatedDepartments: DepartmentModel[] = [];

  /**
   * Data of district to which departments are related
   */
  @Input()
  districtData!: any;

  constructor(public $data: RolesService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getDepartmentsByDistrict();
  }

  /**
   * Public methods
   *
   */
  public addToselectedDepartments(department?: DepartmentModel): void {
    const changedDepartments = department
      ? // If a given department has been provided (via double-click), that's the single
        // department that we want to move.
        [department]
      : // Otherwise, default to using the pending-selection index as the source of
        // departments to move.
        this.getPendingSelectionFromCollection(this.unselectedDepartments);
    // Now that we know which departments we want to move, reset the pending-selection.
    this.pendingSelection = Object.create(null);

    // Remove each pending department from the unselected list.
    this.unselectedDepartments = this.removeDepartmentsFromCollection(this.unselectedDepartments, changedDepartments);
    this.selectedDepartments = changedDepartments.concat(this.selectedDepartments);

    this.setUpdatedDepartmentsList(changedDepartments);
  }

  public removeFromSelectedDepartments(department?: DepartmentModel): void {
    const changedDepartments = department
      ? // If a given department has been provided (via double-click), that's the single
        // department that we want to move.
        [department]
      : // Otherwise, default to using the pending-selection index as the source of
        // departments to move.
        this.getPendingSelectionFromCollection(this.selectedDepartments);
    // Now that we know which departments we want to move, reset the pending-selection.
    this.pendingSelection = Object.create(null);

    // Remove each pending department from the selected departments collection.
    this.selectedDepartments = this.removeDepartmentsFromCollection(this.selectedDepartments, changedDepartments);
    this.unselectedDepartments = changedDepartments
      .concat(this.unselectedDepartments)
      .sort(this.sortDepartmentOperator);

    this.setUpdatedDepartmentsList(changedDepartments);
  }

  public removeAllDepartments(): void {
    this.updatedDepartments = this.mapChangedDepartments(this.unselectedDepartments);
    this.selectedDepartments = this.departments.sort(this.sortDepartmentOperator);
    this.unselectedDepartments = [];
  }

  public addAllDepartments(): void {
    this.updatedDepartments = this.mapChangedDepartments(this.selectedDepartments);
    this.selectedDepartments = [];
    this.unselectedDepartments = this.departments.sort(this.sortDepartmentOperator);
  }

  // I toggle the pending selection for the given department.
  public togglePendingSelection(department: DepartmentModel): void {
    this.pendingSelection[department.id] = !this.pendingSelection[department.id];
  }

  /**
   *   private methods
   */
  private getPendingSelectionFromCollection(collection: DepartmentModel[]): DepartmentModel[] {
    return collection.filter((department) => department.id in this.pendingSelection);
  }

  private removeDepartmentsFromCollection(
    collection: DepartmentModel[],
    departmentsToRemove: DepartmentModel[]
  ): DepartmentModel[] {
    return collection.filter((department) => !departmentsToRemove.includes(department));
  }

  private sortDepartmentOperator(a: DepartmentModel, b: DepartmentModel): number {
    return a.departmentName.localeCompare(b.departmentName);
  }

  /**
   * Retrieves departments data from back
   */
  private getDepartmentsByDistrict(): void {
    const roleId = this.districtData.roleId;
    const districtId = this.districtData.districtId;

    this.$data.getDepartmentsByDistrict(roleId, districtId).subscribe((data) => {
      this.departments = data;
      this.unselectedDepartments = this.departments.filter((department) => !department.isSelectedDepartment);
      this.selectedDepartments = this.departments.filter((department) => department.isSelectedDepartment);
    });
  }

  /**
   * Creates the list of changed departments that have not been saved yet
   * @param changedDepartments departments to be updated
   */
  private setUpdatedDepartmentsList(departments: DepartmentModel[]): void {
    const changedDepartments = this.mapChangedDepartments(departments);
    this.updatedDepartments = this.updatedDepartments
      .filter((updatedDeparment) => !changedDepartments.includes(updatedDeparment))
      .concat(changedDepartments);
  }

  /**
   * Maps departments and changes isSelectedDepartment value
   * @param departments changed departments
   * @returns departments with isSelectedDepartment changed
   */
  private mapChangedDepartments(departments: DepartmentModel[]): DepartmentModel[] {
    return departments.map((department: DepartmentModel) => {
      department.isSelectedDepartment = !department.isSelectedDepartment;
      return department;
    });
  }
}
