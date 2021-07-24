import { LocalizationService } from './../../localization.service';
import { AppModule } from './../../../../app.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { L10nMessageService } from './l10n-message.service';
import { configureBeforeAll } from 'src/app/core/testing.utils';
import * as deLocale from 'src/assets/i18n/de.json';
import { MessageService } from '@progress/kendo-angular-l10n';

describe('Service: L10nMessage', () => {
  beforeAll(() => {
    // configureBeforeAll();
  });

  let $l10n: LocalizationService;
  let $l10nMessage: L10nMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: MessageService, useClass: L10nMessageService }],
    });
    $l10n = TestBed.inject(LocalizationService);
    $l10nMessage = TestBed.inject(L10nMessageService);
  });

  it('should ...', inject([L10nMessageService], (service: L10nMessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should define Localization service instance', () => {
    expect($l10nMessage).toBeTruthy();
  });

  it('should translate using german language', () => {
    const key = 'kendo.grid.groupPanelEmpty';
    const realTranslation = 'Ziehen Sie eine Spaltenüberschrift hierher, um nach dieser Spalte zu gruppieren';
    const localizationKey = '$l10n';

    $l10nMessage[localizationKey].loadedLocalesJson = (deLocale as any).default;

    const translation = $l10nMessage.get(key);

    expect(translation).toEqual(realTranslation);
  });

  it('should be RTL direction', () => {
    $l10nMessage.changes.subscribe((s) => {
      expect(s.rtl).toBeTrue();
    });

    $l10nMessage.notify(true);
  });
});
