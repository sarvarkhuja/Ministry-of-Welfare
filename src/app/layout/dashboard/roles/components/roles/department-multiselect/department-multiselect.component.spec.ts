import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DepartmentMultiselectComponent } from './department-multiselect.component';

describe('DepartmentMultiselectComponent', () => {
  let component: DepartmentMultiselectComponent;
  let fixture: ComponentFixture<DepartmentMultiselectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DepartmentMultiselectComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
