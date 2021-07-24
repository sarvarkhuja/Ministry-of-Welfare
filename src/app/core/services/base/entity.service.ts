import { JsonHelper } from './../../helpers/json.helper';
import { Observable, of } from 'rxjs';
import { InjectorHelper } from './../../helpers/injector.helper';
import { HttpClient } from '@angular/common/http';
import { SettingsHelper } from './../../helpers/settings.helper';
import { Injectable } from '@angular/core';
import { QueryModel } from '../../models/types/query.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  readonly DI = InjectorHelper.injector;
  /**
   *
   */
  protected baseUrl = SettingsHelper.settings.endpoint;

  /**
   *
   */
  protected http: HttpClient;

  /**
   *
   */
  constructor() {
    this.http = this.DI.get(HttpClient);
  }

  /**
   *
   * @param url Api url
   * @param query Request query
   */
  public browseGrid(url: string, query?: QueryModel): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + url + '?query=' + JSON.stringify(query))
      .pipe(map((res) => JsonHelper.toCamel(res)));
  }

/**
 * Override method to save edited grid rows
 * @param rows array of edited rows
 */
  public save(rows: any[]): Observable<any> {
    return of(null);
  }
}
