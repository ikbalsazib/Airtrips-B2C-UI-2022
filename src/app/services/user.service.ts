import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UiService} from './ui.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {User} from '../interfaces/user';
import {DATABASE_KEY} from '../core/utils/global-variable';
import {NgxSpinnerService} from 'ngx-spinner';
// import firebase from 'firebase';
// import {AngularFireAuth} from '@angular/fire/auth';

// import auth = firebase.auth;

const API_USER = environment.apiBaseLink + '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: string;
  private isUser = false;
  private userStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  /**
   * USER REGISTRATION
   */

  // AuthLogin(provider, loginType: string) {
  //   return this.afAuth.signInWithPopup(provider)
  //     .then((credential) => {
  //       const user: User = {
  //         name: credential.user.displayName,
  //         username: credential.user.uid,
  //         password: null,
  //         phoneNo: credential.user.phoneNumber,
  //         profileImg: credential.user.phoneNumber,
  //         isPhoneVerified: false,
  //         isEmailVerified: false,
  //         email: credential.user.email,
  //         hasAccess: true,
  //         registrationType: loginType,
  //       };
  //       this.firebaseLoginWithMongo(user);
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }


  userRegistration(data: User, redirectForm?: string, restoreQuery?: object) {
    this.httpClient.post<{ success: boolean, message: string, token: string, expiredIn: number }>(API_USER + 'registration', data)
      .subscribe(res => {
        this.spinner.hide();
        if (res.success) {
          this.token = res.token;
          this.onSuccessLogin(res.token, res.expiredIn, redirectForm, restoreQuery, true);
        } else {
          this.uiService.wrong(res.message);
          this.isUser = false;
          this.userStatusListener.next(false);
        }
      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        this.spinner.hide();
      });
  }

  userLogin(data: { username: string, password: string }, redirectFrom?: string, restoreQuery?: object) {

    this.httpClient.put<{ success: boolean, message: string, token: string, expiredIn: number }>(API_USER + 'login', data)
      .subscribe(response => {
        this.spinner.hide();
        if (response.success) {
          this.token = response.token;
          // Make User Auth True..
          this.onSuccessLogin(response.token, response.expiredIn, redirectFrom, restoreQuery);
        } else {
          this.uiService.wrong(response.message);
          this.isUser = false;
          this.userStatusListener.next(false);
        }
      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        this.spinner.hide();
      });
  }


  /**
   * FACEBOOK LOGIN
   */

  // FacebookAuthWithSocialAuth(): void {
  //   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
  //     .then(m => {
  //       const user: User = {
  //         name: m.name,
  //         username: m.id,
  //         password: null,
  //         phoneNo: null,
  //         profileImg: m.photoUrl,
  //         isPhoneVerified: false,
  //         isEmailVerified: false,
  //         email: m.email ? m.email : null,
  //         hasAccess: true,
  //         registrationType: 'facebook',
  //       };
  //       // console.log('user', user);
  //       this.firebaseLoginWithMongo(user);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }


  GoogleAuth() {
    // return this.AuthLogin(new auth.GoogleAuthProvider(), 'google');
  }


  // GoogleAuthWithSocialAuth(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(m => {
  //       console.log("i am here")
  //       const user: User = {
  //         fullName: m.name,
  //         username: m.id,
  //         password: null,
  //         phoneNo: null,
  //         profileImg: m.photoUrl,
  //         isPhoneVerified: false,
  //         isEmailVerified: false,
  //         email: m.email ? m.email : null,
  //         hasAccess: true,
  //         registrationType: 'google',
  //       };
  //       console.log('user', user);
  //       this.firebaseLoginWithMongo(user);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }


  firebaseLoginWithMongo(credential: User) {
    this.httpClient.post<{ token: string, expiredIn: number }>(API_USER + 'firebase-login', credential)
      .subscribe(res => {
        console.log(res)
        const getToken = res.token;
        this.token = getToken;
        // Make User Auth True..
        if (getToken) {
          this.onSuccessLogin(getToken, res.expiredIn);
        }
      }, (error) => {
        this.isUser = false;
        this.userStatusListener.next(false);
        console.log(error);
      });
  }

  /**
   * ON SUCCESS LOGIN
   */

  private onSuccessLogin(
    token: string,
    expiredIn: number,
    redirectFrom?: string,
    restoreQuery?: object,
    fromRegistration?: boolean
  ) {
    this.isUser = true;
    this.userStatusListener.next(true);

    // For Token Expired Time..
    const expiredInDuration = expiredIn;
    this.setSessionTimer(expiredInDuration);

    // Save Login Time & Expiration Time & Token to Local Storage..
    const now = new Date();
    const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);
    this.saveUserData(token, expirationDate);

    // Snack bar..
    this.uiService.success('Welcome! Login Success.');
    // Spinner
    this.spinner.hide();

    // Navigate with Auth..
    if (redirectFrom) {
      this.router.navigate([redirectFrom], {
        queryParams: restoreQuery ? restoreQuery : null,
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate([environment.userBaseUrl]);
    }
  }

  /**
   * FACEBOOK LOGIN
   */

  // AuthLogin(provider) {
  //   return this.afAuth.signInWithPopup(provider)
  //     .then((credential) => {
  //       const user: User = {
  //         name: credential.user.displayName,
  //         username: credential.user.uid,
  //         password: null,
  //         phoneNo: credential.user.phoneNumber,
  //         profileImg: credential.user.phoneNumber,
  //         isPhoneVerified: false,
  //         email: credential.user.email,
  //         address: null,
  //         hasAccess: true,
  //         registrationType: 'facebook',
  //         isEmailVerified: false
  //       };
  //       this.facebookLoginWithMongo(user);
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }

  // FacebookAuth() {
  //   return this.AuthLogin(new auth.FacebookAuthProvider());
  // }


  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  facebookLoginWithMongo(credential: User) {
    this.httpClient.post<{ token: string, expiredIn: number }>(API_USER + 'facebook-login', credential)
      .subscribe(res => {
        const getToken = res.token;
        this.token = getToken;
        // Make User Auth True..
        if (getToken) {
          this.onSuccessLogin(getToken, res.expiredIn);
        }
      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        // console.log(error);
      });
  }


  /**
   * User Auto Login
   */
  autoUserLoggedIn() {
    const authInformation = this.getUserData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expiredDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.userStatusListener.next(true);
      this.isUser = true;
      this.setSessionTimer(expiresIn / 10000);
    }
  }

  /**
   * AUTH SESSION
   * SAVE USER DATA
   * CLEAR USER DATA
   */

  private setSessionTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
    }, duration * 1000);
  }

  protected saveUserData(token: string, expiredDate: Date) {
    localStorage.setItem(DATABASE_KEY.loginToken, token);
    localStorage.setItem(DATABASE_KEY.loggInSession, expiredDate.toISOString());
  }

  protected getUserData() {
    const token = localStorage.getItem(DATABASE_KEY.loginToken);
    const expirationDate = localStorage.getItem(DATABASE_KEY.loggInSession);

    if (!token && !expirationDate) {
      return '';
    }
    return {
      token,
      expiredDate: new Date(expirationDate)
    };
  }

  protected clearUserData() {
    localStorage.removeItem(DATABASE_KEY.loginToken);
    localStorage.removeItem(DATABASE_KEY.loggInSession);
  }


  /**
   * MIDDLEWARE OF AUTH STATUS
   */
  getUserToken() {
    return this.token;
  }

  getUserStatusListener() {
    return this.userStatusListener.asObservable();
  }

  getUserStatus() {
    return this.isUser;
  }


  /**
   * User Logout
   */
  userLogOut() {
    this.token = null;
    this.isUser = false;
    // this.socialAuthService.authState.subscribe((user) => {
    //   if (user) {
    //     this.socialAuthService.signOut();
    //   }
    // });
    // this.afAuth.signOut();
    this.userStatusListener.next(false);

    // Clear Token from Storage..
    this.clearUserData();
    // Clear The Token Time..
    clearTimeout(this.tokenTimer);
    // Navigate..
    this.router.navigate([environment.appBaseUrl]);
  }


  /**
   * CHECK USER PHONE
   */

  checkAndGetUserByPhone(phoneNo: string) {
    return this.httpClient.get<{ data: boolean, message: string }>(API_USER + 'check-user-by-phone/' + phoneNo);
  }

  editPassword(data: any) {
    return this.httpClient.post<{ message: string }>(API_USER + 'edit-password', data);
  }

  updatePassword(data: object) {
    return this.httpClient.post<{ message: string }>(API_USER + 'update-password', data);
  }


}
