import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeQuickSearchComponent } from './employee-quick-search.component';

describe('EmployeeQuickSearchComponent', () => {
  let component: EmployeeQuickSearchComponent;
  let fixture: ComponentFixture<EmployeeQuickSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeQuickSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
