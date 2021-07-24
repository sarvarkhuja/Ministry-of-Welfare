import { AppModule } from './../../../app.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { AutocompleteService } from './autocomplete.service';
import { ENDPOINT_PROVIDER } from 'src/app/core/configs/providers.settings';

describe('Service: Autocomplete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AutocompleteService, ENDPOINT_PROVIDER],
    });
  });

  it('should ...', inject([AutocompleteService], (service: AutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
