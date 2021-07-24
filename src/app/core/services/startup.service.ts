import { ResourceService } from './system/resource/resource.service';
import { SignOut } from './../../shared/store/auth/auth.action';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Injectable } from '@angular/core';
import config from 'devextreme/core/config';

/**
 * Service included bootstrap functions to initialize application
 */
@Injectable({
  providedIn: 'root',
})
export class StartupService {
  /**
   *
   */
  constructor(
    private router: Router,
    private actions: Actions,
    private $resource: ResourceService  ) {}

  /**
   * Calls all necessary functions.
   * Used to initialize several functions
   * @returns `void`
   */
  public init(): void {
    this.configureSystem();
    this.configureAuth();
    this.configureCache();
    this.configurePermissions();
    this.configureStore();
    this.configureRtl();
  }

  /**
   * Configures system related settings
   * @returns `void`
   */
  public configureSystem(): void {
    this.$resource.init();
  }

  /**
   * Configures auth related settings
   * @returns `void`
   */
  public configureAuth(): void {
    this.actions.pipe(ofActionDispatched(SignOut)).subscribe(() => this.router.navigate(['/auth/signin']));
  }

  /**
   * Configures cache related settings
   * @returns `void`
   */
  public configureCache(): void {}

  /**
   * Configures permissions
   * @returns `void`
   */
  public configurePermissions(): void {}

  /**
   * Configures store management
   * @returns `void`
   */
  public configureStore(): void {}

  /**
   * Configures right-to-left layouts
   */
  public configureRtl(): void {
    config({
      rtlEnabled: true
  });
  }
}
