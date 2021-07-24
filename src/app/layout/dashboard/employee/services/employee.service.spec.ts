import { AppModule } from './../../../../app.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('Service: Employee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [EmployeeService],
    });
  });

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
