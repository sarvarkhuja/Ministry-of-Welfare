import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeIndexComponent } from './home-index.component';

describe('HomeIndexComponent', () => {
  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
