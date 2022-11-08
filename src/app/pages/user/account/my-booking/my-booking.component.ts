import { OrderService } from './../../../../services/order.service';
import { Pagination } from './../../../../interfaces/pagination';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SortPipe} from "../../../../shared/pipes/sort.pipe";
import {UtilsService} from "../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Subscription} from "rxjs";
import {Select} from "../../../../interfaces/select";
import {ALL_HOSTS} from "../../../../core/utils/app-data";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UiService} from "../../../../services/ui.service";
import {ReloadService} from "../../../../services/reload.service";
import {debounceTime, distinctUntilChanged, pluck} from "rxjs/operators";
import {UserDataService} from "../../../../services/user-data.service";
import {User} from "../../../../interfaces/user";
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss'],
  providers: [SortPipe]
})
export class MyBookingComponent implements OnInit, OnDestroy {
  // Static Data
  allHosts: Select[] = ALL_HOSTS;
  // Store Data
  user: User;
  launchSharedTickets: any[] = [];
  // holdPrevData: LaunchTicketShared[] = [];
  filterDates: Select[] = [];
  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 10;
  totalProductsStore = 0;
  // SEARCH AREA
  // searchProducts: LaunchTicketShared[] = [];
  searchQuery = null;
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('searchInput') searchInput: ElementRef;
  // Sort
  activeSort: number = null;
  // Filter
  activeFilter: number = null;
  activeFilterDate: number = null;
  // Subscriptions
  private subReload: Subscription;
  private subAcRoute: Subscription;
  private subForm: Subscription;
  private subDataOne: Subscription;
  private refreshData: Subscription;


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

  airLines: any[] = [
    "Novair",
    "US-Bangla Airlines",
    "Turkish Airlines",
    "Biman Bangladesh",
    "Emirates",
    "US-Bangla Airlines",
    "Turkish Airlines",
    "Biman Bangladesh",
    "Novair",
    "Emirates",
  ]

  bookingStatus: any[] = [
    "Booked",
    "Confirmed",
    "Processing",
    "Pending",
    "Processing",
    "On Hold",
    "Booked",
    "Confirmed",
    "Processing",
    "Pending",
    "Processing",
    "On Hold",
  ]


  expiringDate: any[] = [
    "27-06-2022",
    "28-06-2022",
    "29-06-2022",
    "30-06-2022",
    "31-06-2022",
    "01-06-2022",
    "02-07-2022",
    "03-07-2022",
    "04-07-2022",
    "05-07-2022",
    "06-07-2022",
    "07-07-2022",
    "08-07-2022",
    "09-07-2022",
    "10-07-2022",
    "11-07-2022",
  ];

  constructor(
    private dialog: MatDialog,
    // private launchTicketService: LaunchTicketService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
    // private sortPipe: SortPipe,
    private utilsService: UtilsService,
    private userDataService: UserDataService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {

    this.getOrderListByUser();
    this.subReload = this.reloadService.refreshData$.subscribe(() => {
      this.getSharedLaunchTickets();
    });
    this.getLoggedInUserInfo();

  }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    formValue.pipe(
      // map(t => t.searchTerm)
      // filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(data => {
      this.searchQuery = data;

      if (this.searchQuery === '' || this.searchQuery === null) {
        // this.searchProducts = [];
        // this.launchSharedTickets = this.holdPrevData;
        this.totalProducts = this.totalProductsStore;
        this.searchQuery = null;
      } else {
        const options: { caseSensitive: boolean, includedKeys: string[] } = {
          caseSensitive: false,
          includedKeys: ['ticketNo', 'phoneNo'],
        }

        const customFind = (collection: any[], term: string, opts: { caseSensitive: boolean, includedKeys: string[] }) => {
          const filterBy = () => {
            const searchTerms = (!opts.caseSensitive) ? new RegExp(term, 'i') : new RegExp(term)
            return (obj) => {
              for (const key of Object.keys(obj)) {
                if (searchTerms.test(obj[key]) &&
                  opts.includedKeys.includes(key)) return true
              }
              return false
            }
          }
          return collection.filter(filterBy())
        }

        // this.launchSharedTickets = customFind(this.holdPrevData, this.searchQuery, options)

      }
    })
  }


  private getOrderListByUser() {
    //this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.orderService.getAllBookingByUser(pagination)
      .subscribe(res => {
        this.userOrder = res.data;
        this.totalProducts = res.count;
      }, error => {
        console.log(error);
      });
  }


  /**
   * SORTING
   */
  sortData(query: any, type: number) {
    this.activeSort = type;
    // this.launchSharedTickets = this.sortPipe.transform(this.launchSharedTickets, 'name')
  }

  /**
   * Filtering
   */
  filterData(data: string, index: number) {
    this.activeFilter = index;
    // this.launchSharedTickets = this.holdPrevData.filter(m => m.hostname === data)
  }

  filterDataByDate(data: string, index: number) {
    this.activeFilterDate = index;
    // this.launchSharedTickets = this.holdPrevData.filter(m => m.journeyDateString === data)
  }

  /**
   * ON REMOVE ALL QUERY
   */

  onRemoveAllQuery() {
    this.activeSort = null;
    this.activeFilter = null;
    this.activeFilterDate = null;
    // this.launchSharedTickets = this.holdPrevData;
  }

  /**
   * ON DESTROY
   */

  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }

    if (this.subReload) {
      this.subReload.unsubscribe();
    }

    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }

    if (this.subForm) {
      this.subForm.unsubscribe();
    }
    if (this.refreshData) {
      this.refreshData.unsubscribe();
    }
  }

  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: number) {
    this.currentPage = event
  }


  /**
   * HTTP REQ HANDLE
   */

  private getLoggedInUserInfo() {
    this.userDataService.getLoggedInUserInfo('name')
      .subscribe(res => {
        this.user = res.data;
        if (this.user) {
          // GET Data
          this.getSharedLaunchTickets();
        }
      }, error => {
        console.log(error)
      })
  }

  private getSharedLaunchTickets() {
    this.spinner.show();
    const select = 'name hostname';
    const filter = {user: this.user._id, journeyDate: {'$gte': this.utilsService.getDateString(new Date())}}
    const query = {
      filter,
      select: null,
      sort: null
    }
    // this.subDataOne = this.launchTicketService.getSharedLaunchTickets(query)
    //   .subscribe(res => {
    //     this.spinner.hide();
    //     this.launchSharedTickets = res.data;
    //     this.holdPrevData = res.data;
    //     this.totalProducts = this.holdPrevData.length;
    //     this.totalProductsStore = this.holdPrevData.length;
    //     // Other Actions
    //     this.buildDateFilterArray();
    //   }, error => {
    //     this.spinner.hide();
    //     console.log(error);
    //   });
  }


  /**
   * DATE FILTER ARRAY CREATE
   */

  private buildDateFilterArray() {
    // const dates = this.launchSharedTickets.map(m => {
    //   return {
    //     viewValue: m.journeyDateString,
    //     value: m.journeyDateString,
    //   }
    // });

    // this.filterDates = this.utilsService.uniqueArrayValues(dates, 'value');
  }


}
