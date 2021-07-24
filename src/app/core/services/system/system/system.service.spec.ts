import { HttpTestingController } from '@angular/common/http/testing';
import { AppModule } from './../../../../app.module';
import { Store } from '@ngxs/store';
import { ResourceService } from './../resource/resource.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { SystemService } from './system.service';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('Service: System', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  let store: Store;
  let $system: SystemService;
  let $resource: ResourceService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    store = TestBed.inject(Store);
    $system = TestBed.inject(SystemService);
    $resource = TestBed.inject(ResourceService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([SystemService], (service: SystemService) => {
    expect(service).toBeTruthy();
  }));
});
