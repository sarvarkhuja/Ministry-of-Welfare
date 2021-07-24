import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralTable } from '../../models/general-table.model';
import { GeneralTablesService } from './../../services/general-tables.service';

@Component({
  selector: 'general-tables',
  templateUrl: './general-tables.component.html',
  styleUrls: ['./general-tables.component.scss'],
})
export class GeneralTablesComponent implements OnInit {
  /**
   *
   */
  generalTable$!: Observable<GeneralTable[]>;

  /**
   *
   */
  filteredGeneralTable$!: Observable<GeneralTable[]>;

  /**
   *
   * param generalTableService
   */
  constructor(private generalTableService: GeneralTablesService) {}

  ngOnInit(): void {
    this.loadGeneralTables();
  }

  /**
   *
   */
  loadGeneralTables(): void {
    this.generalTable$ = this.generalTableService.getTables();
    this.filteredGeneralTable$ = this.generalTable$;
  }

  /**
   *
   */
  search(searchText: string): void {
    if (!searchText || searchText.length === 0) {
      this.filteredGeneralTable$ = this.generalTable$;
      return;
    }

    this.filteredGeneralTable$ = this.generalTable$.pipe(
      map((w) => w.filter((t) => t.tableDescription.includes(searchText)))
    );
  }

  /**
   *
   */
  onTabSelect(e: any): void {
    // TODO: Write proper logic
  }

  /**
   *
   */
  onAdd(): void {
    // TODO: Write proper logic
  }
}
