import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { InjectorHelper } from './injector.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseStatusCode } from '@core/configs/http-response-code';

/**
 * Helper to catch and treat errors
 */
export class ErrorHelper {
  /**
   * Get an error message from Http error properties
   * @param error Http Error
   */
  static getServerErrors(error: HttpErrorResponse): ServerError {
    if (error.error instanceof ErrorEvent) {
      return { code: '', reason: error.error?.message };
    }
    return { code: error.error?.code, reason: error.error?.reason };
  }

  /**
   *  Catches http errors and responds by status
   * @param error Http error response
   */
  static catchErrors(error: HttpErrorResponse): void {
    if (!error) {
      return;
    }
    const router = InjectorHelper.injector.get(Router);
    if (error.status === HttpResponseStatusCode.UNAUTHENTICATED) {
      // router.navigate(['/auth/signin']);
      return;
    }
  }

  /**
   * Throws an error to Errohandler
   * @param error Error
   */
  static treatError(error: Error): void {
    if (error) {
      const errorHandler = InjectorHelper.injector.get(ErrorHandler);
      errorHandler.handleError(error);
    }
  }
}

/**
 *
 */
export interface ServerError {
  /**
   * References exception type (i.e validation_failed)
   */
  code: string;

  /**
   * Actual message
   */
  reason: string;
}
