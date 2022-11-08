import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PromotionOffer} from '../interfaces/promotion-offer';

const API_PROMOTION_OFFER = environment.apiBaseLink + '/api/promotion-offer/';


@Injectable({
  providedIn: 'root'
})
export class PromotionOfferService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  /**
   * PromotionOffer
   */
  addPromotionOffer(data: PromotionOffer) {
    return this.httpClient.post<{message: string}>(API_PROMOTION_OFFER + 'add-promotion-offer', data);
  }

  getAllPromotionOffers() {
    return this.httpClient.get<{data: PromotionOffer[], message?: string}>(API_PROMOTION_OFFER + 'get-all-promotion-offers');
  }

  getPromotionOfferById(id: string) {
    return this.httpClient.get<{data: PromotionOffer, message?: string}>(API_PROMOTION_OFFER + 'get-promotion-offer-by-promotion-offer-id/' + id);
  }

  getPromotionOfferBySlug(slug: string) {
    return this.httpClient.get<{ data: PromotionOffer, message: string }>(API_PROMOTION_OFFER + 'get-single-promotion-offer-by-slug/' + slug);
  }

  editPromotionOfferData(data: PromotionOffer) {
    return this.httpClient.put<{message?: string}>(API_PROMOTION_OFFER + 'edit-promotion-offer-by-promotion-offer', data);
  }

  deletePromotionOfferById(id: string) {
    return this.httpClient.delete<{message?: string}>(API_PROMOTION_OFFER + 'delete-promotion-offer-by-id/' + id);
  }
}
