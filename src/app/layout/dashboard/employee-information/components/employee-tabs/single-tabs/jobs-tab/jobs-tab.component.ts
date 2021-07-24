import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { GetEmployeeJob } from '../../../../models/get-employee-job.model';
import { EmployeeInformationService } from '../../../../services/employee-information.service';
@Component({
  selector: 'jobs-tab',
  templateUrl: './jobs-tab.component.html',
  styleUrls: ['./jobs-tab.component.scss']
})
export class JobsTabComponent extends BaseGridComponent implements OnInit {
  /**
   * TODO: Get from employee grid
   */
   nationalID = 4739;
   constructor(public $data: EmployeeInformationService, public route: ActivatedRoute, private $store: Store) {
     super($store);

     this.type = GetEmployeeJob.prototype;
   }

   /**
    *
    */
   ngOnInit(): void {
     this.loadData();
     console.log("Jobs second tab");
   }

   /**
    * Retrieves grid data
    */
   loadData(): void {
     // this.data$ = this.$data.getEmployeeJobsGridData(this.nationalID);
   }
}
