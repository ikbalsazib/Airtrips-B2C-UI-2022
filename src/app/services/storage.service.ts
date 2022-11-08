import { Injectable } from '@angular/core';
import { AdminRoleData } from '../interfaces/admin-role-data';
import { DATABASE_KEY } from '../core/utils/global-variable';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   * SESSION STORAGE
   */
  storeAdminRole(data: AdminRoleData) {
    sessionStorage.setItem(DATABASE_KEY.adminRoleData, JSON.stringify(data));
  }

  get adminRole(): AdminRoleData {
    const data = sessionStorage.getItem(DATABASE_KEY.adminRoleData);
    return JSON.parse(data) as AdminRoleData;
  }

  storeCouponData(data: any) {
    sessionStorage.setItem(DATABASE_KEY.userCoupon, JSON.stringify(data));
  }
  get storedCouponData(): any {
    const data = sessionStorage.getItem(DATABASE_KEY.userCoupon);
    return JSON.parse(data);
  }

  /**
   * DYNAMIC SESSION DATA
   */
  storeDataToSession(data: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getDataFromSession(key: string): any {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  }
  removeSessionData(key: string) {
    sessionStorage.removeItem(key);
  }

  /**
   * LOCAL STORAGE
   */

  storeAdminRoleToLocal(data: AdminRoleData) {
    localStorage.setItem(DATABASE_KEY.adminRoleData, JSON.stringify(data));
  }
  get adminRoleFromLocal(): AdminRoleData {
    const data = localStorage.getItem(DATABASE_KEY.adminRoleData);
    return JSON.parse(data) as AdminRoleData;
  }

  /**
   * LOCAL STORAGE
   */

  storeTripToLocal(data: string) {
    localStorage.setItem(DATABASE_KEY.launchTrip, JSON.stringify(data));
  }

  get tripFromLocal(): string {
    const data = localStorage.getItem(DATABASE_KEY.launchTrip);
    return JSON.parse(data);
  }

  /**
   * DYNAMIC SESSION DATA
   */
  storeInputData(data: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getStoredInput(key: string): any {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  }

  encryptSmsDataWithCrypto(data: object) {
    const cryptToSecretKey = environment.smsTokenSecret;
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      cryptToSecretKey
    ).toString();
  }
}
