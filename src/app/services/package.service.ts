import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interfaces/pagination';
const API_PACKAGE=environment.apiBaseLink + '/api/package/';
@Injectable({
  providedIn: 'root'
})
export class PackageService {



  constructor(
    private httpClient: HttpClient,
    // private router: Router,
    // private uiService: UiService,
    // private storageService: StorageService,
    // private spinner: NgxSpinnerService,
  ) {
  }


  addPackage(data: any) {
    console.log("service",data);
    return this.httpClient.post<{ message: string }>(API_PACKAGE + 'add-package', data);
  }
  getAllPackage(paginate: Pagination,) {
    return this.httpClient.post<{ data: any[],count:number }>(API_PACKAGE + 'get-all-packages',{paginate});
  }

  deletePackageById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_PACKAGE + 'delete-package-by-id/' + id);
  }

  getSinglePackageById(id: string) {
    return this.httpClient.get<{ data: any }>(API_PACKAGE + 'get-single-package-by-id/' + id);
  }
  getSinglePackageBySlug(slug: string) {
    return this.httpClient.get<{ data: any; message: string }>(
      API_PACKAGE + 'get-single-package-by-slug/' + slug
    );
  }

  editPackageById(data: any) {
    return this.httpClient.put<{ message: string }>(API_PACKAGE + 'edit-package-by-id', data);
  }

}
