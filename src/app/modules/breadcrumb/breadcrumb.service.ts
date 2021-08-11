import { BreadcrumbResolver } from './breadcrumb.resolver';
import { filter, mergeMap, toArray, concatMap, distinct, first, tap } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, Injector, OnDestroy, Type } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription, concat, isObservable, from } from 'rxjs';
import { Breadcrumb } from './breadcrumb';

@Injectable()
export class BreadcrumbService implements OnDestroy {
  /**
   * Callback function to process before showing breadcrumbs
   * @params `crumbs:BreadCrumb[]`
   * @returns `Promise<Breadcrumb[]> | Observable<Breadcrumb[]> | Breadcrumb[]`
   */
  postProcess!: (crumbs: Breadcrumb[]) => Promise<Breadcrumb[]> | Observable<Breadcrumb[]> | Breadcrumb[];

  /**
   * Instance of `BehaviorSubject` to store state of the breadcrumbs
   */
  protected breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);

  /**
   * Initial default resolver instance
   */
  protected defaultResolver = new BreadcrumbResolver();

  /**
   * Subscription ins
   */
  protected subscription?: Subscription;

  /**
   * Getter of crumbs
   * @returns `Observable<Breadcrumb[]>`
   */
  get crumbs$(): Observable<Breadcrumb[]> {
    return this.breadcrumbs.asObservable();
  }

  constructor(protected router: Router, protected injector: Injector) {
    this.subscription = this.router.events
      .pipe(
        filter((x) => x instanceof NavigationEnd),
        concatMap(() => this.onNavigationEnd())
      )
      .subscribe();

    this.onNavigationEnd().subscribe();
  }

  /**
   * Function to finalize service.
   * Unsubscribes and completes subscriptions
   * @returns `void`
   */
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.breadcrumbs.complete();
  }

  /**
   * Called when navigation end event emitted
   * @returns `Observable<Breadcrumb[]>`
   */
  protected onNavigationEnd(): Observable<Breadcrumb[]> {
    return this.resolveCrumbs(this.router.routerState.snapshot.root).pipe(
      mergeMap((breadcrumbs) => breadcrumbs),
      distinct((breadcrumb) => breadcrumb.title),
      toArray(),
      mergeMap((breadcrumbs) => {
        return this.postProcess
          ? this.wrapIntoObservable(this.postProcess(breadcrumbs)).pipe(first())
          : of(breadcrumbs);
      }),
      tap((breadcrumbs) => this.breadcrumbs.next(breadcrumbs))
    );
  }

  /**
   * Configures breadcrumb elements and resolves.
   * Deep dives to child elements starting from root
   * @param route Snapshot of activated route
   * @returns `Observable<Breadcrumb[]>`
   */
  protected resolveCrumbs(route: ActivatedRouteSnapshot): Observable<Breadcrumb[]> {
    let crumbs$: Observable<Breadcrumb[]> = of([]);
    const data = route.routeConfig?.data;

    if (data?.breadcrumbs) {
      const resolver = this.getBreadcrumbResolver(data.breadcrumbs);
      const result = resolver.resolve(route, this.router.routerState.snapshot);

      crumbs$ = this.wrapIntoObservable(result).pipe(first());
    }

    return route.firstChild ? concat(crumbs$, this.resolveCrumbs(route.firstChild)) : crumbs$;
  }

  /**
   * Checks and gets custom resolves if exists.
   * Returns default resolver if not found
   * @param breadcrumbs Instance of breadcrumb
   * @returns `BreadcrumbResolver`
   */
  protected getBreadcrumbResolver(breadcrumbs: string | Type<BreadcrumbResolver>): BreadcrumbResolver {
    return typeof breadcrumbs === 'function' && breadcrumbs.prototype instanceof BreadcrumbResolver
      ? this.injector.get<BreadcrumbResolver>(breadcrumbs)
      : this.defaultResolver;
  }

  /**
   * Wraps `value` into observable.
   * If `value` is observable itself then return `value`
   * @param value Breadcrumbs values
   * @returns Observable<T>
   */
  protected wrapIntoObservable<T>(value: T | Promise<T> | Observable<T>): Observable<T> {
    return isObservable(value) ? value : from(Promise.resolve(value));
  }
}
