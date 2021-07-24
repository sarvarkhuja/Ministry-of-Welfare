import { Breadcrumb } from './breadcrumb';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TranslatePipe } from 'src/app/shared/pipes/translate/translate.pipe';

export class BreadcrumbResolver implements Resolve<Breadcrumb[]> {
  /**
   * Resolves `route`
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Breadcrumb[]> | Promise<Breadcrumb[]> | Breadcrumb[] {
    const data = route.routeConfig?.data;
    const path = this.getFullPath(route);
    const rawTextHebrew =
      typeof data?.breadcrumbs === 'string' ? data.breadcrumbs : data?.breadcrumbs.text || data?.text || path;
    const rawTextEnglish =
      typeof data?.breadcrumbs === 'string'
        ? data.breadcrumbs
        : data?.breadcrumbs.textEnglish || data?.breadcrumbs.text || data?.text || path;
    return of([
      {
        route: path,
        title: rawTextHebrew,
        titleEnglish: rawTextEnglish,
      },
    ]);
  }

  /**
   * Concats url segments and returns
   * @param route Instance of ActivatedRouteSnapshot
   * @returns `string` - Full path
   */
  protected getFullPath(route: ActivatedRouteSnapshot): string {
    const relativePath = (segments: UrlSegment[]) => segments.reduce((a, v) => (a += '/' + v.path), '');
    const fullPath = (routes: ActivatedRouteSnapshot[]) => routes.reduce((a, v) => (a += relativePath(v.url)), '');

    return fullPath(route.pathFromRoot);
  }
}
