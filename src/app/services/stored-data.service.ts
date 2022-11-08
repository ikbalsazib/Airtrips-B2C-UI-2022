import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AdminRoleData} from '../interfaces/admin-role-data';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';
import {Admin} from '../interfaces/admin';
import {UserDataService} from './user-data.service';
import {AdminDataService} from './admin-data.service';


const API_ADMIN = environment.apiBaseLink + '/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class StoredDataService {

  private adminRoleData?: AdminRoleData;
  private adminData?: Admin;


  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private adminDataService: AdminDataService,
  ) {
  }


  public setAdminData(admin: Admin) {
    this.adminData = admin;
  }


  /**
   * Get Logged In Admin Role
   */
  getLoginAdminRole(): Observable<{ data: Admin }> {
    return new Observable((observer) => {
      if (this.adminData) {
        observer.next({data: this.adminData});
        observer.complete();
      } else {
        this.adminDataService.getLoginAdminInfo('role').subscribe((res) => {
          this.adminData = res.data;
          observer.next({data: this.adminData});
          observer.complete();
        }, error => {
          console.log(error);
        });
      }

    });
  }

  /**
   * CHECK ACCESS
   */

  checkRoleAccess(currentPage: string): boolean {
    const roleData = this.storageService.adminRoleFromLocal;
    console.log(roleData);
    let hasAccess = false;
    let i;
    for (i = 0; i < roleData.access.length; i++) {
      if (roleData.access[i].page === currentPage) {
        hasAccess = true;
        break;
      }
    }
    return hasAccess;
  }


  /**
   * ALL CAROUSEL
   */
  // getAllCarousel(): Observable<{ data: Carousel[] }> {
  //   return new Observable((observer) => {
  //     if (this.carousel) {
  //       observer.next(this.carousel);
  //       observer.complete();
  //     } else {
  //       this.http.get<{ data: Carousel[] }>(API_URL_SHOP + 'get-all-carousel').subscribe(res => {
  //         this.carousel = res;
  //         observer.next(this.carousel);
  //         observer.complete();
  //       }, error => {
  //         console.log(error);
  //       });
  //     }
  //
  //   });
  // }


}
