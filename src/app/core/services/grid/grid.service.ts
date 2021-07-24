import { JsonHelper } from './../../helpers/json.helper';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DITokens } from './../../configs/di-tokens';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  constructor(@Inject(DITokens.ENDPOINT_URL) private endpoint: string, private http: HttpClient) {}

  /**
   * Fetches data from `url`
   * @param url Url of source data
   */
  getDropdownData(url: string): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + url).pipe(
      map((data) => JsonHelper.toCamel(data)),
      shareReplay(1)
    );
  }
}
