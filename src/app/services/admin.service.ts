import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UiService} from './ui.service';
import {Admin} from '../interfaces/admin';
import {DATABASE_KEY} from '../core/utils/global-variable';
import {StorageService} from './storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AdminRoleEnum} from '../enum/admin-role.enum';

const API_URL_ADMIN = environment.apiBaseLink + '/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private token: string;
  private isAdmin = false;
  private adminRole: string = null;
  private adminStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private storedService: StorageService,
    private spinner: NgxSpinnerService,
  ) {
  }


  // For New User Registration..
  adminRegistration(adminRegData: Admin) {
    return this.httpClient.post<{ adminId: string, message: string }>(API_URL_ADMIN + 'registration', adminRegData);
  }

  // For Login User..
  adminLogin(data: any) {

    this.httpClient.put<{success: boolean, message: string, token: string, expiredIn: number, adminId: string, role: string }>(API_URL_ADMIN + 'login', data)
      .subscribe(response => {
        if (response.success) {
          this.spinner.hide();
          const getToken = response.token;
          this.token = getToken;
          // Make User Auth True..
          if (getToken) {
            this.isAdmin = true;
            this.adminRole = response.role;
            this.adminStatusListener.next(true);
            // For Token Expired Time..
            const expiredInDuration = response.expiredIn;
            this.setSessionTimer(expiredInDuration);
            // Save Login Time & Expiration Time & Token to Local Storage..
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);
            // Store to Local
            this.saveAdminData(getToken, expirationDate, response.role);
            this.spinner.hide();
            // Snack bar..
            this.uiService.success('Login Success!');
            // Navigate..
            if (response.role === AdminRoleEnum.COUNTER) {
              this.router.navigate([environment.adminBaseUrl, 'launch-booking', 'search-tickets']);
            } else {
              this.router.navigate([environment.adminBaseUrl]);
            }
          }
        } else {
          this.spinner.hide();
          this.uiService.wrong(response.message);
          this.isAdmin = false;
          this.adminStatusListener.next(false);
        }
      }, error => {
        this.spinner.hide();
        this.adminStatusListener.next(false);
        // console.log(error);
      });
  }


  // That will Be Call First on Main App Component For Auto Login..
  autoAdminLoggedIn() {
    const authInformation = this.getAdminData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expiredDate.getTime() - now.getTime();
    // console.log(authInformation, expiresIn);
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.adminStatusListener.next(true);
      this.isAdmin = true;
      this.adminRole = authInformation.adminRole;
      this.setSessionTimer(expiresIn / 10000);
      // this.router.navigate(['admin/dashboard']);
    }
  }


  // Admin LogOut..
  adminLogOut() {
    this.token = null;
    this.isAdmin = false;
    this.adminRole = null;
    this.adminStatusListener.next(false);
    // Clear Token from Storage..
    this.clearAdminData();
    // Clear The Token Time..
    clearTimeout(this.tokenTimer);
    // Navigate..
    this.router.navigate([environment.adminLoginUrl]);
  }


  // User Update Listener..
  // getUserUpdateListener() {
  //   return this.userUpdated.asObservable();
  // }

  // For Set Time Duration in ms..
  private setSessionTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      // this.userLogOut();
    }, duration * 1000); // 1s = 1000ms
    // console.log('Setting Time: ' + duration);
  }

// For Save Token on Browser Storage..
  protected saveAdminData(token: string, expiredDate: Date, role: string) {
    localStorage.setItem(DATABASE_KEY.loginTokenAdmin, token);
    localStorage.setItem(DATABASE_KEY.loggInSessionAdmin, expiredDate.toISOString());
    localStorage.setItem(DATABASE_KEY.loginAdminRole, role);
  }

  // For Clear Token on Browser Storage..
  protected clearAdminData() {
    localStorage.removeItem(DATABASE_KEY.loginTokenAdmin);
    localStorage.removeItem(DATABASE_KEY.loggInSessionAdmin);
    localStorage.removeItem(DATABASE_KEY.loginAdminRole);
  }

  // Get Admin Data from Browser Storage..
  protected getAdminData() {
    const token = localStorage.getItem(DATABASE_KEY.loginTokenAdmin);
    const expirationDate = localStorage.getItem(DATABASE_KEY.loggInSessionAdmin);
    const adminRole = localStorage.getItem(DATABASE_KEY.loginAdminRole);

    if (!token && !expirationDate) {
      return;
    }
    return {
      token,
      expiredDate: new Date(expirationDate),
      adminRole
    };
  }

  // For Get Login Token..
  getAdminToken() {
    return this.token;
  }

  // For Get Auth status listener to Other..
  getAdminStatusListener() {
    return this.adminStatusListener.asObservable();
  }

  getAdminStatus() {
    return this.isAdmin;
  }

  getAdminRole() {
    return this.adminRole;
  }


}
