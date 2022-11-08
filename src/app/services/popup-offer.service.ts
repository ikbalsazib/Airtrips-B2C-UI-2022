import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PopupOffer} from '../interfaces/popup-offer';

const API_POPUP_OFFER = environment.apiBaseLink + '/api/popup-offer';

@Injectable({
  providedIn: 'root'
})
export class PopupOfferService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * SHOP INFO
   */

  addPopupOffer(data: PopupOffer) {

    console.log(data);
    return this.httpClient.post<{ message: string }>(API_POPUP_OFFER + '/add-popup-offer-info', data);

  }

  getPopupOffer() {
    /* const popupoffer={
      title:"New Offer",
    image: null,
    routerLink: '/offers'
    }
    return popupoffer; */
    return this.httpClient.get<{ data: PopupOffer, message?: string }>(API_POPUP_OFFER + '/get-all-popup-offer-info');
  }

  updatePopupOfferInfo(data: PopupOffer) {
    return this.httpClient.put<{ message: string }>(API_POPUP_OFFER + '/update-popup-offer-info', data);
  }

  deletePopupOffer(id: string) {
    return this.httpClient.delete<{ message: string }>(API_POPUP_OFFER + '/delete-popup-offer-by-id/' + id);
  }


}
