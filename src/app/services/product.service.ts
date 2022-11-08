import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_PRODUCT = environment.apiBaseLink + '/api/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }



  getSearchProduct(searchTerm: string, productPerPage?: string, currentPage?: string) {
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('pageSize', productPerPage);
    params = params.append('page', currentPage);
    return this.http.get<{ data: any[], count: number }>(API_PRODUCT + 'get-products-by-text-search', {params});
  }


}
