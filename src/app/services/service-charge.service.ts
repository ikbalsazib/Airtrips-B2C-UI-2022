import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceCharge } from '../interfaces/service-charge';

const API_SERVICE_CHARGE = environment.apiBaseLink + '/api/service-charge/';

@Injectable({
  providedIn: 'root'
})
export class ServiceChargeService {

  constructor(
    private http: HttpClient
  ) {

  }

  getCharge(){
    return this.http.get<{ data: ServiceCharge, message: string }>(API_SERVICE_CHARGE + 'get-service-charge');
  }
  addCharge(data : ServiceCharge){
    return this.http.post<{ data: ServiceCharge, message: string }>(API_SERVICE_CHARGE + 'add-service-charge', data);
  }
  editCharge(data : ServiceCharge){
    return this.http.put<{ data: ServiceCharge, message: string }>(API_SERVICE_CHARGE + 'edit-service-charge', data);
  }
}
