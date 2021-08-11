import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralCoursesTabComponent } from './general-courses-tab.component';

describe('GeneralCoursesTabComponent', () => {
  let component: GeneralCoursesTabComponent;
  let fixture: ComponentFixture<GeneralCoursesTabComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GeneralCoursesTabComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCoursesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
