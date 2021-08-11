import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeEmployeesMenuComponent } from './home-employees-menu.component';

describe('HomeEmployeesMenuComponent', () => {
  let component: HomeEmployeesMenuComponent;
  let fixture: ComponentFixture<HomeEmployeesMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmployeesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmployeesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
