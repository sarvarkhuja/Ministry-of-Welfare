import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbModule } from './breadcrumb.module';

import { TestBed, inject } from '@angular/core/testing';
import { BreadcrumbService } from './breadcrumb.service';

describe('Service: Breadcrumb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreadcrumbModule, RouterTestingModule],
      providers: [BreadcrumbService],
    });
  });

  it('should ...', inject([BreadcrumbService], (service: BreadcrumbService) => {
    expect(service).toBeTruthy();
  }));
});
