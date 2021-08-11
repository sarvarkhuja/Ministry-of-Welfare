import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsHelper } from '@core/helpers/settings.helper';
import { Parameter } from '@core/models/parameter.model';
import { Store } from '@ngxs/store';
import { DxDataGridComponent } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as ExcelJS from 'exceljs';
import * as FileSaver from 'file-saver';
import { ToolbarOptionLocation, ToolbarWidget } from '../enums/toolbar-option.enums';
import { AuthState } from './../../shared/store/auth/auth.state';
import { ColumnSetting } from './../configs/column-settings';
import { DecoratorMetadata } from './../decorators/decorator.metadata';
import { FilterType } from './../enums/filter-type.enums';
import { LanguageHelper } from './../helpers/language.helper';

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

  parameters: Parameter[] = [];

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
   * Grid Settings
   */
  gridHeight = '84vh';

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

  /**
   * Used to check the currently chosen language
   */
  isHebrew!: boolean;

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
    this.isHebrew = LanguageHelper.isHebrew();
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
        this.prepareParameters(options);
        if (!options.headers) {
          options.headers = {};
        }
        options.headers['Authorization'] = `Bearer ${this.store.selectSnapshot(AuthState.token)}`;
      },
    });
  }

  prepareParameters(options: any): void {
    if (this.parameters) {
      this.parameters.forEach((parameter) => {
        options.data[parameter?.name] = parameter?.value;
      });
    }
  }

  /**
   * Creates toolbar to be displayed above the grid
   * @param event emitted on grid load (onToolbarPreparing)
   * TODO: add hebrew translation
   */
  onToolbarPreparing(event: any) {
    event.toolbarOptions.items.unshift(
      {
        location: ToolbarOptionLocation.AFTER,
        widget: ToolbarWidget.BUTTON,
        options: {
          width: 'auto',
          text: 'Add employee',
          onClick: this.add.bind(this),
        },
      },
      {
        location: ToolbarOptionLocation.AFTER,
        widget: ToolbarWidget.BUTTON,
        options: {
          icon: 'filter',
          onClick: this.showFilterBuilder.bind(this),
        },
      }
    );
  }

  /**
   * Called on add button click in grid toolbar
   * Override if custom behavior is required
   */
  add(): void {
    // TODO: add default add logic
  }

  /**
   * Shows filter panel on filter icon click in grid toolbar
   */
  showFilterBuilder() {
    this.dataGrid.instance.option('filterBuilderPopup.visible', true);
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
