/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobsTabComponent } from './jobs-tab.component';

describe('JobsTabComponent', () => {
  let component: JobsTabComponent;
  let fixture: ComponentFixture<JobsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
