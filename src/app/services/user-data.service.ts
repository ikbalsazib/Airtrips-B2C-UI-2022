import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';
import { Pagination } from '../interfaces/pagination';
import { Cart } from '../interfaces/cart';

const API_USER = environment.apiBaseLink + '/api/user/';
const API_CART = environment.apiBaseLink + '/api/cart/';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  oneWaySearchData: any;
  searchAndResultID: any;
  passengerData: any;
  airPriceData: any;
  airRulesData: any;
  airBookData: any;
  airBookQueryData: any;
  dummyBookingID: any;
  searchFormData: any;

  constructor(private httpClient: HttpClient) {}

  /**
   * USER BASIC DATA
   */

  getLoggedInUserInfo(select?: string) {
    if (select) {
      let params = new HttpParams();
      params = params.append('select', select);
      return this.httpClient.get<{ data: User; message?: string }>(
        API_USER + 'logged-in-user-data',
        { params }
      );
    } else {
      return this.httpClient.get<{ data: User; message?: string }>(
        API_USER + 'logged-in-user-data'
      );
    }
  }

  /**
   * ADMIN ACCESS
   * CUSTOMER
   */
  getCustomerLists(pagination?: Pagination) {
    if (pagination) {
      let params = new HttpParams();
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      return this.httpClient.get<{
        data: User[];
        count: number;
        message?: string;
      }>(API_USER + 'get-all-user-list', { params });
    } else {
      return this.httpClient.get<{
        data: User[];
        count: number;
        message?: string;
      }>(API_USER + 'get-all-user-list');
    }
  }

  editLoginUserInfo(data: object) {
    return this.httpClient.put<{ message: string }>(
      API_USER + 'edit-logged-in-user-info',
      data
    );
  }

  editUserAccess(userId: string, data: object) {
    return this.httpClient.put<{ message: string }>(
      API_USER + 'edit-user-access/' + userId,
      data
    );
  }
  /**
   * CART
   */
  addItemToUserCart(data: Cart) {
    return this.httpClient.post<{ message: string }>(
      API_CART + 'add-to-cart',
      data
    );
  }

  addSingleItemToCart(data: Cart) {
    return this.httpClient.post<{ message: string }>(
      API_CART + 'add-to-cart',
      data
    );
  }

  getCartItemList() {
    return this.httpClient.get<{ data: any; message: string }>(
      API_CART + 'get-cart-items-by-user'
    );
  }

  incrementCartQuantity(cartId: string) {
    return this.httpClient.post<{ message: string }>(
      API_CART + 'increment-cart-item-quantity',
      { cartId }
    );
  }

  decrementCartQuantity(cartId: string) {
    return this.httpClient.post<{ message: string }>(
      API_CART + 'decrement-cart-item-quantity',
      { cartId }
    );
  }

  removeCartItem(cartId: string) {
    return this.httpClient.delete<{ message: string }>(
      API_CART + 'remove-cart-item/' + cartId
    );
  }

  countCartItem() {
    return this.httpClient.get<{ data: number }>(API_CART + 'cart-item-count');
  }

  getCartStatusOnBook(bookId: string) {
    return this.httpClient.get<{ data: any }>(
      API_CART + 'get-status-book-on-cart/' + bookId
    );
  }

  // Search
  get getOneWaySearchData() {
    return this.oneWaySearchData;
  }
  setOneWaySearchData(data) {
    this.oneWaySearchData = data;
  }

  // Search ID AND Result ID
  get getSearchAndResultID() {
    return this.searchAndResultID;
  }
  setSearchAndResultID(data) {
    this.searchAndResultID = data;
  }
  // Passenger Data
  get getPassengerData() {
    return this.passengerData;
  }
  setPassengerData(data) {
    this.passengerData = data;
  }
  // Air Price Data
  get getAirPriceData() {
    return this.airPriceData;
  }
  setAirPriceData(data) {
    this.airPriceData = data;
  }
  // Air Rules Data
  get getAirRulesData() {
    return this.airRulesData;
  }
  setAirRulesData(data) {
    this.airRulesData = data;
  }
  // Air Book Data
  get getAirBookData() {
    return this.airBookData;
  }
  setAirBookData(data) {
    this.airBookData = data;
  }
  // Air Book Query Data
  get getAirBookQueryData() {
    return this.airBookQueryData;
  }
  setAirBookQueryData(data) {
    this.airBookQueryData = data;
  }
  // Dummy Booking Data
  get getDummyBookingID() {
    return this.dummyBookingID;
  }
  setDummyBookingID(data) {
    this.dummyBookingID = data;
  }
  // Search Form
  get getSearchFormData() {
    return this.searchFormData;
  }
  setSearchFormData(data) {
    this.searchFormData = data;
  }
}
