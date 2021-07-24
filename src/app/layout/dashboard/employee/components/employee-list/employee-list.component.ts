import { UrlString } from './../../../../../core/enums/url.enum';
import { UrlHelper } from './../../../../../core/helpers/url.helper';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { EndpointSettings } from './../../../../../core/configs/endpoint.settings';
import { ColumnSetting } from './../../../../../core/configs/column-settings';
import { ActivatedRoute, Router } from '@angular/router';
import { Template } from './../../models/get-templates';
import { EmployeesListQuery } from './../../models/queries/employees-list.query';
import { map } from 'rxjs/operators';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { TemplateColumn } from './../../models/get-template-columns';
import { EmployeeModel } from './../../models/employee.model';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { SaveTemplate } from '../../models/save-template.model';
import { ColumnType } from 'src/app/core/configs/column-settings';

enum STATUS {
  initial = -1,
  yes = 1,
  close,
  no,
}

const USER_ID = 1;
const PAGE_ID = 2;

/**
 * Defines the number of columns which are not reorderable
 * like columns for editing, checking
 */
const SKIPPING_COLUMNS_NUMBER = 1;

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent extends BaseGridComponent {
  public firstName: string | undefined;
  public isSaved = false;
  public listItems!: Template[];

  changedTemplates: Array<SaveTemplate> = [];
  changedTemplate!: SaveTemplate;

  currentTemplate!: Template;

  /**
   *
   */
  templateName = '';

  /**
   *
   */
  templateId = 0;

  /**
   *
   */
  templates!: Template[];

  /**
   *
   */
  templateColumns!: TemplateColumn[];

  /**
   *
   */
  selectedTemplate!: Template;

  /**
   *
   */
  hasChangesInTemplate = false;

  /**
   *
   */
  isDeleteButtonClicked = false;

  /**
   *
   */
  openUserInfoBoolean!: boolean;
  /**
   *
   */
  status = STATUS;

  /**
   *
   */
  sure$: BehaviorSubject<number> = new BehaviorSubject<number>(this.status.initial);

  /**
   * Model passed to back-end to query database
   */
  query!: EmployeesListQuery;

  /**
   *
   */
  employeeTotal = 0; // Total rows counter shown by default

  /**
   * Employee code
   */
  searchedEmployeeCode!: string;

  /**
   *
   */
  defaultIsActiveValue = 2; // All

  // Properties for show/close Dialogs
  addTemplateDialogOpened = false;
  saveTemplateDialogOpened = false;
  // TODO: rename
  sureDialog = false;

  /**
   * Employee data received from back
   */
  data!: any;

  /**
   * Properties to edit single layout name
   */
  editTemplateDialogOpened = false;

  /**
   * Reference to popup template
   */
  @ViewChild('popup')
  popup!: ElementRef;

  data$!: Observable<any>;

  /**
   *
   */
  constructor(
    public $data: EmployeeService,
    public route: ActivatedRoute,
    private $store: Store,
    private router: Router
  ) {
    super($store);
    this.type = EmployeeModel.prototype;
    this.edit = this.edit.bind(this);
  }

  /**
   *
   */
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    super.ngOnInit();
    this.loadData();
  }

  /**
   *
   */
  loadData(): void {
    super.loadData(EndpointSettings.GET_EMPLOYEES_ENTITIES_LIST);
  }

  /**
   * Creates toolbar to be displayed above the grid
   * @param event emitted on grid load (onToolbarPreparing)
   * TODO: add hebrew translation
   */
  onToolbarPreparing(event: any) {
    event.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        width: 100,
        text: 'Add',
        onClick: this.add.bind(this),
      },
    });
  }

  /**
   * Redirects to personal details tab in add mode
   */
  add(): void {
    this.router.navigate([UrlString.EMPLOYEE_INFORMATION]);
  }

  /**
   * Redirects to personal details in edit mode
   * @param event emitted on edit icon click
   */
  edit(event: any): void {
    const data = event.row.data;
    this.router.navigate([UrlString.EMPLOYEE_INFORMATION, 'edit', data.nationalId]);
  }

  // TODO: old logic, remove once rewritten or checked
  /**
   * Load data from database
   */
  // loadData(): void {
  //   this.prepareQuery();

  // Load templates
  // this.$data.getTemplatePart(PAGE_ID).subscribe((data: Template[]) => {
  //   this.templates = data;

  //   if (this.templates.length > 0) {
  //     // Set default template
  //     this.setDefaultTemplate();

  //     // Load columns in the specific template
  //     this.getTemplateColumns(this.currentTemplate.id).subscribe((columns) => {
  //       this.templateColumns = columns;
  //       this.mapColumnsTitle();

  //       // Load employee list
  //       this.data$ = this.$data.browseGrid(EndpointSettings.GET_EMPLOYEES_ENTITIES_LIST, this.query).pipe(
  //         tap((s) => {
  //           this.employeeTotal = s.total;
  //           this.data = s.data;

  //           // this.autoFitColumns(columns);
  //         })
  //       );
  //     });
  //   }
  // });

  // this.data$ = this.$data.browseGrid(EndpointSettings.GET_EMPLOYEES_ENTITIES_LIST, this.query).pipe(
  //   tap((employees) => {
  //     this.employeeTotal = employees.total;
  //     this.data = employees.data;
  //   }));
  //}

  /**
   *
   */
  setDefaultTemplate(): void {
    this.currentTemplate = this.templates[0];
    this.selectedTemplate = this.templates[0];
  }

  /**
   *
   */
  getTemplateColumns(templateId: number): Observable<TemplateColumn[]> {
    return this.$data.getTemplateColumns(templateId).pipe(
      map((columns) => {
        return columns.map((column) => {
          const field = this.fieldNameManipulation(column.columnName);
          const formatAndType = this.getFormatAndType(field);
          return {
            ...column,
            field,
            ...formatAndType,
          };
        });
      })
    );
  }

  /**
   *
   */
  public fieldNameManipulation(fieldName: string): string {
    let firstWord = fieldName.split(' ')[0];
    firstWord = firstWord.charAt(0).toLowerCase() + firstWord.slice(1);
    let secondWord = fieldName.split(/\s+/).slice(1, 3).toString();
    secondWord = secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
    return firstWord.concat('', secondWord);
  }

  /**
   *
   */
  loadTemplateColumns(): void {
    if (this.currentTemplate) {
      this.getTemplateColumns(this.currentTemplate.id).subscribe((columns) => {
        this.templateColumns = columns;
        console.log(this.templateColumns);

        this.mapColumnsTitle();
      });
    }
  }

  /**
   *
   */
  getFormatAndType(field: string): {
    type: ColumnType;
    format: string | undefined;
  } {
    let type: ColumnType = 'string';
    let format;
    const column = this.columns.find((col) => col.dataField === field);
    if (column) {
      type = column.dataType;
      format = column.format;
    }
    return { type, format };
  }

  /**
   * Map grid column titles to template column titles
   */
  private mapColumnsTitle(): void {
    this.columns.map((gridColumn: ColumnSetting) => {
      this.templateColumns.some((templateColumn: TemplateColumn) => {
        if (templateColumn?.field === gridColumn?.dataField) {
          templateColumn.columnName = gridColumn?.dataField;
          templateColumn.englishColumnName = gridColumn?.captionInEnglish;
        }
      });
    });
  }
}
