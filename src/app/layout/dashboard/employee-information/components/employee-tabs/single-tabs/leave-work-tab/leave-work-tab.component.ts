import { LeaveWorkModel } from './../../../../models/leave-work.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeInformationService } from './../../../../services/employee-information.service';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leave-work-tab',
  templateUrl: './leave-work-tab.component.html',
  styleUrls: ['./leave-work-tab.component.scss'],
})
export class LeaveWorkTabComponent {
  /**
   * TODO: Get from employee grid
   */
  nationalID = 4739;

  constructor() {

  }


}
