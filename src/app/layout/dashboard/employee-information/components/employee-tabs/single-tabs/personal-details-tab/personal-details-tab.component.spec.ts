import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PersonalDetailsTabComponent } from './personal-details-tab.component';

describe('PersonalDetailsTabComponent', () => {
  let component: PersonalDetailsTabComponent;
  let fixture: ComponentFixture<PersonalDetailsTabComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonalDetailsTabComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
