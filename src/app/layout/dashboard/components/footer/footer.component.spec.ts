import { SharedModule } from './../../../../shared/shared.module';
import { AppModule } from './../../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('FooterComponent', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
