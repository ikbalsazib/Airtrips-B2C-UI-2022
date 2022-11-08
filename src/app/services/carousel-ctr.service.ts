import {Injectable} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ResponsiveSettings} from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselCtrService {

  constructor() {
  }


  getOwlCustomConfig(loop: boolean, autoPlay: boolean, responsive?: ResponsiveSettings, dots?: boolean) {
    const owlCustomOptions: OwlOptions = {
      loop: loop === null ? false : loop,
      autoplay: autoPlay === null ? false : autoPlay,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: dots ? dots : false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: responsive ? responsive : {},
      nav: true,
      items: 1,
    };

    return owlCustomOptions;

  }

  get bigCarouselConfig(): OwlOptions {
    return {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      // autoplaySpeed: 4000,
      smartSpeed: 1000,
      // navSpeed: 700,
      nav: true,
      items: 1
    };
  }

  get categoryCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        400: {
          items: 1,
          slideBy: 1
        },
        599: {
          items: 3,
          slideBy: 3
        },
        699: {
          items: 4,
          slideBy: 4
        },
        890: {
          items: 6,
          slideBy: 6
        },
        1280: {
          items: 6,
          slideBy: 6
        },
      },
    };

  }

  get brandCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        599: {
          items: 2,
          slideBy: 2
        },
        960: {
          items: 4,
          slideBy: 4
        },
        1280: {
          items: 5,
          slideBy: 5
        },
      },
    };

  }

  get dealOfDayCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        599: {
          items: 1,
          slideBy: 1
        },
        960: {
          items: 2,
          slideBy: 2
        },
        1280: {
          items: 2,
          slideBy: 2
        },
      },
    };

  }

  get dealOfDayImgCarouselConfig(): OwlOptions {
    return {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      smartSpeed: 1000,
      slideBy: 1,
      autoplaySpeed: 1000,
      autoplayHoverPause: true,
      dots: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: false,
      items: 1
    };

  }


  get popularCatCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      margin: 5,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          margin: 0
        },
        400: {
          items: 2,
          slideBy: 2
        },
        530: {
          items: 2.5,
          slideBy: 2
        },
        600: {
          items: 3,
          slideBy: 3
        },
        800: {
          items: 3.5,
          slideBy: 3
        },
        850: {
          items: 4,
          slideBy: 4
        },
        1200: {
          items: 5,
          slideBy: 5
        },
      },
    };
  }

  get feutureProductCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      margin: 15,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          margin: 0
        },
        400: {
          items: 2,
          slideBy: 2
        },
        450: {
          items: 2,
          slideBy: 2
        },
        500: {
          items: 2.5,
          slideBy: 2
        },
        550: {
          items: 3,
          slideBy: 3
        },
        600: {
          items: 3.5,
          slideBy: 3
        },
        900: {
          items: 4,
          slideBy: 4
        },
        960: {
          items: 4.5,
          slideBy: 4
        },
        1050: {
          items: 5,
          slideBy: 5
        },
        1200: {
          items: 5,
          slideBy: 5
        },
      },
    };
  }


  get recommendedCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      margin: 15,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          margin: 0
        },
        400: {
          items: 2,
          slideBy: 2
        },
        450: {
          items: 2,
          slideBy: 2
        },
        500: {
          items: 2.5,
          slideBy: 2
        },
        550: {
          items: 3,
          slideBy: 3
        },
        600: {
          items: 3.5,
          slideBy: 3
        },
        900: {
          items: 4,
          slideBy: 4
        },
        960: {
          items: 4.5,
          slideBy: 4
        },
        1050: {
          items: 5,
          slideBy: 5
        },
        1200: {
          items: 5,
          slideBy: 5
        },
      },
    };
  }

  get offerCardCarouselConfig(): OwlOptions {
    return {
      loop: false,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      margin: 16,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        400: {
          items: 1,
          slideBy: 1
        },
        550: {
          items: 1.5,
          slideBy: 1
        },
        599: {
          items: 1.5,
          slideBy: 2
        },
        800: {
          items: 2.5,
          slideBy: 2
        },
        1100: {
          items: 3,
          slideBy: 3
        },
      },
    };

  }

  get slickCarouselConfig(): OwlOptions {
    return {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      autoplaySpeed: 2500,
      dots: false,
      navSpeed: 700,
      nav: false,
      items: 2,
      margin: 16,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        599: {
          items: 1,
          slideBy: 1
        },
        960: {
          items: 2,
          slideBy: 2
        },
      }
    };
  }

  get dealOfTheDataResponsive(): ResponsiveSettings {
    return {
      0: {
        items: 1,
        slideBy: 1
      },
      400: {
        items: 2,
        slideBy: 2
      },
      740: {
        items: 3,
        slideBy: 3
      },
      940: {
        items: 5,
        slideBy: 5
      }
    };
  }

  get onlineShopDataResponsive(): ResponsiveSettings {
    return {
      0: {
        items: 1,
        slideBy: 1
      },
      400: {
        items: 2,
        slideBy: 2
      },
      740: {
        items: 3,
        slideBy: 3
      },
      940: {
        items: 1,
        slideBy: 1
      }
    };
  }

  get categoryDataResponsive(): ResponsiveSettings {
    return {
      0: {
        items: 1,
        slideBy: 1
      },
      400: {
        items: 2,
        slideBy: 2
      },
      740: {
        items: 3,
        slideBy: 3
      },
      940: {
        items: 6,
        slideBy: 6
      }
    };
  }

  get restaurantDataResponsive(): ResponsiveSettings {
    return {
      0: {
        items: 1,
        slideBy: 1
      },
      400: {
        items: 2,
        slideBy: 2
      },
      740: {
        items: 3,
        slideBy: 3
      },
      940: {
        items: 3,
        slideBy: 3
      }
    };
  }

  get smallImgCarouselConfig() {
    const owlCustomOptions: OwlOptions = {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      items: 3
    };

    return owlCustomOptions;

  }

  get vendorCarouselConfig() {
    const owlCustomOptions: OwlOptions = {
      loop: false,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: true,
      items: 1,
    };

    return owlCustomOptions;

  }


}
