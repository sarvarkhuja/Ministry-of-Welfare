import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaintenanceMenuComponent } from './home-maintenance-menu.component';

describe('HomeMaintenanceMenuComponent', () => {
  let component: HomeMaintenanceMenuComponent;
  let fixture: ComponentFixture<HomeMaintenanceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMaintenanceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaintenanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
