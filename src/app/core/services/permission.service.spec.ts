import { inject, TestBed } from '@angular/core/testing';
import { ENDPOINT_PROVIDER } from '../configs/providers.settings';
import { PermissionService } from './permission.service';

describe('Service: Permission', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionService, ENDPOINT_PROVIDER],
    });
  });

  it('should ...', inject([PermissionService], (service: PermissionService) => {
    expect(service).toBeTruthy();
  }));
});
