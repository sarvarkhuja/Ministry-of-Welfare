import { EmployeeInformationService } from './../../../../services/employee-information.service';
import { GetWorkplace } from '../../../../models/get-workplace.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LookupModel } from 'src/app/core/models/lookup.model';
@Component({
  selector: 'workspaces-tab',
  templateUrl: './workspaces-tab.component.html',
  styleUrls: ['./workspaces-tab.component.scss'],
})
export class WorkspacesTabComponent{
  /**
   * Lookups
   */
  departments$!: Observable<LookupModel[]>;
  public nationalID = 4739;
  public workplaceItem!: GetWorkplace;
  constructor(
    public $data: EmployeeInformationService,
    private activateRoute: ActivatedRoute
  ) {}



}
