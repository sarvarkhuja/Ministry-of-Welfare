import { ErrorHandler, Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgDestroy } from './../../../../shared/services/ng-destroy.service';
import { LoggerService } from './../loggers/logger.service';

/**
 * Global error handler service to handle errors
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  /**
   * Constructor
   * @param $log Logger service to log errors
   * @param destroyer Destoyer to unsubscribe subscribed service
   */
  constructor(private $log: LoggerService, private destroyer: NgDestroy) {}

  /**
   * Handles any errors thrown in project and logs them
   * @param error Error parameter
   * @returns `void`
   */
  handleError(error: Error): void {
    if (error.stack) {
      this.$log.log(error.stack).pipe(takeUntil(this.destroyer)).subscribe();
    }
    console.error(error);
    throw error;
  }
}
