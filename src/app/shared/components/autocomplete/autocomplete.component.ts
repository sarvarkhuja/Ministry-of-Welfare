import { map } from 'rxjs/operators';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AutocompleteOptions } from './types/autocomplete-optons';
import { Component, OnInit, Input, forwardRef, Injector, ViewChild } from '@angular/core';

type FormOptions = { form: FormGroup; field: string };

@Component({
  selector: 'autocomplete, autocomplete[formControlName], autocomplete[formControl]',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  /**
   *
   */
  @Input()
  options!: AutocompleteOptions;

  /**
   *
   */
  @Input()
  formControl!: FormControl;

  /**
   *
   */
  @Input()
  formControlName!: string;

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  isDisabled = false;

  /**
   *
   */
  get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer);
  }

  /**
   *
   */
  get control(): FormControl {
    return this.formControl || this.controlContainer?.control?.get(this.formControlName);
  }

  /**
   *
   */
  source$!: Observable<any[]>;

  /**
   *
   */
  data$!: Observable<any[]>;

  /**
   *
   */
  constructor(private injector: Injector) {}

  /**
   *
   */
  ngOnInit(): void {
    this.setValueField();
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  /**
   *
   */
  checkOptions(): void {
    if (!this.options) {
      throw new Error('Autocomplete error');
    }
  }

  /**
   *
   */
  setValueField(): void {
    if (this.options.source) {
      this.data$ = this.options.source;
      this.source$ = this.data$;
    }
  }

  /**
   *
   */
  handleFilter(key: any): void {
    if (key) {
      this.data$ = this.source$.pipe(
        map((lookups) =>
          lookups.filter(
            (lookup) =>
              lookup.entryNumber.toString().includes(key) ||
              lookup.description.includes(key) ||
              lookup.textField === key
          )
        )
      );
      return;
    }
    this.data$ = this.source$;
  }
}
