import { UrlString } from './../../../../core/enums/url.enum';
import { ClearToken } from './../../../../shared/store/auth/auth.action';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgDestroy } from './../../../../shared/services/ng-destroy.service';
import { finalize } from 'rxjs/operators';
import { SignIn } from 'src/app/shared/store/auth/auth.action';
import { AuthHelper } from '../../services/auth.helper';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { takeUntil, catchError } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  /**
   * Sign-in form
   */
  form!: FormGroup;

  /**
   * Boolean to hide/show password on eye icon click
   */
  isPasswordShown = false;

  /**
   *
   */
  constructor(
    private builder: FormBuilder,
    private store: Store,
    private destroyer: NgDestroy,
    private $loader: NgxUiLoaderService,
    private router: Router,
  ) { }

  /**
   *
   */
  public ngOnInit(): void {
    this.clearToken();
    this.buildForm();
  }

  /**
   * Called on login button click
   * @returns `void`
   */
  public submitForm = (): void => { this.signIn().subscribe(() => this.redirect()); };

  /**
   * Hide / show password on eye icon click
   */
  public togglePassword = (): void => { this.isPasswordShown = !this.isPasswordShown; };

  /**
   * Checks if sign-in form is invalid
   */
  public isFormInvalid = (): boolean => (this.form.dirty || this.form.touched) && this.form.invalid;

  /**
   * Clears token to get rid of old state
   */
  private clearToken(): void {
    this.store.dispatch(new ClearToken());
  }

  /**
   * Builds sign-in form
   * @returns `void`
   */
  private buildForm(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Sends login request to back-end
   */
  private signIn(): Observable<any> {
    const value = this.form.value;

    if (this.form.invalid) {
      return of(null);
    }

    this.$loader.start('sign_in');

    return this.store.dispatch(new SignIn(AuthHelper.convertToSignInModel(value))).pipe(
      takeUntil(this.destroyer),
      catchError(() => {
        this.setErrors();
        return of();
      }),
      finalize(() => this.$loader.stop('sign_in'))
    );
  }

  /**
   * Seta form validation errors
   * * @returns `void`
   */
  private setErrors = (): void => { this.form.setErrors({ incorrect: true }); };

  /**
   * Redirects to home page
   * @returns `void`
   */
  private redirect = (): void => { this.router.navigate([UrlString.EMPLOYEES]); };
}
