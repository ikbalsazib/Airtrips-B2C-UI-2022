import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { UiService } from './ui.service';
const API_TRENDING_PLACE=environment.apiBaseLink + '/api/trending-place/';
@Injectable({
  providedIn: 'root'
})
export class TrendingPlaceService {


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) {
  }


  addTrendingPlace(data: any) {
    console.log(data);
    return this.httpClient.post<{ message: string }>(API_TRENDING_PLACE + 'add-trending-place', data);
  }
  getAllTrendingPlace() {
    return this.httpClient.get<{ data: any[] }>(API_TRENDING_PLACE + 'get-all-trending-places');
  }

  deleteTrendingPlaceById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_TRENDING_PLACE + 'delete-trending-place-by-id/' + id);
  }

  getSingleTrendingPlaceById(id: string) {
    return this.httpClient.get<{ data: any }>(API_TRENDING_PLACE + 'get-single-trending-place-by-id/' + id);
  }

  editTrendingPlaceById(data: any) {
    return this.httpClient.put<{ message: string }>(API_TRENDING_PLACE + 'edit-trending-place-by-id', data);
  }
}
