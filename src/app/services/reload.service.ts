import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  private refreshData = new Subject<void>();
  private refreshCourse = new Subject<void>();
  private refreshService = new Subject<void>();
  private refreshAdmin = new Subject<void>();
  private refreshContactUs = new Subject<void>();
  private refreshInternApplication = new Subject<void>();
  private refreshCourseApplication = new Subject<void>();
  private refreshSchedule = new Subject<void>();
  private refreshTerminal = new Subject<void>();
  private refreshLaunch = new Subject<void>();
  private refreshBookedTicket = new Subject<void>();
  private refreshRoles = new Subject<void>();
  private refreshLaunchConfig = new Subject<void>();
  private refreshLaunchTrip = new Subject<void>();
  private refreshUser = new Subject<void>();
  private refreshCarousel = new Subject<void>();
  private refreshCoupons = new Subject<void>();
  private refreshGallery = new Subject<void>();
  private refreshImageFolder = new Subject<void>();
  private refreshBlog = new Subject<void>();
  private refreshComment = new Subject<void>();
  private refreshPromotionOffer = new Subject<void>();
  private refreshPopupOffer = new Subject<void>();
  private refreshSeason = new Subject<void>();
  private refreshBookTicket = new Subject<void>();
  private refreshCart = new Subject<void>();
  private refreshPackage = new Subject<void>();
  private refreshOrder = new Subject<void>();
  private refreshFaq = new Subject<void>();
  private refreshWhyChoose = new Subject<void>();
  /**
   * why choose airtrips
   */
  get refreshWhyChoose$() {
    return this.refreshWhyChoose;
  }

  needRefreshWhyChoose$() {
    this.refreshWhyChoose.next();
  }
  /**
   * PromotionOffer
   */
  get refreshOrder$() {
    return this.refreshOrder;
  }

  needRefreshOrder$() {
    this.refreshOrder.next();
  }
  /**
   * PromotionOffer
   */
  get refreshData$() {
    return this.refreshData;
  }

  needRefreshData$() {
    this.refreshData.next();
  }
  /**
   * refreshDiscussion
   */
   get refreshFaq$() {
    return this.refreshFaq;
  }
  needRefreshFaq$() {
    this.refreshFaq.next();
  }
/**
   * PromotionOffer
   */
 get refreshPackage$() {
  return this.refreshPackage;
}

needRefreshPackage$() {
  this.refreshPackage.next();
}

  /**
   * PromotionOffer
   */
  get refreshBookTicket$() {
    return this.refreshBookTicket;
  }

  needRefreshBookTicket$() {
    this.refreshBookTicket.next();
  }

  /**
   * PromotionOffer
   */
  get refreshSeason$() {
    return this.refreshSeason;
  }

  needRefreshSeason$() {
    this.refreshSeason.next();
  }

  /**
   * refreshPopupOffer
   */
  get refreshPopupOffer$() {
    return this.refreshPopupOffer;
  }

  needRefreshPopupOffer$() {
    this.refreshPopupOffer.next();
  }

  /**
   * CART
   */
   get refreshCart$() {
    return this.refreshCart;
  }

  needRefreshCart$() {
    this.refreshCart.next();
  }
  /**
   * PromotionOffer
   */
  get refreshPromotionOffer$() {
    return this.refreshPromotionOffer;
  }

  needRefreshPromotionOffer$() {
    this.refreshPromotionOffer.next();
  }

  /**
   * Comment
   */
  get refreshComment$() {
    return this.refreshComment;
  }

  needRefreshComment$() {
    this.refreshComment.next();
  }
  /**
   * Blog
   */
  get refreshBlog$() {
    return this.refreshBlog;
  }

  needRefreshBlog$() {
    this.refreshBlog.next();
  }

  /**
   * ImageFolder
   */
  get refreshImageFolder$() {
    return this.refreshImageFolder;
  }

  needRefreshImageFolder$() {
    this.refreshImageFolder.next();
  }
  /**
   * refreshGallery
   */

  get refreshGallery$() {
    return this.refreshGallery;
  }

  needRefreshGallery$() {
    this.refreshGallery.next();
  }
  /**
   * Carousel
   */
  get refreshCarousel$() {
    return this.refreshCarousel;
  }

  needRefreshCarousel$() {
    this.refreshCarousel.next();
  }
  /**
   * refreshCoupon
   */
  get refreshCoupons$() {
    return this.refreshCoupons;
  }

  needRefreshCoupons$() {
    this.refreshCoupons.next();
  }
  /**
   * USER
   */
  get refreshUser$() {
    return this.refreshUser;
  }

  needRefreshUser$() {
    this.refreshUser.next();
  }

  get refreshLaunchTrip$() {
    return this.refreshLaunchTrip;
  }
  needRefreshLaunchTrip$() {
    this.refreshLaunchTrip.next();
  }

  get refreshTerminal$() {
    return this.refreshTerminal;
  }
  needRefreshTerminal$() {
    this.refreshTerminal.next();
  }

  /**
   * LOCAL ROLES
   */
  get refreshRoles$() {
    return this.refreshRoles;
  }
  needRefreshRoles$() {
    this.refreshRoles.next();
  }

  /**
   * refreshBookedTicket
   */
  get refreshBookedTicket$() {
    return this.refreshBookedTicket;
  }
  needRefreshBookedTicket$() {
    this.refreshBookedTicket.next();
  }
  /**
   * refreshLaunch
   */
  get refreshLaunch$() {
    return this.refreshLaunch;
  }
  needRefreshLaunch$() {
    this.refreshLaunch.next();
  }

  get refreshLaunchConfig$() {
    return this.refreshLaunchConfig;
  }
  needRefreshLaunchConfig$() {
    this.refreshLaunchConfig.next();
  }

  /**
   * refreshCourse
   */

  get refreshSchedule$() {
    return this.refreshSchedule;
  }

  needRefreshSchedule$() {
    this.refreshSchedule.next();
  }


  /**
   * refreshCourse
   */

  get refreshCourse$() {
    return this.refreshCourse;
  }

  needRefreshCourse$() {
    this.refreshCourse.next();
  }

  /**
   * refreshCourse
   */

  get refreshService$() {
    return this.refreshService;
  }

  needRefreshService$() {
    this.refreshService.next();
  }


  /**
   * refreshCourse
   */

  get refreshAdmin$() {
    return this.refreshAdmin;
  }

  needRefreshAdmin$() {
    this.refreshAdmin.next();
  }

  /**
   * refreshCourse
   */

  get refreshContactUs$() {
    return this.refreshContactUs;
  }

  needRefreshContactUs$() {
    this.refreshContactUs.next();
  }

  /**
   * refreshCourse
   */

  get refreshInternApplication$() {
    return this.refreshInternApplication;
  }

  needRefreshInternApplication$() {
    this.refreshInternApplication.next();
  }

  /**
   * refreshCourse
   */

  get refreshCourseApplication$() {
    return this.refreshCourseApplication;
  }

  needRefreshCourseApplication$() {
    this.refreshCourseApplication.next();
  }


}
