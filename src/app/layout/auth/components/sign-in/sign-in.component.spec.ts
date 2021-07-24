import { SystemConfigState } from './../../../../shared/store/configurations/system-config/system-config.state';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { L10nMessageService } from './../../../../core/services/system/message/l10n-message.service';
import { SystemService } from './../../../../core/services/system/system/system.service';
import { AuthService } from './../../services/auth.service';
import { Store } from '@ngxs/store';
import { SharedModule } from './../../../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './../../../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('SignInComponent', () => {
  beforeAll(() => {
    configureBeforeAll();
  });

  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let store: Store;
  let $auth: AuthService;
  let $system: SystemService;
  let $l10n: L10nMessageService;
  let loader: NgxUiLoaderService;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [AppModule, SharedModule, ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    $auth = TestBed.inject(AuthService);
    $system = TestBed.inject(SystemService);
    $l10n = TestBed.inject(L10nMessageService);
    loader = TestBed.inject(NgxUiLoaderService);
    fb = TestBed.inject(FormBuilder);

    store.reset(SystemConfigState);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
