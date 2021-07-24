import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmployeesMenuComponent } from './home-employees-menu.component';

describe('HomeEmployeesMenuComponent', () => {
  let component: HomeEmployeesMenuComponent;
  let fixture: ComponentFixture<HomeEmployeesMenuComponent>;

  beforeEach(async(() => {
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
