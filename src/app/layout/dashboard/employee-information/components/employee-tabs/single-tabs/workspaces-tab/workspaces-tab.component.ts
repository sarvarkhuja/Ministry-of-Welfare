import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { selectMap } from 'src/app/core/configs/rxjs.settings';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { GetWorkplace } from '../../../../models/get-workplace.model';
import { SaveWorkplace } from './../../../../models/save-workplace.model';
import { EmployeeInformationService } from './../../../../services/employee-information.service';

@Component({
  selector: 'workspaces-tab',
  templateUrl: './workspaces-tab.component.html',
})
export class WorkspacesTabComponent implements OnInit {
  /**
   * DevExtreme form
   */
  @ViewChild(DxFormComponent, { static: false })
  form!: DxFormComponent;

  /**
   * Defines nationalId of current employee
   */
  @Input()
  nationalId!: number;

  /**
   * Lookups
   */
  departments$!: Observable<LookupModel[]>;

  /**
   * Toast information
   */
  isVisibleToast: boolean = false;
  type: string = 'info';
  message: string = ' ';

  public workplaceItem!: Observable<GetWorkplace>;

  constructor(private $data: EmployeeInformationService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getNationalId();
    this.loadData();
    this.getLookups();
  }

  /**
   *  Getting data for saving the information
   */
  private getEmployeeFormValues(): SaveWorkplace {
    const optionName = 'formData';
    return {
      nationalId: this.nationalId,
      district: this.form.instance.option(optionName).district,
      department: this.form.instance.option(optionName).department,
      priorityRegion1: this.form.instance.option(optionName).priorityRegion1,
      councilType1: this.form.instance.option(optionName).councilType1,
      geoRegion1: this.form.instance.option(optionName).geoRegion1,
      department2: this.form.instance.option(optionName).department2,
      priorityRegion2: this.form.instance.option(optionName).priorityRegion2,
      councilType2: this.form.instance.option(optionName).councilType2,
      geoRegion2: this.form.instance.option(optionName).geoRegion2,
      department3: this.form.instance.option(optionName).department3,
      priorityRegion3: this.form.instance.option(optionName).priorityRegion3,
      councilType3: this.form.instance.option(optionName).councilType3,
      geoRegion3: this.form.instance.option(optionName).geoRegion3,
      department4: this.form.instance.option(optionName).department4,
      priorityRegion4: this.form.instance.option(optionName).priorityRegion4,
      councilType4: this.form.instance.option(optionName).councilType4,
      geoRegion4: this.form.instance.option(optionName).geoRegion4,
    };
  }

  /**
   * Gets national id based on the url param
   */
  getNationalId = () => (this.nationalId = this.$data.nationalId);

  /**
   * Adds new employee if in add mode
   * Updates existing employee data if in udpate mode
   */
  private saveEmployee = () => {
    const data = this.getEmployeeFormValues();
    if (this.workplaceItem) {
      this.updateWorkplace(data);
      // TODO: need translation
      this.message = 'Data saved successfully';
      this.type = 'success';
      this.isVisibleToast = true;
    } else {
      // TODO: need translation
      this.message = 'Error happened while saving';
      this.type = 'error';
      this.isVisibleToast = true;
    }
  };

  /**
   * Loads workplaces data by national id
   */
  loadData(): void {
    if (this.nationalId) {
      this.workplaceItem = this.$data.getWorkplaces(this.nationalId);
    }
  }

  /**
   * Retrieves lookups data
   */
  private getLookups(): void {
    this.departments$ = this.$data.getEmployeeDepartments().pipe(selectMap);
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
   * Sends request to update existing employee
   * @param employeeData data from Workplace tab
   */
  private updateWorkplace(employeeData: SaveWorkplace): void {
    this.$data.updateWorkplace(employeeData).subscribe();
  }
}
