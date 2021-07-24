import { OtpRequestResponse } from './../models/otp-request-response.model';
import { SystemConfigState } from './../../../shared/store/configurations/system-config/system-config.state';
import { Store } from '@ngxs/store';
import { TranslateService } from './../../../core/services/translate.service';
import { InjectorHelper } from './../../../core/helpers/injector.helper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtpHelper {
  private _phoneNumber!: string;

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(v: string) {
    this._phoneNumber = v;
  }

  private _message!: string;

  public get message(): string {
    return this._message;
  }

  public set message(v: string) {
    this._message = v;
  }

  private _isOtpSent!: boolean;

  public get isOtpSent(): boolean {
    return this._isOtpSent;
  }

  public set isOtpSent(v: boolean) {
    this._isOtpSent = v;
    this.phoneNumber = '';
    this.message = '';
  }

  /**
   * Describes OTP code's expiration
   */
  public otpDuration = this.store.selectSnapshot(SystemConfigState.parameterValueByName('OTPDuration')) * 60;

  set(message: string, phoneNumber?: string, isOtpSent = false): void {
    this.isOtpSent = isOtpSent;
    this.message = message;
    this.phoneNumber = phoneNumber || '';
  }

  /**
   * Checks otp response
   * @param response `OtpRequestResponse`
   */
  setGenerationResponse(response: OtpRequestResponse): void {
    if (response) {
      switch (response.status) {
        case -2:
          this.set(this.$translate.getDictionaryMessageText('747'));
          break;

        case -1:
          this.set(this.$translate.getDictionaryText('3002'));
          break;

        case 0:
          this.set(this.$translate.getDictionaryMessageText('750'), response.description, true);
          break;

        default:
          this.set(this.$translate.getDictionaryMessageText('751'));
          break;
      }
    }
  }

  /**
   *
   */
  constructor(private store: Store, private $translate: TranslateService) {}
}
