import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {SslInit} from '../../../../../interfaces/ssl-init';
import {environment} from '../../../../../../environments/environment';
import {SslInitResponse} from '../../../../../interfaces/ssl-init-response';
import {UtilsService} from '../../../../../services/utils.service';
import {DOCUMENT} from '@angular/common';
import {PaymentSslService} from '../../../../../services/payment-ssl.service';
import {UiService} from '../../../../../services/ui.service';

@Component({
  selector: 'app-order-deatils',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  id: string;
  launchTicket:any;
  // Modified Data
  seatsString: any;

  // Payment
  currency = 'BDT';
  shippingMethod: 'Courier';
  shippingType = 'Courier';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    @Inject(DOCUMENT) private document: Document,
    private paymentSslService: PaymentSslService,
    private uiService: UiService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.getTicketById();
    });
  }

  private getTicketById() {
    this.spinner.show();

    // this.launchBookingService.getTicketById(this.id)
    //   .subscribe(res => {
    //     this.spinner.hide();
    //     this.launchTicket = res.data;
    //     this.seats = this.launchTicket.seats as LaunchSeat[];
    //     this.seatsString = this.seats.map(m => m.seatNo);
    //   }, error => {
    //     this.spinner.hide();
    //     console.log(error);
    //   });
  }

  /**
   * PAYMENT AGAIN
   */
  public sslInitWithOrder(orderId: string) {
    // const baseHost = this.utilsService.getHostBaseUrl();


    // const trip = this.launchTicket?.trip as LaunchTrip;
    // const schedule = trip.schedule as LaunchSchedule;
    // const from = trip.from as LaunchTerminal;
    // const to = trip.to as LaunchTerminal;
    // const launch = trip.launch as Launch;

    // const sslPaymentInit: SslInit = {
    //   store_id: null,
    //   store_passwd: null,
    //   total_amount: this.launchTicket?.totalAmount ? this.launchTicket.totalAmount : 0,
    //   currency: this.currency,
    //   tran_id: orderId,
    //   success_url: baseHost + '/callback/payment/success',
    //   fail_url: baseHost + '/callback/payment/fail',
    //   cancel_url: baseHost + '/callback/payment/cancel',
    //   ipn_url: environment.sslIpnUrl,
    //   shipping_method: 'Courier',
    //   num_of_item: 1,
    //   product_name: `${from.name} - ${to.name} at ${trip.dateString} - ${schedule.timeString}`,
    //   product_category: 'launch ticket',
    //   product_profile: 'general',
    //   cus_name: this.launchTicket?.name,
    //   cus_email: this.launchTicket?.email ? this.launchTicket?.email : 'nomail@gmail.com',
    //   cus_add1: this.launchTicket?.address ? this.launchTicket?.address : 'n/a',
    //   cus_add2: '',
    //   cus_city: from.name,
    //   cus_state: '',
    //   cus_postcode: 'n/a',
    //   cus_country: 'Bangladesh',
    //   cus_phone: this.launchTicket?.phoneNo,
    //   cus_fax: '',
    //   ship_name: launch.name,
    //   ship_add1: this.launchTicket?.address ? this.launchTicket?.address : 'n/a',
    //   ship_add2: '',
    //   ship_city: from.name,
    //   ship_state: '',
    //   ship_postcode: 'n/a',
    //   ship_country: 'Bangladesh',
    //   emi_option: 0,
    //   // multi_card_name: '',
    //   // ADDITIONAL DATA
    //   value_a: {test: 'aj'},
    //   // value_b: '',
    //   // value_c: '',
    //   // value_d: ''
    // };

    // console.log(sslPaymentInit);

    // this.paymentSslService.initSSLPayment(sslPaymentInit)
    //   .subscribe(res => {
    //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
    //     console.log(res.data);
    //     const sslInitResponse: SslInitResponse = res.data;
    //     const sessionkey = sslInitResponse.sessionkey;
    //     this.launchBookingService.updateTicketSessionKey(orderId, sessionkey)
    //       .subscribe(res3 => {
    //         const gatewayPageURL = sslInitResponse.GatewayPageURL;
    //         // window.open(gatewayPageURL);
    //         this.document.location.href = gatewayPageURL ? gatewayPageURL : '';
    //       }, error => {
    //         this.uiService.wrong('SSL Error! Please pay minimum amount 100');
    //       });

    //   }, error => {
    //     console.log(error);
    //   });
  }

}
