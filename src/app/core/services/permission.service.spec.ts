import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionService } from './permission.service';
import { configureBeforeAll } from '../testing.utils';
import { ENDPOINT_PROVIDER } from '../configs/providers.settings';

describe('Service: Permission', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionService, ENDPOINT_PROVIDER],
    });
  });

  it('should ...', inject([PermissionService], (service: PermissionService) => {
    expect(service).toBeTruthy();
  }));
});
