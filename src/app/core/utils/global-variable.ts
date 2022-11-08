import { environment } from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  loginToken: 'JABO_TOKEN_' + environment.VERSION,
  loggInSession: 'JABO_SESSION_' + environment.VERSION,
  loginTokenAdmin: 'JABO_ADMIN_TOKEN_' + environment.VERSION,
  loginAdminRole: 'JABO_ADMIN_ROLE_' + environment.VERSION,
  loggInSessionAdmin: 'JABO_ADMIN_SESSION_' + environment.VERSION,
  airImperialResponseKey: 'AIR_IMPERIAL_RES',
  airImperialBookDataKey: 'AIR_IMPERIAL_BOOK_DATA',
  launchTrip: 'JABO_LAUNCH_TRIP',
  adminRoleData: 'JABO_ADMIN_ROLE_' + environment.VERSION,
  LaunchSearchData: 'JABO_LAUNCH_SEARCH_DATA',
  userCoupon: 'JABO_LAUNCH_USER_COUPON_' + environment.VERSION,
  userCart: 'RONE_USER_CART_' + environment.VERSION,
  airTripInfo: 'AIRTRIPS_TRIP_INFO' + environment.VERSION,
});
