import { inject, TestBed } from '@angular/core/testing';
import { AppModule } from './../../app.module';
import { AuthInterceptor } from './auth.interceptor';

describe('Service: AuthInterceptor', () => {
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
