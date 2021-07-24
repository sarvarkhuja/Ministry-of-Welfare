export interface Menu {
  id: string;
  text: string;
  textInEnglish?: string;
  route?: string;
  expanded?: boolean;
  items?: Menu[];
}

