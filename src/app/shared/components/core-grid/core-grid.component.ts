import { InjectorHelper } from './../../../core/helpers/injector.helper';
import { UserInfoState } from './../../store/configurations/user-info/user-info.state';
import { MessageService } from '@progress/kendo-angular-l10n';
import { GridService } from './../../../core/services/grid/grid.service';
import { GridOptions } from './../../../core/configs/grid-options';
import { SetGridSettings } from './../../store/grid/grid-settings.action';
import { GridSettingsState } from './../../store/grid/grid-settings.state';
import { GridHelper } from './../../../core/helpers/grid.helper';
import { ColumnSetting } from './../../../core/configs/column-settings';
import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import {
  ColumnReorderEvent,
  ColumnResizeArgs,
  ColumnVisibilityChangeEvent,
  PageChangeEvent,
  GridComponent,
  GridDataResult,
} from '@progress/kendo-angular-grid';
import { Observable, of } from 'rxjs';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { EntityModel } from 'src/app/core/models/entity.model';
import { State } from '@progress/kendo-data-query';
import { tap } from 'rxjs/operators';
import { RTL_PROVIDER } from 'src/app/core/configs/providers.settings';

@Component({
  selector: 'core-grid',
  template: '',
  providers: [RTL_PROVIDER],
})
export class CoreGridComponent implements OnInit {
  /**
   * Kendo nested information template
   */
  @ContentChild('gridDetailTemplate', { static: false })
  gridDetailTemplate!: TemplateRef<object>;

  /**
   * Grid instance in template
   */
  @ViewChild(GridComponent, { static: false })
  grid!: GridComponent;

  /**
   *
   */
  public defaultValue = { data: [], total: 0 };

  /**
   *
   */
  protected data$!: Observable<GridDataResult>;

  /**
   *
   */
  @Input()
  set src(value: Observable<GridDataResult>) {
    this.data$ = value ? this.mapDate(value) : of(this.defaultValue);
  }

  /**
   *
   */
  get src(): Observable<GridDataResult> {
    return this.data$;
  }

  /**
   *
   */
  @Input()
  options!: GridOptions;

  /**
   *
   */
  @Input()
  state!: State;

  /**
   *
   */
  @Input()
  type!: any;

  /**
   *
   */
  @Input()
  columns: ColumnSetting[] = [];

  /**
   *
   */
  @Input()
  component!: BaseGridComponent<EntityModel>;

  /**
   * Name of the table
   */
  protected tableName!: string;

  /**
   * Keys of data items expanded in details
   */
  expandedDetailKeys: Array<number> = [];

  /**
   * Constructor
   * @param $store Instance of NgxStore
   */
  constructor(protected $store: Store, protected $grid: GridService) { }

  /**
   *
   * @param dataItem `EntityModel` Incoming record
   * @returns `function`
   */
  expandDetailsBy = (dataItem: EntityModel): number => dataItem.id;

  /**
   * A callback method that is invoked immediately after the default change detector has checked the directive's
   * data-bound properties for the first time, and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   * @returns `void`
   */
  ngOnInit(): void {
    this.initGrid();
    InjectorHelper.injector
      .get(MessageService)
      .notify(this.$store.selectSnapshot(UserInfoState.userLangDirection) === 'RTL');
  }

  /**
   * Initializes grid
   * @returns `void`
   */
  initGrid(): void {
    this.setGridName();
    this.initColumns();
  }

  /**
   * Sets grid name to `{tableName}`
   */
  setGridName(): void {
    this.tableName = GridHelper.nameOf(this.type);
  }

  /**
   *
   */
  initColumns(): void {
    const columnsSettings = this.$store.selectSnapshot(GridSettingsState.byName(this.tableName));
    if (columnsSettings && columnsSettings.length) {
      this.columns = columnsSettings;
    } else {
      this.$store.dispatch(new SetGridSettings({ key: this.tableName, value: { ...this.columns } }));
    }
    this.columns = this.columns.slice().sort((x, y) => x.order - y.order);
  }

  /**
   *
   * @param columnOrder Column reorder event emitted by grid
   */
  onColumnReorder(columnOrder: ColumnReorderEvent): void {
    GridHelper.reorderColumn(columnOrder, this.columns);
    this.refreshSettingsStore();
  }

  /**
   * Handles an event when
   * @param resizeArgs Resize arguments
   */
  onColumnResize(resizeArgs: Array<ColumnResizeArgs>): void {
    GridHelper.resizeColumn(resizeArgs, this.columns);
    this.refreshSettingsStore();
  }

  /**
   * Handles an event emitted in grid
   * @param event Visibiliy event emitted when user hides/opens columns in menu
   */
  onColumnVisibilityChange(event: ColumnVisibilityChangeEvent): void {
    GridHelper.shiftColumnsVisibity(event, this.columns);
    this.refreshSettingsStore();
  }

  /**
   * Refreshes the ngxs store and rewrites to localStorage
   */
  refreshSettingsStore(): void {
    this.$store.dispatch(new SetGridSettings({ key: this.tableName, value: this.columns }));
  }

  /**
   * Called when double clicked to a row
   * @param e Selected data item
   */
  doubleClickedColumn(e: EntityModel): void {
    if (this.component) {
      this.component.doubleClicked(e);
    }
  }

  /**
   *
   * @param e Search Key
   */
  onFilter(e: string): void { }

  /**
   * Called once page state is changed
   * @param state Page state
   */
  onPageChange(state: PageChangeEvent): void {
    if (this.component) {
      this.component.onPageStateChanges(state);
    }
  }

  /**
   * Expands/Collapses row whic index corresponding to `rowIndex`
   * @param rowIndex Index of row being toggled
   * @returns `void`
   */
  toggleRow(dataItem: EntityModel): void {
    if (!dataItem.id) {
      throw Error('item is not specified with id');
    }

    if (!this.expandedDetailKeys.includes(dataItem.id)) {
      this.expandedDetailKeys.push(dataItem.id);
    } else {
      const index = this.expandedDetailKeys.indexOf(dataItem.id);
      this.expandedDetailKeys.splice(index, 1);
    }
  }

  mapDate(value: Observable<GridDataResult>): Observable<GridDataResult> {
    return value.pipe(
      tap((p) => {
        p.data.forEach((s) => {
          Object.keys(s).map((key) => {
            const column = this.columns.find((w) => w.field === key && w.type === 'date');
            if (column && s[key]) {
              s[key] = new Date(s[key]);
            }
          });
        });
      })
    );
  }
}
