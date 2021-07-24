import { AppModule } from './../../../app.module';
import { SharedModule } from './../../shared.module';
import { CoreModule } from './../../../core/core.module';
import { Store } from '@ngxs/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreGridComponent } from './core-grid.component';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('CoreGridComponent', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  let component: CoreGridComponent;
  let fixture: ComponentFixture<CoreGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: [CoreGridComponent],
      providers: [Store],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
