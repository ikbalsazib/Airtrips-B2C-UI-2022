import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Blog} from '../interfaces/blog';

const API_GET_MORE = environment.apiBaseLink + '/api/get-more/';


@Injectable({
  providedIn: 'root'
})
export class GetMoreService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  /**
   * BRAND
   */
  addGetMore(data: Blog) {
    return this.httpClient.post<{message: string}>(API_GET_MORE + 'add-get-more', data);
  }

  getGetMores() {
    return this.httpClient.get<{data: Blog[], message?: string}>(API_GET_MORE + 'get-all-get-more');
  }


  updateGetMoreData(data: Blog) {
    return this.httpClient.put<{message?: string}>(API_GET_MORE + 'update-get-more', data);
  }

}
