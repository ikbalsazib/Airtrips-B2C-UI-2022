import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OneWaySearchTicket } from '../interfaces/search-ticket';
import { environment } from '../../environments/environment';
import { timeout } from 'rxjs/operators';
import {
  AirBook,
  AirBookQueryData,
  Airport,
  AirRules,
  PreBook,
  PreBookQueryData,
  TripInfo,
  TripQueryData,
} from '../interfaces/trip-info';
import { AirRetrieve } from '../interfaces/air-retrieve';
import { AirportList } from '../interfaces/airport';
import { CountryList } from '../interfaces/countires';

const API_TRIP = environment.apiBaseLink + '/api/air-data/';
const DUMMY_DATA = '../../assets/data/';
const API_ORDER = environment.apiBaseLink + "/api/order/";

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient) {}

  getFilteredAirports() {
    return this.http.get<{ data: AirportList[] }>(DUMMY_DATA + 'airports.json');
  }
  getFilteredCountries() {
    return this.http.get<{ data: CountryList[] }>(DUMMY_DATA + 'countries.json');
  }

  getOneWayFilteredTrip(data: OneWaySearchTicket) {
    return this.http
      .post<{
        message: string;
        data: TripInfo;
        queryData: TripQueryData;
      }>(API_TRIP + 'air-search', data)
      .pipe(timeout(3600000));
  }

  getAirPrice(data: any) {
    return this.http
      .post<{
        message: string;
        data: TripInfo;
        queryData: TripQueryData;
      }>(API_TRIP + 'air-price', data)
      .pipe(timeout(3600000));
  }

  addPreBook(data: any) {
    console.log('addPreBook [Trip Service]', data);
    return this.http
      .post<{
        message: string;
        data: PreBook;
        queryData: PreBookQueryData;
      }>(API_TRIP + 'air-prebook', data)
      .pipe(timeout(3600000));
  }

  airBook(data: any) {
    // console.log('airBook [Trip Service]', data);
    return this.http
      .post<{
        message: string;
        data: AirBook;
        queryData: AirBookQueryData;
      }>(API_TRIP + 'air-book', data)
      .pipe(timeout(3600000));
  }
  getAirRules(data: any) {
    console.log('getAirRules [Trip Service]', data);
    return this.http
      .post<{
        message: string;
        data: AirRules[];
        queryData: any;
      }>(API_TRIP + 'air-rules', data)
      .pipe(timeout(3600000));
  }
  getFilteredTrip(data: OneWaySearchTicket) {
    // return this.http.post<{ deapartInfo: departInfo,returnInfo: returnInfo,departData:departData[], message: string }>(API_TRIP + 'get-filtered-trip', data);
    return this.http
      .post<{
        data: TripInfo;
      }>(API_TRIP + 'get-filtered-trip', data)
      .pipe(timeout(3600000));
  }

  getAirRetrieveByBookingId(data: any) {
    return this.http.post<{ data: AirRetrieve }>(
      API_TRIP + 'air-retrieve/',
      data
    );
  }

  getTicketConfirmed(data: any) {
    return this.http.post<{ data: AirRetrieve }>(
      API_TRIP + 'air-retrieve/',
      data
    );
  }

  updateOrderStatus(data: any) {
    console.log(" update order", data)
    return this.http.post<{ data: any }>(
      API_ORDER+ 'after-payment',
      data
    );
  }



  // getOneWayFilteredTrip(data: OneWaySearchTicket) {
  // return this.http.post<{ deapartInfo: departInfo,returnInfo: returnInfo,departData:departData[], message: string }>(API_TRIP + 'get-filtered-trip', data);
  // return this.http
  //   .post<{
  //     departInfo: departInfo;
  //     departData: departData[];
  //     message: string;
  //   }>(API_TRIP + 'get-one-way-filtered-trip', data)
  //   .pipe(timeout(3600000));
}
// getFilteredTripLaunch() {
//   return this.http.get<{ Data: LaunchResponse[]}>(DUMMY_DATA + 'launch-and-seat.json');
// }
// }
