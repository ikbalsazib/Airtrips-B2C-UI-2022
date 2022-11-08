import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pagination } from 'src/app/interfaces/pagination';
import { TravelCard } from 'src/app/interfaces/travel-card';
import { RecomandedDestinationService } from 'src/app/services/recomanded-destination.service';

@Component({
  selector: 'app-all-travel',
  templateUrl: './all-travel.component.html',
  styleUrls: ['./all-travel.component.scss']
})
export class AllTravelComponent implements OnInit {
  private subAcRoute: Subscription;
// Pagination
currentPage = 1;
totalProducts = 0;
productsPerPage = 3;
totalProductsStore = 0;
  constructor(
    private recomandedDestinationService:RecomandedDestinationService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam['page']) {
        this.currentPage = qParam['page'];
      } else {
        this.currentPage = 1;
      }
      /* if (!this.searchProducts.length) {
        this.getAllProducts();
      } */
      this.getAllRecomandedDestination()
    });
    this.getAllRecomandedDestination()
  }

    /**** Travel Data */
    travelData:TravelCard[]=[]
    getAllRecomandedDestination(){
      const pagination: Pagination = {
        pageSize: this.productsPerPage.toString(),
        currentPage: this.currentPage.toString()
      };
      this.recomandedDestinationService.getAllRecomandedDestination(pagination)
      .subscribe(res=>{
        this.travelData=res.data;
        this.totalProducts = res.count;
        this.totalProductsStore = res.count;
      })
    }
     /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }
  /**
   * ON DESTROY
   */
   ngOnDestroy() {

    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }
}
