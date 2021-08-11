import { ErrorHandler } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AppModule } from './../../../../app.module';
import { LoggerService } from './../loggers/logger.service';
import { GlobalErrorHandler } from './global-error.handler';

describe('Handler: Global error', () => {
  let errorHandler: ErrorHandler;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    errorHandler = TestBed.inject(ErrorHandler);
  });

  it('should be truthy', inject([ErrorHandler], (service: GlobalErrorHandler) => {
    expect(service).toBeTruthy();
  }));

  it('should be defined', async () => {
    expect(errorHandler).toBeDefined();
  });

  it('should call logger when thrown error', async () => {
    const error: Error = new Error();
    error.stack = 'current_stack';
    const $logger = TestBed.inject(LoggerService);
    const spy = spyOn($logger, 'log').withArgs(error.stack).and.returnValue(new Observable<any>());
    errorHandler.handleError(error);

    expect(spy).toHaveBeenCalled();
  });
});
