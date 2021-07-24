import { BreadcrumbService } from './breadcrumb.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  /**
   * Crumbs list
   */
  crumbs!: Breadcrumb[];

  /**
   * Instance of subscription
   */
  protected subscription?: Subscription;

  /**
   *
   */
  employeeCode = '';

  constructor(
    protected service: BreadcrumbService
    ) {
    }

  /**
   * Initializes component's performance
   * @returns `void`
   */
  public ngOnInit(): void {
    this.subscription = this.service.crumbs$.subscribe((crumbs) => {
      this.crumbs = crumbs;
    });
  }

  /**
   * Finalizes component's performance
   * @returns `void`
   */
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
