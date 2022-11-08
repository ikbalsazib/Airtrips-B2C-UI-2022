import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDataService} from 'src/app/services/user-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs';
import {Pagination} from '../../../../interfaces/pagination';
import {OrderStatus} from '../../../../enum/order-status';
import {Order} from '../../../../interfaces/order';
import {OrderService} from '../../../../services/order.service'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  private subAcRoute: Subscription;

  public orderEnum = OrderStatus;

  userOrder: Order[] | any = [];

  airTicket: any[] = [
    "47854933801389",
    "34870516830304",
    "91284568986028",
    "35207159132119",
    "68990148967220",
    "50685870113461",
    "88049032378844",
    "50336446326683",
    "72965711841822",
    "43353938497518"
  ];

  bookingDate: any[] = [
    "27-05-2022",
    "28-05-2022",
    "29-05-2022",
    "30-05-2022",
    "31-05-2022",
    "01-06-2022",
    "02-06-2022",
    "03-06-2022",
    "04-06-2022",
    "05-06-2022",
    "06-06-2022",
    "07-06-2022",
    "08-06-2022",
    "09-06-2022",
    "10-06-2022",
    "11-06-2022",
  ];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 10;
  totalProductsStore = 0;

  constructor(
    private userDataService: UserDataService,
    private orderService: OrderService,
    private storageService: StorageService,
    // private launchBookingService: LaunchBookingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam['page']) {
        this.currentPage = qParam['page'];
      } else {
        this.currentPage = 1;
      }
      this.getOrderListByUser();
    });


    // const ticket_purchase = this.storageService.getDataFromSession('TICKET_PURCHASE');
    // console.log('ticket_purchase',ticket_purchase);
    // let dt=new Date()
    // this.userOrder = [{
    //   departFrom: ticket_purchase.departInfo.depCityFrom,
    //   departTo: ticket_purchase.departInfo.depCityTo,
    //   returnCityFrom: ticket_purchase.returnInfo.returnCityFrom,
    //   returnCityTo:ticket_purchase.returnInfo.returnCityTo,
    //   customerName:ticket_purchase.name,
    //   departFlight:ticket_purchase.departTicket.departingFlightNum,
    //   flightDate:ticket_purchase.departInfo.depWeekDay+" "+ticket_purchase.departInfo.depDate+" "+dt.getFullYear()
    // }]
  }


  private getOrderListByUser() {
    //this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.orderService.getAllOrdersByUser(pagination)
      .subscribe(res => {
        this.userOrder = res.data;
        console.log("userOrder",this.userOrder)
        this.totalProducts = res.count;
      }, error => {
        console.log(error);
      });
  }


  /**
   * PAGINATION CHANGE
   */
   public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }

  /**
   * NG CLASS
   */
  // getDeliveryStatusColor(order: Order) {
  //   switch (order.deliveryStatus) {

  //     case this.orderEnum.CANCEL: {
  //       return 'cancel';
  //     }
  //     case this.orderEnum.PROCESSING: {
  //       return 'processing';
  //     }
  //     case this.orderEnum.CONFIRM: {
  //       return 'confirm';
  //     }
  //     case this.orderEnum.DELIVERED: {
  //       return 'delivered';
  //     }
  //     case this.orderEnum.REFUND: {
  //       return 'refund';
  //     }
  //     case this.orderEnum.SHIPPING: {
  //       return 'shipping';
  //     }
  //     default: {
  //       return 'none';
  //     }
  //   }
  // }
  /**
   * ON DESTROY
   */
  ngOnDestroy() {

    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }

}
