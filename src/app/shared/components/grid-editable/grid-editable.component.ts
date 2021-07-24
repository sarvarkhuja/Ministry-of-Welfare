import { deepClone } from 'src/app/core/utils';
import { SnapshotState } from './../../store/snapshot/snapshot.state';
import { SaveGridData } from './../../store/snapshot/snapshot.action';
import { UserInfoState } from './../../store/configurations/user-info/user-info.state';
import { map, tap } from 'rxjs/operators';
import { format, intoArray, mapToSelectItem } from './../../../core/utils';
import { DropdownOptions } from './../../../core/configs/dropdown-options';
import { Observable, of } from 'rxjs';
import { GridHelper } from './../../../core/helpers/grid.helper';
import { ControlType } from '../../../core/enums/control-type.enum';
import { Store, Select } from '@ngxs/store';
import { CoreGridComponent } from './../core-grid/core-grid.component';
import { Component, OnInit, DoCheck, TemplateRef, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { DecoratorMetadata } from 'src/app/core/decorators/decorator.metadata';
import { GridService } from 'src/app/core/services/grid/grid.service';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { FilterLogic } from 'src/app/core/enums/filter.enum';

@Component({
  selector: 'grid-editable',
  templateUrl: './grid-editable.component.html',
  styleUrls: ['./grid-editable.component.scss'],
})
export class GridEditableComponent extends CoreGridComponent implements OnInit, DoCheck {
  /**
   * Get current language direction
   */
  @Select(UserInfoState.userLangDirection)
  direction$!: Observable<string>;

  /**
   * Reference to div with kendoTooltip directive
   */
  @ViewChild(TooltipDirective)
  tooltipDir!: TooltipDirective;

  /**
   * Reference to input shown on in-cell editing
   */
  @ViewChild('inputForEditing')
  inputForEditing!: ElementRef;

  /**
   * Reference to the template located with name of columnTemplate
   */
  @ContentChild('columnTemplate', { static: false })
  columnTemplate!: TemplateRef<object>;

  /**
   * Reference to the template located with name of editColumnTemplate
   */
  @ContentChild('editColumnTemplate', { static: false })
  editColumnTemplate!: TemplateRef<object>;

  /**
   * Type of control in a cell
   */
  cellControlType = ControlType;

  /**
   *
   */
  cellControlsMap: Map<string, { options: any; type: ControlType }> = new Map();

  /**
   *
   */
  subscriptionsSet: Map<string, any> = new Map();

  /**
   * Default grid columns filtering
   */
  defaultFilter: CompositeFilterDescriptor = {
    logic: FilterLogic.AND,
    filters: [],
  };

  /**
   * Constructor
   * @param $store Instance of NgxStore
   * @param $grid Instance of GridService
   */
  constructor(protected $store: Store, protected $grid: GridService, public $intl: IntlService) {
    super($store, $grid);
  }

  /**
   * A callback method that is invoked immediately after the default change detector has checked the directive's
   * data-bound properties for the first time, and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   * @returns `void`
   */
  ngOnInit(): void {
    super.ngOnInit();
    this.mapColumns();
    this.runSnapshot();
  }

  /**
   * Called every time the input properties of a component or a directive are checked.
   * Used to extend change detection by performing a custom check.
   * @returns `void`
   */
  ngDoCheck(): void {
    if (this.inputForEditing) {
      const inputElement = this.inputForEditing.nativeElement;
      if (inputElement && inputElement.classList.contains('ng-invalid')) {
        this.tooltipDir.show(inputElement);
      } else {
        this.tooltipDir.hide();
      }
    }
  }

  /**
   *
   */
  mapColumns(): void {
    if (!this.columns) {
      throw new Error('Columns not found');
    }

    this.columns.forEach((column) => {
      const options = GridHelper.optionsOfColumnControl(this.type, column.field);
      if (options) {
        this.cellControlsMap.set(column.field, options);
      }

      if (column.type === 'date' && options?.type !== ControlType.CUSTOM) {
        this.cellControlsMap.set(column.field, { options: null, type: ControlType.DATEPICKER });
      }
    });
  }

  /**
   *
   */
  runSnapshot(): void {
    this.data$ = this.data$.pipe(
      tap((data) => this.$store.dispatch(new SaveGridData(JSON.parse(JSON.stringify(data)), this.tableName)))
    );
  }

  /**
   *
   */
  undo(): void {
    const data = this.$store.selectSnapshot(SnapshotState.gridSnapshot(this.tableName));
    if (data?.data) {
      this.src = of(deepClone(data?.data));
      this.component.onUndo();
    }
  }

  /**
   * Checks if `field` is simple or custom while editing,
   * if it is not simple then need to implement it template
   * @param field Property key
   * @returns `boolean`
   */
  isSimple(field: string): boolean {
    return !Reflect.hasOwnMetadata(DecoratorMetadata.CUSTOM, this.type, field);
  }

  controlType(field: string): { options: any; type: ControlType } | undefined {
    return this.cellControlsMap.get(field);
  }

  /**
   * Retreives dropdown data
   * @param field Field name
   */
  getDropdownSourceData(field: string): Observable<any[]> {
    const options: DropdownOptions = Reflect.getOwnMetadata(DecoratorMetadata.DROPDOWN, this.type, field);
    if (options && options.source) {
      if (this.subscriptionsSet.has(field)) {
        return this.subscriptionsSet.get(field);
      }

      let source: Observable<any[]>;
      source = options.source instanceof Observable ? options.source : this.$grid.getDropdownData(options.source);

      const subscription = this.bindTemplate(source, options);
      this.subscriptionsSet.set(field, subscription);

      return subscription;
    }

    throw new Error('Dropdown decorator is not specified with source');
  }

  /**
   * Binds templates and necessary options to `subscription`
   * @param subscription Instance of observable to be overridden
   * @param options Dropdown options
   */
  private bindTemplate(subscription: Observable<any[]>, options: DropdownOptions): Observable<any[]> {
    if (options.template) {
      subscription = subscription.pipe(
        map((items) =>
          items.map((item) => {
            const text = format(options.template || '', ...intoArray(options.text).map((s) => item[s]));
            return mapToSelectItem(text, item[options.value]);
          })
        )
      );
    } else {
      subscription = subscription.pipe(
        map((items) => items.map((item) => mapToSelectItem(item[intoArray(options.text)[0]], item[options.value])))
      );
    }

    return subscription;
  }
}
