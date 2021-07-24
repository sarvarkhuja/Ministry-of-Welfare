/**
 * Sign out model used while logout process
 */
export interface SignOutModel {
  /**
   * JWT token with payload data
   */
  token: string;

  /**
   * Login or AD username
   */
  username: string;
}
