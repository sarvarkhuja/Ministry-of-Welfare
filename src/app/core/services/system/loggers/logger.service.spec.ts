import { Observable } from 'rxjs';
import { AppModule } from './../../../../app.module';
import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { DITokens } from 'src/app/core/configs/di-tokens';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Logger', () => {
  let $logger: LoggerService;
  let httpController: HttpTestingController;
  let endpoint: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    });
    $logger = TestBed.inject(LoggerService);
    httpController = TestBed.inject(HttpTestingController);
    endpoint = TestBed.inject(DITokens.ENDPOINT_URL);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should define Logger Service', () => {
    expect($logger).toBeDefined();
  });

  it('should return Obsevable', () => {
    const message = 'error_in_log';
    const result = $logger.log(message);
    expect(result).toBeInstanceOf(Observable);
  });
});
