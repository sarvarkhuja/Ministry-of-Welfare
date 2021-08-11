import { AuthService } from './../../../auth/services/auth.service';
import { CompanyShortInfo } from './../../../../core/models/company/company-short-info.model';
import { SystemConfigState } from 'src/app/shared/store/configurations/system-config/system-config.state';
import { BreadcrumbService } from './../../../../modules/breadcrumb/breadcrumb.service';
import { SignOut } from './../../../../shared/store/auth/auth.action';
import { UserInfoState } from 'src/app/shared/store/configurations/user-info/user-info.state';
import { Observable } from 'rxjs';
import { Component, OnInit, Renderer2, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserDataModel } from 'src/app/layout/auth/models/user-data.model';
import { Breadcrumb } from 'src/app/modules/breadcrumb/breadcrumb';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { NgDestroy } from 'src/app/shared/services/ng-destroy.service';

@Component({
  selector: 'header-element',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * User data to show on header
   */
  @Select(UserInfoState.userData)
  userInfo!: Observable<UserDataModel>;

  /**
   *
   */
  isRTL!: boolean;

  /**
   *
   */
  openUserInfoBoolean!: boolean;

  /**
   * Sidebar menu
   */
  sidebarMenuOpened!: boolean;
  /**
   * Sidebar menu
   */
  status!: boolean;

  /**
   * Upper header
   */
  headerShown = true;

  /**
   *
   */
  toggleHeaderLocalizationKey!: string;

  /**
   *
   */
  localizationKeyForShow = '388';

  /**
   *
   */
  localizationKeyForHide = '2929';

  /**
   * Reference to popup template
   */
  @ViewChild('popup')
  popup!: ElementRef;

  /**
   * Current payroll month
   */
  payrollMonth = new Date(this.store.selectSnapshot(UserInfoState.currentPayrollMonth));

  /**
   *
   */
  companyInfo?: CompanyShortInfo;

  /**
   *
   */
  userFactoryInfo?: Partial<UserDataModel>;

  /**
   *
   */
  userData!: UserDataModel;


  /**
   *
   */
  constructor(
    private store: Store,
    private renderer: Renderer2,
    private breadcrumb: BreadcrumbService,
    private router: Router,
    private destroyer: NgDestroy,
    private $auth: AuthService
  ) {
    this.toggleHeaderLocalizationKey = this.localizationKeyForHide;
    this.breadcrumb.postProcess = this.translate;
  }

  /**
   * Translates breadcrumb title
   */
  translate = (crumbs: Breadcrumb[]) => {
    // crumbs.forEach((s) => (s.title = this.$trans.getDictionary(s.title)?.description || s.title));
    return crumbs;
  }

  /**
   * Called each time when the component loaded
   */
  ngOnInit(): void {
    this.subscribeToLanguageDirection();
    this.listenRouter();
    this.setHeaderData();
  }

  /**
   * Listens to router to close menu
   */
  listenRouter(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroyer),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => this.closeSidebarMenu());
  }

  /**
   * Subscribtion to language direction
   */
  subscribeToLanguageDirection(): void {
    this.store.select(UserInfoState.isUserLangRTL).subscribe((isRTL) => (this.isRTL = isRTL));
  }

  /**
   * Global document listener to close popup if clicked outside of popup
   */
  @HostListener('document:click', ['$event.target'])
  popupCloseIfOutside(target: any): void {
    if (!this.popup.nativeElement.contains(target)) {
      this.openUserInfoBoolean = false;
    }
  }

  /**
   * Dispatches logout command
   */
  logout(): void {
    this.store.dispatch(new SignOut());
  }

  /**
   * Show / hide header on button click
   */
  public toggleHeader(): void {
    this.headerShown = !this.headerShown;
    this.toggleHeaderLocalizationKey =
      this.toggleHeaderLocalizationKey === this.localizationKeyForShow
        ? this.localizationKeyForHide
        : this.localizationKeyForShow;
  }

  /**
   * Show / hide the user information popup
   */
  toggleUserInfo(): void {
    this.openUserInfoBoolean = !this.openUserInfoBoolean;
  }

  /**
   * Open sidebar menu on hamburger click
   */
  public openSidebarMenu(): void {
    this.sidebarMenuOpened = true;
    this.renderer.addClass(document.body, 'disableScrolling');
  }

  /**
   * Close sidebar menu on X click or when click outside the menu
   */
  public closeSidebarMenu(): void {
    this.sidebarMenuOpened = false;
    this.renderer.removeClass(document.body, 'disableScrolling');
  }

  /**
   *
   */
  private setHeaderData(): void {
    this.companyInfo = this.store.selectSnapshot(SystemConfigState.currentCompany);
    this.userInfo.subscribe(data => this.userData = data);
  }
}
