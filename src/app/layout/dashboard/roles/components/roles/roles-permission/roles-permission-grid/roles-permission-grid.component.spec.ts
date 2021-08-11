import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RolesPermissionGridComponent } from './roles-permission-grid.component';

describe('RolesPermissionGridComponent', () => {
  let component: RolesPermissionGridComponent;
  let fixture: ComponentFixture<RolesPermissionGridComponent>;

  beforeEach(waitForAsync(() => {
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
