export class RegExpConst {
  public static readonly PERSON_NAME = '^[A-Za-z\u0590-\u05fe-\/_ ]+'; // english, hebrew, and '/',' ','-','_'

  public static readonly PERSON_NAME_ENGLISH = '^[A-Za-z\-\/_ ]+'; // english and '/',' ','-','_'

  public static readonly PERSON_NAME_HEBREW = '^[\u0590-\u05fe-\/_ ]+'; // hebrew, and '/',' ','-','_'

  public static readonly DIGITS = '^[0-9]+$';

  public static readonly PHONE = '^[\\d() +-]+$'; // digits, and ' ', '()', '+', '-'
}
