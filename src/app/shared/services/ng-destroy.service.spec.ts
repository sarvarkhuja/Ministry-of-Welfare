import { TestBed, async, inject } from '@angular/core/testing';
import { NgDestroy } from './ng-destroy.service';

describe('Service: NgDestroy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgDestroy]
    });
  });

  it('should ...', inject([NgDestroy], (service: NgDestroy) => {
    expect(service).toBeTruthy();
  }));
});
