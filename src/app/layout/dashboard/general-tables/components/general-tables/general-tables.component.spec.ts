import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTablesComponent } from './general-tables.component';

describe('GeneralTablesComponent', () => {
  let component: GeneralTablesComponent;
  let fixture: ComponentFixture<GeneralTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
