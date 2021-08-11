import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EmployeeObligationTabComponent } from './employee-obligation-tab.component';


describe('EmployeeObligationTabComponent', () => {
  let component: EmployeeObligationTabComponent;
  let fixture: ComponentFixture<EmployeeObligationTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeObligationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeObligationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
