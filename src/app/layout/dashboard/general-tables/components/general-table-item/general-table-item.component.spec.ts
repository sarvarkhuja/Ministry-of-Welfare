import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTableItemComponent } from './general-table-item.component';

describe('GeneralTableItemComponent', () => {
  let component: GeneralTableItemComponent;
  let fixture: ComponentFixture<GeneralTableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
