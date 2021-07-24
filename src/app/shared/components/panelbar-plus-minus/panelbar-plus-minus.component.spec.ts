import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelbarPlusMinusComponent } from './panelbar-plus-minus.component';

describe('PanelbarPlusMinusComponent', () => {
  let component: PanelbarPlusMinusComponent;
  let fixture: ComponentFixture<PanelbarPlusMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelbarPlusMinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelbarPlusMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
