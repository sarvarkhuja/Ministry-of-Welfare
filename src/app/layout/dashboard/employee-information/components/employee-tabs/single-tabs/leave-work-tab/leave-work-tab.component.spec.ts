import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeaveWorkTabComponent } from './leave-work-tab.component';

describe('LeaveWorkTabComponent', () => {
  let component: LeaveWorkTabComponent;
  let fixture: ComponentFixture<LeaveWorkTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveWorkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveWorkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
