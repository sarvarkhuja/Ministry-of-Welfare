import { NgModule } from '@angular/core';
import { TranslatePipe } from './pipes/translate/translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  exports: [
    TranslatePipe
  ]
})
export class TranslateModule {

}
