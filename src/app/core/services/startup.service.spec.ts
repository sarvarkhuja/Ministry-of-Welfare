import { inject, TestBed } from '@angular/core/testing';
import { ENDPOINT_PROVIDER } from '../configs/providers.settings';
import { AppModule } from './../../app.module';
import { StartupService } from './startup.service';

describe('Service: Startup', () => {
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
