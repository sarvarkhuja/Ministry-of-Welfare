import { AppModule } from './../../app.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { StartupService } from './startup.service';
import { configureBeforeAll } from '../testing.utils';
import { ENDPOINT_PROVIDER } from '../configs/providers.settings';

describe('Service: Startup', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [StartupService, ENDPOINT_PROVIDER],
    });
  });

  it('should ...', inject([StartupService], (service: StartupService) => {
    expect(service).toBeTruthy();
  }));
});
