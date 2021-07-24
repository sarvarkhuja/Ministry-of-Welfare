import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionGridComponent } from './roles-permission-grid.component';

describe('RolesPermissionGridComponent', () => {
  let component: RolesPermissionGridComponent;
  let fixture: ComponentFixture<RolesPermissionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesPermissionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
