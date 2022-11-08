import {Component} from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { Pagination } from 'src/app/interfaces/pagination';
import { OrderService } from 'src/app/services/order.service';
import {SortPipe} from "../../../../shared/pipes/sort.pipe";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [SortPipe]
})
export class TransactionsComponent {


  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 10;
  totalProductsStore = 0;

  userOrder: Order[] | any = [];

  constructor(
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.getOrderListByUser()
  }

  private getOrderListByUser() {
    //this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.orderService.getAllTransactionByUser(pagination)
      .subscribe(res => {
        this.userOrder = res.data;
        this.totalProducts = res.count;
        console.log(res.data)
      }, error => {
        console.log(error);
      });
  }

}
