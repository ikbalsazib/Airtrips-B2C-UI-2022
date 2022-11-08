import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interfaces/pagination';
const API_PLACE=environment.apiBaseLink + '/api/place/';
@Injectable({
  providedIn: 'root'
})
export class RussiaService {



  constructor(
    private httpClient: HttpClient,
    // private router: Router,
    // private uiService: UiService,
    // private storageService: StorageService,
    // private spinner: NgxSpinnerService,
  ) {
  }


  addPlace(data: any) {
    console.log(data);
    return this.httpClient.post<{ message: string }>(API_PLACE + 'add-place', data);
  }
  getAllPlaces(paginate: Pagination,) {
    return this.httpClient.post<{ data: any[],count:number }>(API_PLACE + 'get-all-places',{paginate});
  }

  deletePlaceById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_PLACE + 'delete-place-by-id/' + id);
  }

  getSinglePlaceById(id: string) {
    return this.httpClient.get<{ data: any }>(API_PLACE + 'get-single-place-by-id/' + id);
  }
  getSinglePlaceBySlug(slug: string) {
    return this.httpClient.get<{ data: any; message: string }>(
      API_PLACE + 'get-single-place-by-slug/' + slug
    );
  }

  editPlaceById(data: any) {
    return this.httpClient.put<{ message: string }>(API_PLACE + 'edit-place-by-id', data);
  }

}
