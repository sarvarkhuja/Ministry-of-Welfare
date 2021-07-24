import { Component, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StartupService } from '@core/services/startup.service';
import { Select } from '@ngxs/store';
import { UserInfoState } from '@shared/store/configurations/user-info/user-info.state';
import { Observable } from 'rxjs';

import 'reflect-metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(UserInfoState.userLangDirection)
  direction$!: Observable<string>;

  /**
   *
   */
  constructor(private startup: StartupService, private $title: Title) {
    this.startup.init();
    this.$title.setTitle('MOW');
  }
}
