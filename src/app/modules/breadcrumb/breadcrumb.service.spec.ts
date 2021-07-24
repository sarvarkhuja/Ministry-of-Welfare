import { RouterTestingModule } from '@angular/router/testing';
import { configureBeforeAll } from 'src/app/core/testing.utils';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from './breadcrumb.module';

import { TestBed, async, inject } from '@angular/core/testing';
import { BreadcrumbService } from './breadcrumb.service';

describe('Service: Breadcrumb', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });
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
