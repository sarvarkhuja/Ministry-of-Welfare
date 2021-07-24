import { SelectItem } from '../models/types/select-item.model';

export const LANGUAGE = 'language';

export enum Language {
  HEBREW,
  ENGLISH,
}

export const LANGUAGES: Array<SelectItem> = [
  {value: Language[0], text: 'עברית'},
  {value: Language[1], text: 'English'},

];
