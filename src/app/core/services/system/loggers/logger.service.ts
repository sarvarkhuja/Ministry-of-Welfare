import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DITokens } from './../../../configs/di-tokens';
import { Injectable, Inject } from '@angular/core';

/**
 * Service to log errors or notification to server
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * Constructor injecting necessary services
   * @param endpoint Backend endpoint URL
   * @param http HttpClient for sending API request
   */
  constructor(@Inject(DITokens.ENDPOINT_URL) private endpoint: string, private http: HttpClient) {}

  /**
   * Sends error messages to backend TreatError API
   * @param message Error message
   */
  log(message: string): Observable<any> {
    // TODO: logging frontend errors in backend is not planned on the new infra net core, open if it is ready
    // return this.http.post(this.endpoint + EndpointSettings.TREAT_ERROR, { msg: message }, { observe: 'response' });
    return of({});
  }
}
