/**
 *
 */
export class SetConfig {
  /**
   *
   */
  public static type = '[SystemConfig] Set config';

  /**
   *
   */
  constructor(public payload: { key: string; data: object }) {}
}

/**
 *
 */
export class SetSystemConfig {
  /**
   *
   */
  public static type = '[SystemConfig] Set system config';

  /**
   *
   */
  constructor(public payload: object) {}
}


/**
 *
 */
export class SetBuildVersion {
  /**
   *
   */
  public static type = '[SystemConfig] Set build version';

  /**
   *
   */
  constructor(public payload: string) {}
}

/**
 *
 */
export class SetCompanyConfig {
  /**
   *
   */
  public static type = '[SystemConfig] Set company config';

  /**
   *
   */
  constructor(public payload: object) {}
}

/**
 *
 */
export class ClearCompanyConfig {
  /**
   *
   */
  public static type = '[SystemConfig] Clear Company config';
}
