import { LookupOptions } from './../../../core/configs/lookups';
/**
 *
 */
export class SetLookup {
  /**
   *
   */
  public static type = '[Lookups] Set lookup';

  /**
   *
   */
  constructor(public lookupCacheName: string, public payload: any) {}
}

export class RemoveLookup {
  /**
   *
   */
  public static type = '[Lookup] Remove lookup';

  /**
   *
   * @param lookupName Lookup name
   */
  constructor(public lookupName: string) {}
}
