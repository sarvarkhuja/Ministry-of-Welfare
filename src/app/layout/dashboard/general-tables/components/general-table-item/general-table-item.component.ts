import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { GeneralTableEntryQuery } from '../../models/general-table-entry-query.model';
import { GeneralTableEntry } from '../../models/general-table-entry.model';
import { GeneralTablesService } from '../../services/general-tables.service';

@Component({
  selector: 'general-table-item',
  templateUrl: './general-table-item.component.html',
  styleUrls: ['./general-table-item.component.scss'],
})

export class GeneralTableItemComponent extends BaseGridComponent<GeneralTableEntry> implements OnInit {
  /**
   *
   */
  @Input()
  tableId!: number;

  /**
   *
   */
  isOpenedDialog = false;

  /**
   *
   */
  entryNumber!: number;

  /**
   *
   */
  description = '';

  /**
   *
   */
  query!: GeneralTableEntryQuery;

  constructor(public $data: GeneralTablesService) {
    super($data);
    this.type = GeneralTableEntry.prototype;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  /**
   * Prepare query sent to back-end
   */
   private prepareQuery(): void {
    const query = {
      query: JSON.stringify({...this.state, tableId: this.tableId}),
    };

    // TODO: check if possible to get pagination values from base-grid
    this.query = { ...this.query, ...query };
    this.query.pageLength = this.pageLength;
    this.query.pageNumber = this.pageNumber;
  }

  loadData(): void {
    this.prepareQuery();
    this.data$ = this.$data.getTableEntries(this.query);
  }

  /**
   * override method
   */
  onAdd(): void {
    this.openDialog();
  }

  /**
   *
   */
  onSave(): void {
    forkJoin(this.editedRowsList.map((row) => {
      return this.$data.updateTableEntry({ ...row, tableId: this.tableId });
    }))
    .subscribe();
  }

  /**
   *
   */
  addNew(): void {
    this.$data
      .addTableEntry({ tableId: this.tableId, entryNumber: this.entryNumber, description: this.description })
      .subscribe(w => {
        this.closeDialog();
        this.loadData();
      });
  }

  /**
   *
   */
  closeDialog(): void {
    this.isOpenedDialog = false;
  }

  /**
   *
   */
  openDialog(): void {
    this.isOpenedDialog = true;
  }
}
