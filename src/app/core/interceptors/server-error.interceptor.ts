import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorHelper } from './../helpers/error.helper';

/**
 * Interceptor to process server errors.
 * Register in module to include interceptor
 * @see https://angular.io/api/common/http/HttpInterceptor
 */
@Injectable({
  providedIn: 'root',
})
export class ServerErrorInterceptor implements HttpInterceptor {
  /**
   * Identifies and handles a given HTTP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // retry(1), NOTE: open if request should be sent once more
      catchError((error: HttpErrorResponse) => {
        ErrorHelper.catchErrors(error);
        return throwError(ErrorHelper.getServerErrors(error));
      })
    );
  }
}
