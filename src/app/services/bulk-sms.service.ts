import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from './storage.service';

// const API_BULK_SMS = 'http://66.45.237.70/api.php';
const API_BULK_SMS = environment.apiBaseLink + '/api/bulk-sms/';
@Injectable({
  providedIn: 'root'
})
export class BulkSmsService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
  }

  /**
   * BULK SMS BD
   * POWERED BY BULK SMS BD
   * URL: http://login.bulksmsbd.com/default.php
   */

   sentSingleBulkSms(phoneNo: string, message: string) {
    const smsData = {phoneNo, message}
    const encryptData = this.storageService.encryptSmsDataWithCrypto(smsData);
    return this.httpClient.post<{ success: boolean; message: string }>(API_BULK_SMS + 'send-bulk-sms', {data: encryptData});
  }

  sendSingleSms(phoneNo: string, message: string) {
    const url = 'http://66.45.237.70/api.php?username=' + environment.bulkSmsUsername + '&password=' + environment.bulkSmsPassword + '&number=' + phoneNo + '&message=' + message;
    console.log(url);
    return this.httpClient.post<{ message: string }>(API_BULK_SMS + 'send-bulk-sms', {url});
  }



}
