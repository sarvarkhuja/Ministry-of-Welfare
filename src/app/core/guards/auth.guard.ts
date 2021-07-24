import { ClearToken } from './../../shared/store/auth/auth.action';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthState } from '../../shared/store/auth/auth.state';
import { Store } from '@ngxs/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
/**
 * Guard checks if user is authenticated while routing
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   * Constructor. Inject necessary services here
   * @param store Ngxs store
   */
  constructor(private store: Store, private router: Router, private $jwt: JwtHelperService) {}

  /**
   * Checks given state for user for given route
   * @param route Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
   * @param state Snapshot of the route
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
    /** If token expired or user is unauthenticated it will redirect to login page */
    if (!isAuthenticated || this.$jwt.isTokenExpired()) {
      /** clears token if it is expired */
      this.store.dispatch(new ClearToken());
      this.router.navigate(['/auth/signin']);
    }
    return isAuthenticated;
  }
}
