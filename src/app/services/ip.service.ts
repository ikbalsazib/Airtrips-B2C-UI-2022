import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Blog } from '../interfaces/blog';

// const API_BLOG = environment.apiBaseLink + '/api/blog/';

@Injectable({
  providedIn: 'root',
})
export class IPService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  /**
   * BRAND
   */
  // getIPAddress() {
  //   this.httpClient
  //     .get('http://api.ipify.org/?format=json')
  //     .subscribe((res: any) => {
  //       this.ipAddress = res.ip;
  //     });
  // }

  getIPAddress() {
    return this.httpClient.get<{ data: any }>(
      'http://api.ipify.org/?format=json'
    );
  }
}
