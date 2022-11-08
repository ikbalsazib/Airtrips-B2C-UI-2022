import {Component, ElementRef, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {StorageService} from '../../services/storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Order} from 'src/app/interfaces/order';
import {BkashPaymentInit} from 'src/app/interfaces/bkash.interface';

declare var $: any;
declare var bKash: any;

@Component({
  selector: 'app-pay-payment',
  templateUrl: './pay-payment.component.html',
  styleUrls: ['./pay-payment.component.scss'],
})
export class PayPaymentComponent implements OnInit, OnDestroy {
  userOrder: Order[] | any = [];

  //Subscription
  private subAcRoute: Subscription;
  private subTripService: Subscription;

  //Depart Ticket Click
  departTicket: any;


  //Cart Confirm
  isLoggedInUser: boolean = false;

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 2;
  totalProductsStore = 0;

  bookingId: any;
  //pay-payment
  amount: any;
  dataForm: FormGroup;

  // Bkash Button
  @ViewChild('bkashButton') bkashButton: ElementRef;

  // Store Data
  public bkashPaymentInit: BkashPaymentInit;
  request: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    /*** data Form */
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: [null],
    });
    // this.amount = sessionStorage.getItem('paymentAmount')
    // this.bookingId = sessionStorage.getItem('paymentBookingId') || 'FHB22052742148';

  }

  onSubmit() {

    console.log(this.dataForm.value)

    // Init Bkash Payment
    // this.initBkashPayment();
    // >>IMPORTANT<< Call Bkash Dialog through [bKash_button] ID
    // this.bkashButton.nativeElement.click();

  }


  /**
   * NG ON DESTROY
   */
  ngOnDestroy(): void {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subTripService) {
      this.subTripService.unsubscribe();
    }
  }

  /**
   * BKASH PAYMENT
   * initBkashPayment()
   */
  // private initBkashPayment() {
  //
  //   // Re Init Variables for Nested Function Access
  //   const bkashPaymentService = this.bkashPaymentService;
  //   let bkashPaymentInit = this.bkashPaymentInit;
  //   let router = this.router;
  //   let tripService = this.tripService;
  //   let amount = this.amount;
  //   let bookingId = this.bookingId;
  //
  //   bKash.init({
  //     paymentMode: 'checkout',
  //     paymentRequest: {
  //       amount: amount,
  //       intent: 'sale',
  //       currency: 'BDT',
  //       orderID: '0001',
  //       // merchantInvoiceNumber: '123456' // Will be the Order No
  //     },
  //
  //     createRequest: function (request) {
  //       bkashPaymentService.createPayment(request).subscribe(
  //         (res) => {
  //           bkashPaymentInit = res.data;
  //           if (bkashPaymentInit && bkashPaymentInit.paymentID) {
  //             bKash.create().onSuccess(bkashPaymentInit);
  //           } else {
  //             bKash.create().onError();
  //           }
  //         },
  //         (error) => {
  //           console.log(error)
  //           bKash.create().onError();
  //         }
  //       );
  //     }, // Create Payment with backend
  //
  //     executeRequestOnAuthorization: function () {
  //       $('#payment_status').val('');
  //       bkashPaymentService
  //         .executePayment(bkashPaymentInit.paymentID)
  //         .subscribe(
  //           (res) => {
  //             $('#close_button').click();
  //             const result = res.data;
  //             console.log('executeRequestOnAuthorization', result);
  //             if (result && result.paymentID) {
  //               $('#bKashFrameWrapper').fadeOut();
  //               // TODO Goto Success Page
  //               // TODO Call Backend API
  //               //Save to Database
  //               localStorage.setItem('paymentresult', JSON.stringify(result));
  //
  //               alert("Bkash Payment Successful")
  //               tripService.updateOrderStatus({bookingId:bookingId})
  //               .subscribe()
  //
  //               router.navigate(["/"])
  //
  //               //window.location.replace("http://localhost:4200/account/order-list");
  //               // tripService.updateOrderStatus({bookingId})
  //               // .subscribe(res => {
  //               //   console.log(res)
  //
  //               // })
  //
  //             } else {
  //               alert('Something went wrong');
  //               bKash.execute().onError();
  //             }
  //           },
  //           (error) => {
  //             console.log(error);
  //             bKash.execute().onError();
  //           }
  //         );
  //     }, // Execute Payment after bkash verification
  //     onClose: function () {
  //       alert('Payment Canceled');
  //     },
  //   });
  // }
}
