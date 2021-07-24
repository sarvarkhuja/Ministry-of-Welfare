import { UrlString } from './../enums/url.enum';
import { PermissionService } from 'src/app/core/services/permission.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * Guard for checking if user has permission(s) for current route
 */
@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  /**
   * Constructor. Inject necessary services here
   * @param store Ngxs store
   */
  constructor(private $permission: PermissionService, private router: Router) {}

  /**
   * Checks given state for user for given route
   * @param route Contains the information about a route
   * @param state Represents the state of the router at a moment in time.
   */
  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const data = route.data;

    if (data?.permissions) {
      const hasAccess = data.permissions.some((permission: string) =>
        this.$permission.hasAccessToMenu(permission) === true
      );

      if (!hasAccess) {
        this.router.navigate([UrlString.HOME]);
        return false;
      }
    }
    return true;
  }
}
