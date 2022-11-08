import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interfaces/pagination';
import { StorageService } from './storage.service';
import { UiService } from './ui.service';
const API_RECOAMNDED_DESTINATION=environment.apiBaseLink + '/api/recoamnded-destination/';
@Injectable({
  providedIn: 'root'
})
export class RecomandedDestinationService {



  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) {
  }


  addRecomandedDestination(data: any) {
    console.log(data);
    return this.httpClient.post<{ message: string }>(API_RECOAMNDED_DESTINATION + 'add-recomanded-destination', data);
  }
  getAllRecomandedDestination(paginate: Pagination,) {
    return this.httpClient.post<{ data: any[],count:number }>(API_RECOAMNDED_DESTINATION + 'get-all-recomanded-destinations',{paginate});
  }

  deleteRecomandedDestinationById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_RECOAMNDED_DESTINATION + 'delete-recomanded-destination-by-id/' + id);
  }

  getSingleRecomandedDestinationById(id: string) {
    return this.httpClient.get<{ data: any }>(API_RECOAMNDED_DESTINATION + 'get-single-recomanded-destination-by-id/' + id);
  }

  editRecomandedDestinationById(data: any) {
    return this.httpClient.put<{ message: string }>(API_RECOAMNDED_DESTINATION + 'edit-recomanded-destination-by-id', data);
  }
}
