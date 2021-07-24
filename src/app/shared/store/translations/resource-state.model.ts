import { TranslationModel } from '../../../core/models/translation.model';
export interface ResourceStateModel {
  dictionaries: TranslationModel[];
  dictionaryMessages: TranslationModel[];
  tooltips: any;
}
