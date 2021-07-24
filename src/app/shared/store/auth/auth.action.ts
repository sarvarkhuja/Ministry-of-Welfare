import { SignInModel } from 'src/app/layout/auth/models/sign-in.model';

export class SignIn {
  /**
   *
   */
  public static type = '[Auth] Sign in';

  /**
   *
   * @param payload Sign in model
   */
  constructor(public payload: SignInModel) {}
}

/**
 *
 */
export class SignOut {
  /**
   *
   */
  public static type = '[Auth] Sign out';
}

/**
 * Command to clear token
 */
export class ClearToken {
  /**
   * Type of the token for store
   */
  public static type = '[Auth] Clear token';
}
