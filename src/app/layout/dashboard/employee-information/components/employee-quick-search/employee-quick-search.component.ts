import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectMap } from 'src/app/core/configs/rxjs.settings';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { EmployeeService } from '../../../employee/services/employee.service';
import { EmployeeQuickSearch } from './../../models/employee-quicksearch.model';

@Component({
  selector: 'app-employee-quick-search',
  templateUrl: './employee-quick-search.component.html',
  styleUrls: ['./employee-quick-search.component.scss'],
})
export class EmployeeQuickSearchComponent implements OnInit {
  /**
   *
   */
  @Input()
  model!: EmployeeQuickSearch;

  /**
   * Filtered departments
   */
  departments$!: Observable<LookupModel[]>;

  /**
   * All departments
   */
  departmentsSourceData$!: Observable<LookupModel[]>;

  /**
   *
   */
  constructor(private $data: EmployeeService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.loadDepartment();
  }

  /**
   *
   */
  loadDepartment(): void {
    this.departments$ = this.$data.getEmployeeDepartments().pipe(selectMap);
    this.departmentsSourceData$ = this.departments$;
  }

  /**
   * Filters departments by code or name
   */
  handleDepartmentFilter(key: any): void {
    if (key) {
      this.departments$ = this.departmentsSourceData$.pipe(
        map((lookups) =>
          lookups.filter((lookup) => lookup.entryNumber.toString().includes(key) || lookup.description.includes(key))
        )
      );
      return;
    }

    this.departments$ = this.departmentsSourceData$;
  }
}
