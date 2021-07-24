import { EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'search-employee',
  templateUrl: './search-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-employee.component.scss'],
})
export class SearchEmployeeComponent {
  /**
   * Event emitted on search value change
   */
  @Output()
  selectionChange = new EventEmitter();

  /**
   * Searched value typed in the field by user
   */
  searchedEmployee = '';

  /**
   *
   */
  onSearchedEmployeeChange(value: any): void {
    this.selectionChange.emit(value);
  }
}
