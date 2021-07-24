import { TestBed, inject } from '@angular/core/testing';
import { EmployeeInformationService } from './employee-information.service';

describe('Service: EmployeeInformation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeInformationService]
    });
  });

  it('should ...', inject([EmployeeInformationService], (service: EmployeeInformationService) => {
    expect(service).toBeTruthy();
  }));
});
