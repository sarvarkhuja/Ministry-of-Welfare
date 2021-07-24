export interface AccessControlEntry {
  /**
   *
   */
  id: number;

  /**
   *
   */
  actionId: number;

  /**
   *
   */
  entryCode: string;

  /**
   *
   */
  entryName: string;

  /**
   *
   */
  entryType: EntryType;

  /**
   *
   */
  isAllowed: false;

  /**
   *
   */
  profileId: number;
}

export enum EntryType {
  /**
   *
   */
  Parent,

  /**
   *
   */
  Child,
}
