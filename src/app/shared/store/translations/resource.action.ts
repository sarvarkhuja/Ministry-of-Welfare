import { ResourceResponse } from './../../../core/models/resource.model';

/**
 *
 */
export class SetResource {
  /**
   *
   */
  public static type = '[Resource] SetResource';

  /**
   *
   */
  constructor(public payload: ResourceResponse) {}
}

/**
 *
 */
export class GetByDictionary {
  /**
   *
   */
  public static type = '[Resource] Get by dictionary';

  /**
   *
   */
  constructor(public key: string) {}
}
