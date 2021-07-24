import { DITokens } from './../../../configs/di-tokens';
import { Store } from '@ngxs/store';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppModule } from './../../../../app.module';
import { TestBed, inject } from '@angular/core/testing';
import { ResourceService } from './resource.service';

describe('Service: Resource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
    });
  });

  it('should define service', inject([ResourceService], (service: ResourceService) => {
    expect(service).toBeTruthy();
  }));

  it('should inject define endpoint', inject([DITokens.ENDPOINT_URL], (endpoint: string) => {
    expect(endpoint).toBeTruthy();
  }));
});
