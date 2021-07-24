import { AppModule } from './../../../app.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('Service: Auth', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AuthService],
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
