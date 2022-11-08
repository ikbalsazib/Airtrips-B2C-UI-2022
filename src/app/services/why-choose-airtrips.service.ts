import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { UiService } from './ui.service';
const API_WHY_CHOOSE_AIRTRIPS=environment.apiBaseLink + '/api/why-choose-airtrips/';
@Injectable({
  providedIn: 'root'
})
export class WhyChooseAirtripsService {



  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) {
  }


  addWhyChooseAirtrips(data: any) {
    console.log(data);
    // return this.httpClient.post<{ message: string }>(API_WHY_CHOOSE_AIRTRIPS + 'add-why-choose-airtrips', data);
    return this.httpClient.post<{ message: string }>(API_WHY_CHOOSE_AIRTRIPS + 'add-single-why-choose-airtrips', data);
  }
  getAllWhyChooseAirtrips() {
    return this.httpClient.get<{ data: any[] }>(API_WHY_CHOOSE_AIRTRIPS + 'get-all-why-choose-airtrips');
  }

  deleteWhyChooseAirtripsById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_WHY_CHOOSE_AIRTRIPS + 'delete-why-choose-airtrips-by-id/' + id);
  }

  getSingleWhyChooseAirtripsById(id: string) {
    return this.httpClient.get<{ data: any }>(API_WHY_CHOOSE_AIRTRIPS + 'get-single-why-choose-airtrips-by-id/' + id);
  }

  editWhyChooseAirtripsById(data: any) {
    return this.httpClient.put<{ message: string }>(API_WHY_CHOOSE_AIRTRIPS + 'edit-single-why-choose-airtrips', data);
  }
}
