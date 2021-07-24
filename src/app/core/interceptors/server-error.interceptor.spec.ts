import { AppModule } from './../../app.module';
import { ServerErrorInterceptor } from './server-error.interceptor';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: ServerError', () => {
  beforeAll(() => {
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ServerErrorInterceptor],
    });
  });

  it('should ...', inject([ServerErrorInterceptor], (service: ServerErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
