/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreferenceService } from './preference.service';

describe('Service: Preference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreferenceService]
    });
  });

  it('should ...', inject([PreferenceService], (service: PreferenceService) => {
    expect(service).toBeTruthy();
  }));
});
