import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WorkspacesTabComponent } from './workspaces-tab.component';

describe('WorkspacesTabComponent', () => {
  let component: WorkspacesTabComponent;
  let fixture: ComponentFixture<WorkspacesTabComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WorkspacesTabComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
