import { Observable, of } from 'rxjs';
import { LoggerService } from './../loggers/logger.service';
import { AppModule } from './../../../../app.module';
import { GlobalErrorHandler } from './global-error.handler';
import { TestBed, inject } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';
import { configureBeforeAll } from 'src/app/core/testing.utils';
describe('Handler: Global error', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

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
