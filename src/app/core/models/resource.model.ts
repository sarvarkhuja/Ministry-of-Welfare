import { TranslationModel } from './translation.model';
export interface ResourceQueryModel {
  languageId: number;
  companyId: number;
  needLoadTooltip: boolean;
}

export interface ResourceResponse {
  dictionaries: TranslationModel[];
  dictionaryMessages: TranslationModel[];
  tooltips: any[];
}
