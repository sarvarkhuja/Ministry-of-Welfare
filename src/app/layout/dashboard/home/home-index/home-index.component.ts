import { PermissionName } from './../../components/menu/permission-name.enum';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent {
  /**
   * Name of permissions
   */
  get permissionName(): typeof PermissionName {
    return PermissionName;
  }
}
