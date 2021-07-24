import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicePlanMenuComponent } from './home-service-plan-menu.component';

describe('HomeServicePlanMenuComponent', () => {
  let component: HomeServicePlanMenuComponent;
  let fixture: ComponentFixture<HomeServicePlanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServicePlanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicePlanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
