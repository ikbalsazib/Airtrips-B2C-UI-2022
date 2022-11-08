import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {OrderListComponent} from './order-list/order-list.component';
import {MyBookingComponent} from './my-booking/my-booking.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {path: '', redirectTo: 'basic-info', pathMatch: 'full'},
      {path: 'basic-info', component: BasicInfoComponent},
      {path: 'my-booking', component: MyBookingComponent},
      {path: 'order-list', component: OrderListComponent},
      {path: 'transactions', component: TransactionsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
