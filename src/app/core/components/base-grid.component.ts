import { ColumnSetting } from './../configs/column-settings';
import { DecoratorMetadata } from './../decorators/decorator.metadata';
import { Store } from '@ngxs/store';
import { AuthState } from './../../shared/store/auth/auth.state';
import { SettingsHelper } from '@core/helpers/settings.helper';
import { FilterType } from './../enums/filter-type.enums';
import { OnInit, Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import * as ExcelJS from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'base-grid-component',
  template: '',
})
export class BaseGridComponent implements OnInit {
  /**
   * Grid component
   */
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  /**
   * Data to be displayed in the grid
   */
  dataSource!: any;

  /**
   * Describes column settings in a grid.
   * All properties designed with Display decorator will be added here and will be shown in a grid
   */
  columns: ColumnSetting[] = [];

  /**
   * Model to be used for grid
   */
  type!: any;

  /**
   * Column Settings
   */
  columnMinWidth = 50;
  columnWidth = 'auto';

  /**
   * Filtration Settings
   */
  applyFilterTypes = [FilterType.AUTO, FilterType.ON_BUTTON_CLICK];
  currentFilter = FilterType.AUTO.key;
  showFilterRow = true;
  showHeaderFilter = true;

  /**
   * Pagination Settings
   */
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];
  pageSize = 100;
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;

  constructor(private store: Store) {}

  /**
   * A callback method that is invoked immediately after
   * the default change detector has checked the component's data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the component is instantiated.
   * @see https://angular.io/guide/lifecycle-hooks
   * @returns `void`
   */
  ngOnInit(): void {
    this.configureColumnSettings();
  }

  /**
   * Describes columns' settings for grid, collect all decorated(with Display) properties of TModel.
   * Initializes columns property
   * @returns `void`
   */
  public configureColumnSettings(): void {
    for (const key of Object.keys(this.type)) {
      if (Reflect.hasOwnMetadata(DecoratorMetadata.DISPLAY_ANNOTATION, this.type, key)) {
        const column: ColumnSetting = Reflect.getMetadata(DecoratorMetadata.DISPLAY_ANNOTATION, this.type, key);
        this.columns.push(column);
      }
    }
  }

  /**
   * Fetches and stores data for grid
   * @param api api to load data from
   * @param keyValue unique key used to create data store
   */
  loadData(api: string, keyValue = 'nationalId'): void {
    this.dataSource = AspNetData.createStore({
      key: keyValue,
      loadUrl: `${SettingsHelper.settings.endpoint}${api}`,

      onBeforeSend: (method, options) => {
        if (!options.headers) {
          options.headers = {};
        }
        options.headers['Authorization'] = `Bearer ${this.store.selectSnapshot(AuthState.token)}`;
      },
      onLoaded: (res) => {},
    });
  }

  /**
   * Called on excel export button click
   * @param event export event
   * @param fileName name of excel file
   * @param worksheetName name of worksheet of excel file
   */
  onExporting(event: any, fileName = 'DataGrid', worksheetName = 'Sheet') {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(worksheetName);

    exportDataGrid({
      component: event.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer: any) => {
        FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${fileName}.xlsx`);
      });
    });
    event.cancel = true;
  }
}
