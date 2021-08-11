import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalPaymentTabComponent } from './personal-payment-tab.component';

describe('PersonalPaymentTabComponent', () => {
  let component: PersonalPaymentTabComponent;
  let fixture: ComponentFixture<PersonalPaymentTabComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonalPaymentTabComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPaymentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
