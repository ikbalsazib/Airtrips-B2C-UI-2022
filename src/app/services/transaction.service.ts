import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SslInit} from '../interfaces/ssl-init';
import {Order} from '../interfaces/order';
import {TripInfo} from '../interfaces/trip-info';
import {Pagination} from '../interfaces/pagination';
import { Transaction } from '../interfaces/transaction';


const API_ORDER = environment.apiBaseLink + '/api/order/';
const API_ORDER_TEMP = environment.apiBaseLink + '/api/order-temporary/';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(
    private httpClient: HttpClient
  ) { }


  getAllTransactionByAdmin(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Transaction[], count: number, message?: string }>
      (API_ORDER + 'get-all-transaction-by-admin', {params});
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Transaction[], count: number, message?: string }>
      (API_ORDER + 'get-all-transaction-by-admin', {params});
    }
  }

  getAllBkashTransactionByAdmin(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Transaction[], count: number, message?: string }>
      (API_ORDER + 'get-all-bkash-transaction-by-admin', {params});
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Transaction[], count: number, message?: string }>
      (API_ORDER + 'get-all-bkash-transaction-by-admin', {params});
    }
  }

}
