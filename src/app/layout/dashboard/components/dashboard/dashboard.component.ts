import { JwtHelperService } from '@auth0/angular-jwt';
import { NgDestroy } from './../../../../shared/services/ng-destroy.service';
import { takeUntil, delay } from 'rxjs/operators';
import { AuthService } from './../../../auth/services/auth.service';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { SetChosenEmloyeeCode, SetUserData } from 'src/app/shared/store/configurations/user-info/user-info.action';
import { SignOut } from 'src/app/shared/store/auth/auth.action';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface ColumnSettings {
  field: string;
  title: string;
  type: string;
}

export const ColumnTypes: { [type: string]: string } = {
  number: 'numeric',
  string: 'string',
};

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private $auth: AuthService,
    private store: Store,
    private destroyer: NgDestroy,
    private $jwt: JwtHelperService,
    private route: ActivatedRoute
  ) {
    this.setEmployeeCodeFromRoute();
  }

  ngOnInit(): void {
    this.triggerLogout();
  }

  /**
   *
   */
  setEmployeeCodeFromRoute(): void {
    const employeeCodeParameter = 'employeeCode';
    let employeeCode = this.route.snapshot.params[employeeCodeParameter];
    if (employeeCode) {
      employeeCode = employeeCode === 'all' ? undefined : employeeCode;
      this.store.dispatch(new SetChosenEmloyeeCode());
      this.store.dispatch(new SetChosenEmloyeeCode(employeeCode));
    }
  }

  triggerLogout(): void {
    const expiration = this.$jwt.getTokenExpirationDate();
    if (expiration !== null) {
      const timeout = expiration.valueOf() - new Date().valueOf();
      of(null)
        .pipe(delay(timeout), takeUntil(this.destroyer))
        .subscribe(() => this.store.dispatch(new SignOut()));
    }
  }
}
