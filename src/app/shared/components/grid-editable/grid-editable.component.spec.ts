import { AppModule } from './../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridEditableComponent } from './grid-editable.component';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('GridEditableComponent', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  let component: GridEditableComponent;
  let fixture: ComponentFixture<GridEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [GridEditableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
