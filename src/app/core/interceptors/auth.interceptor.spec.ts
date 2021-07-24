import { AppModule } from './../../app.module';
import { AuthInterceptor } from './auth.interceptor';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: AuthInterceptor', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AuthInterceptor],
    });
  });

  it('should ...', inject([AuthInterceptor], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
