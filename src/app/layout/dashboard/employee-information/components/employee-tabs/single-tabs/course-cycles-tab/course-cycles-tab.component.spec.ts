import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCyclesTabComponent as CourseCyclesTabComponent } from './course-cycles-tab.component';

describe('CourseCuclesTabComponent', () => {
  let component: CourseCyclesTabComponent;
  let fixture: ComponentFixture<CourseCyclesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCyclesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCyclesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
