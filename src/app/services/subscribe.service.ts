import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interfaces/pagination';
const API_SUBSCRIBE=environment.apiBaseLink + '/api/subscriber/';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  sendMail(data: any) {
    return this.httpClient.post<{message: string,success:boolean}>(API_SUBSCRIBE + 'add-single-subscriber', {email:data});
  }
  getAllSubscribers() {
    return this.httpClient.get<{ data: any[],count:number }>(API_SUBSCRIBE + 'get-all-subscriber-list');
  }
}
