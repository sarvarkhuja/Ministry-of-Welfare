import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { BaseGridComponent } from 'src/app/core/components/base-grid.component';
import { GeneralTablesService } from '../../../general-tables/services/general-tables.service';
import { SystemUser } from '../../models/system-user.model';
import { GridResult } from 'src/app/core/configs/grid-result';

@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.scss'],
})
export class SystemUserComponent extends BaseGridComponent<SystemUser> implements OnInit {
  /**
   *
   */
  isOpenedDialog = false;

  /**
   *
   */
  userName!: string;

  /**
   *
   */
  mainDistrict!: string;

  /**
   *
   */
  systemTypes!: string;

  /**
   *
   */
  privileges!: string;

  /**
   *
   */
  password!: string;

  /**
   *
   */
   isPasswordShown!: boolean;

  constructor(
    // TODO: Replace this service with proper service
    public $data: GeneralTablesService
  ) {
    super($data);
    this.type = SystemUser.prototype;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  /**
   * Hide / show password on eye icon click
   */
   togglePassword = (): void => { this.isPasswordShown = !this.isPasswordShown; };

  loadData(): void {
    // TODO: Initialize appropriate data
    this.data$ = of({} as GridResult);
  }

  /**
   * override method
   */
  onAdd(): void {
    this.openDialog();
  }

  /**
   *
   */
  addNew(): void {}

  /**
   *
   */
  closeDialog(): void {
    this.isOpenedDialog = false;
  }

  /**
   *
   */
  openDialog(): void {
    this.isOpenedDialog = true;
  }
}
