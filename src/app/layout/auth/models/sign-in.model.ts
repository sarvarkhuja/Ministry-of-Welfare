/**
 * Sign in model used while login process
 */
export interface SignInModel {
  /**
   * Client id REMOVE:
   */
  client?: string;

  /**
   * Login or AD username
   */
  username: string;

  /**
   * Password credentials
   */
  password: string;

  /**
   * Provides auth state, if set true next time user
   * can access system without sign-in process, else each time shows sign-in window
   */
  keepMeSigned?: boolean;

  /**
   *
   */
  companyId: number;

  /**
   * One time password code
   */
  otpCode?: string;

  /**
   * Phone number to send `otpCode`
   */
  otpPhone?: string;

  /**
   *
   */
  profile?: number;

  /**
   *
   */
  languageId?: number;
}
