import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pages',
        loadChildren: () => import('./additional-page-view/additional-page-view.module').then(m => m.AdditionalPageViewModule),
        data: {preload: false, delay: false}
      },
      {
        path: 'all-travel',
        loadChildren: () =>
          import('./all-travel/all-travel.module').then(
            (m) => m.AllTravelModule
          ),
      },
      {
        path: 'blog-details/:slug',
        loadChildren: () =>
          import('./blog-details/blog-details.module').then(
            (m) => m.BlogDetailsModule
          ),
      },
      {
        path: 'country-details',
        loadChildren: () =>
          import('./country-details/country-details.module').then((m) => m.CountryDetailsModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(m => m.FAQModule)
      },
      {
        path: 'travel-details/:id',
        loadChildren: () =>
          import('./travel-details/travel-details.module').then(
            (m) => m.TravelDetailsModule
          ),
      },
      {
        path: 'visa-support',
        loadChildren: () =>
          import('./visa-support/visa-support.module').then((m) => m.VisaSupportModule),
      },
      {
        path: 'visa-support-details',
        loadChildren: () =>
          import('./visa-support-details/visa-support-details.module').then((m) => m.VisaSupportDetailsModule),
      },
      {
        path: 'russia-tour',
        loadChildren: () => import('./russia-tour/russia-tour.module').then(m => m.RussiaTourModule)
      },
      {
        path: 'search-result',
        loadChildren: () =>
          import('./search-result/search-result.module').then(
            (m) => m.SearchResultModule
          ),
      },
      {
        path: 'booking',
        // canActivate: [UserAuthGuard],
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
        data: {preload: false, delay: false},
      },
      {
        path: 'booking-confirmation',
        // canActivate: [UserAuthGuard],
        loadChildren: () =>
          import('./booking-confirmation/booking-confirmation.module').then(
            (m) => m.BookingConfirmationModule
          ),
        data: {preload: false, delay: false},
      },
      {
        path: 'pay-payment',
        loadChildren: () =>
          import('./pay-payment/pay-payment.module').then(
            (m) => m.PayPaymentModule
          ),
      },
      {
        path: 'password-recovery',
        loadChildren: () =>
          import('./password-recovery/password-recovery.module').then(
            (m) => m.PasswordRecoveryModule
          ),
        data: { preload: false, delay: false },
      },
      {
        path: 'account',
        // canActivate: [UserAuthGuard],
        loadChildren: () =>
          import('./user/account/account.module').then((m) => m.AccountModule),
        data: { preload: false, delay: false },
      },
      {
        path: 'login',
        // canActivate: [UserAuthStateGuard],
        loadChildren: () =>
          import('./user/login/login.module').then((m) => m.LoginModule),
        data: { preload: false, delay: false },
      },
      {
        path: 'registration',
        // canActivate: [UserAuthStateGuard],
        loadChildren: () =>
          import('./user/registration/registration.module').then(
            (m) => m.RegistrationModule
          ),
        data: { preload: false, delay: false },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
