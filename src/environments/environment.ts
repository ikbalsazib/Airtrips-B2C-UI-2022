// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'airtrips.net',
  suroviHostname: 'airtrips.net',

  apiBaseLink: 'https://api.airtrips.net',
  ftpBaseLink: 'https://api.airtrips.net',

  suroviBaseLink: 'http://localhost:4501',
  appBaseUrl: '/',
  userBaseUrl: '/account',
  userLoginUrl: '/login',
  adminLoginUrl: 'admin/login',
  adminBaseUrl: 'admin',
  sslIpnUrl: 'https://api.airtrips.net/api/payment-ssl/ipn',
  sslIpnUrl2: 'https://api.airtrips.net/api/payment-ssl/ipn2',

  bulkSmsUsername: 'global10',
  bulkSmsPassword: 'X68NRGW4',

  smsTokenSecret: 'SOFT_ADMIN_1995_&&_SOJOL_pRod',

  firebaseConfig: {
    apiKey: "AIzaSyD10w3L1kpOTHCk06NUSbWsveFQO2d9RvE",
    authDomain: "airtrips--auth.firebaseapp.com",
    projectId: "airtrips--auth",
    storageBucket: "airtrips--auth.appspot.com",
    messagingSenderId: "948770485884",
    appId: "1:948770485884:web:a56ea533720517a9b17bf9"
  },
  VERSION: 1,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
