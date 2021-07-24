import { AppModule } from './../../app.module';
import { DITokens } from './../../core/configs/di-tokens';
import { By } from '@angular/platform-browser';
import { AppComponent } from './../../app.component';
import { SharedModule } from './../shared.module';
import { TestBed, async } from '@angular/core/testing';
import { HasAccessDirective } from './has-access.directive';
import { CoreModule } from 'src/app/core/core.module';
import { SettingsHelper } from 'src/app/core/helpers/settings.helper';
import { configureBeforeAll } from 'src/app/core/testing.utils';

describe('Directive: HasAccess', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: [HasAccessDirective, AppComponent],
      providers: [
        {
          provide: DITokens.ENDPOINT_URL,
          useFactory: () => SettingsHelper.settings.endpoint,
        },
      ],
    });
  });

  it('should consists [hasAccess] directives', () => {
    const fixture = TestBed.overrideComponent(AppComponent, {
      set: {
        template: `<h1 [hasAccess]="'no_permission'"></h1>`,
      },
    }).createComponent(AppComponent);

    fixture.detectChanges();

    const h1s = fixture.debugElement.queryAll(By.directive(HasAccessDirective));

    expect(h1s.length).toBe(1);
  });
});
