import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectMap } from 'src/app/core/configs/rxjs.settings';
import { LookupModel } from 'src/app/core/models/lookup.model';
import { RegExpConst } from './../../../../../shared/configs/regexp.const';
import { EmployeeQuickSearch } from './../../models/employee-quicksearch.model';
import { EmployeeInformationService } from './../../services/employee-information.service';

@Component({
  selector: 'app-employee-quick-search',
  templateUrl: './employee-quick-search.component.html',
  styleUrls: ['./employee-quick-search.component.scss'],
})
export class EmployeeQuickSearchComponent implements OnInit {
  /**
   * Employee data passed in employee-tabs.component
   */
  @Input()
  model!: EmployeeQuickSearch;

  /**
   * Departments list to be displayed in the select box
   */
  departments$!: Observable<LookupModel[]>;

  /**
   * Default lookup to be shown if departments$ | async is null
   */
  defaultDepartmentLookup!: any[];

  /**
   * Validation patterns
   */
  namePattern!: string;

  /**
   * Regular expressions to be used in validation
   */
  get regularExpressions(): typeof RegExpConst {
    return RegExpConst;
  }

  /**
   *
   */
  constructor(private $data: EmployeeInformationService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.setValidationPatterns();
    this.loadDepartment();
  }

  /**
   * Gets departments list from back
   */
  loadDepartment(): void {
    this.departments$ = this.$data.getEmployeeDepartments().pipe(selectMap);
  }

  /**
   * Sets patterns to validators of type 'pattern'
   */
  setValidationPatterns(): void {
    this.namePattern = this.regularExpressions.PERSON_NAME;
  }
}
