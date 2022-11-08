import {MenuAdmin} from '../../interfaces/menu-admin';


export const menuItemsAdmin: MenuAdmin[] = [



  // Parent Dashboard
  {
    id: '1',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null
  },
  {
    id: '3TT',
    title: 'Queues',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '7868',
    title: 'On Hold',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '3TT',
    routerLink: 'on-hold',
    href: null,
    target: null
  },
  {
    id: '934411',
    title: 'Ticketed',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '3TT',
    routerLink: 'ticketed',
    href: null,
    target: null
  },
  {
    id: '3TS',
    title: 'Manage',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '78689',
    title: 'Travellers',
    icon: 'people',
    hasSubMenu: false,
    parentId: '3TS',
    routerLink: 'travellers',
    href: null,
    target: null
  },

  {
    id: '3TSS',
    title: 'Accounts',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '78691',
    title: 'All Transactions',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '3TSS',
    routerLink: 'all-transactions',
    href: null,
    target: null
  },
  {
    id: '78691',
    title: 'Bkash Transactions',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '3TSS',
    routerLink: 'bkash-transactions',
    href: null,
    target: null
  },
  // Issue Newsletter
  {
    id: '9344',
    title: 'Issued Ticket',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '3Ticketinng',
    routerLink: 'issue-ticket',
    href: null,
    target: null
  },
  // Parent Newsletter
  // {
  //   id: 'lt01',
  //   title: 'Launch Trip Sheet',
  //   icon: 'description',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-trip-sheet',
  //   href: null,
  //   target: null
  // },

   // Parent Launch Status
    // {
    //   id: '45x',
    //   title: 'Launch Active~Inactive',
    //   icon: 'toggle_off',
    //   hasSubMenu: false,
    //   parentId: null,
    //   routerLink: 'launch-status',
    //   href: null,
    //   target: null
    // },

  // Parent Shared Tickets
  {
    id: 'sh-0',
    title: 'Shared Tickets',
    icon: 'stars',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  // {
  //   id: 'a1',
  //   title: 'Booked Tickets',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: 'sh-0',
  //   routerLink: 'shared-booked-tickets',
  //   href: null,
  //   target: null
  // },
  {
    id: 'a1',
    title: 'Issued Tickets',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: 'sh-0',
    routerLink: 'shared-issue-tickets',
    href: null,
    target: null
  },

     // Service Charge
        {
            id: 's01',
            title: 'Service Charge',
            icon: 'description',
            hasSubMenu: false,
            parentId: null,
            routerLink: 'service-charges',
            href: null,
            target: null
          },


  // // Parent Products
  // {
  //   id: '100',
  //   title: 'Products',
  //   icon: 'view_list',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '100b1',
  //   title: 'Products List',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '100',
  //   routerLink: 'products',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '100b2',
  //   title: 'Add Product',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '100',
  //   routerLink: 'add-product',
  //   href: null,
  //   target: null
  // },


  // Parent Offer
  // {
  //   id: '745Z',
  //   title: 'Offers',
  //   icon: 'local_offer',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RX',
  //   title: 'Deal on Play',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-on-play',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RY',
  //   title: 'Deal of The Day',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-of-the-day',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RZ',
  //   title: 'Featured Product',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'featured-product',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RZ2',
  //   title: 'Featured Category',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'featured-category',
  //   href: null,
  //   target: null
  // },
  // // Parent Coupons
  // {
  //   id: '8',
  //   title: 'Coupons',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'coupons',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'ab8d',
  //   title: 'Promotion Offer',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'promotion-offers',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'ddrt4',
  //   title: 'Pop-up Offer',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'popup-offer',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74BRY',
  //   title: 'Banner',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'banner',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '932r',
  //   title: 'Promotional Offer',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'promotional-offer',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '1024',
  //   title: 'Offer products',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'offer-products',
  //   href: null,
  //   target: null
  // },
  {
    id: '18',
    title: 'Package ',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'package',
    href: null,
    target: null
  },
  {
    id: '18',
    title: 'Russia Tour ',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'russia-tour',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '731',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45x',
    title: 'Image Folder',
    icon: 'folder',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-folder',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: '4',
    title: 'Image Gallery',
    icon: 'collections',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-gallery',
    href: null,
    target: null
  },


  // Parent
  {
    id: '412p',
    title: 'Blog Area',
    icon: 'rss_feed',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '412c',
    title: 'Blogs',
    icon: 'people',
    hasSubMenu: false,
    parentId: '412p',
    routerLink: 'blogs',
    href: null,
    target: null
  },
  // Parent Additional Pages
  // {
  //   id: '45x',
  //   title: 'Additional Pages',
  //   icon: 'layers',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'additional-pages',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: '8rd2',
    title: 'Comments',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '9',
    title: 'Comments',
    icon: 'reviews',
    hasSubMenu: false,
    parentId: '8rd2',
    routerLink: 'comments',
    href: null,
    target: null
  },
   // Parent
   {
    id: '15',
    title: 'Trending Countries',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'trending-countries',
    href: null,
    target: null
  },
  {
    id: '16',
    title: 'Recomamded Destination',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'recomamded-destination',
    href: null,
    target: null
  },
  {
    id: '45x',
    title: 'Additional Pages',
    icon: 'layers',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45xd22',
    title: 'Other Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'additional-pages',
    href: null,
    target: null
  },
  {
    id: '45xd232',
    title: 'FAQ',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'faq',
    href: null,
    target: null
  },
  // Parent Additional Pages

  // // Parent Sales
  // {
  //   id: '4',
  //   title: 'Sales',
  //   icon: 'local_mall',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'c1',
  //   title: 'Orders',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'orders',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'c1',
  //   title: 'Transactions',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'transactions',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '45x',
  //   title: 'Shipping Charge',
  //   icon: 'attach_money',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'shipping-charge',
  //   href: null,
  //   target: null
  // },
  // Roles Users
  {
    id: '631',
    title: 'Admin Control',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '51',
    title: 'Roles',
    icon: 'offline_bolt',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'roles',
    href: null,
    target: null
  },
  // Parent Users
  {
    id: '5',
    title: 'Users',
    icon: 'group_add',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'users',
    href: null,
    target: null
  },
  // Parent Customers

// Parent Subscribers
{
  id: '7',
    title: 'Subscribers',
    icon: 'people',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'subscribers',
    href: null,
    target: null
},
// Parent Subscribers
{
  id: '8',
    title: 'Get Update & More',
    icon: 'dashboard_customize',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'get-update-more',
    href: null,
    target: null
},
  // // Parent Newsletter
  // {
  //   id: '7',
  //   title: 'Newsletter',
  //   icon: 'drafts',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'newsletter',
  //   href: null,
  //   target: null
  // },
  //
  // // Parent StoreInfo
  // {
  //   id: '2bc3',
  //   title: 'Store and Dealer',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '777',
  //   title: 'Store Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'store-info',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '763',
  //   title: 'Dealer Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'dealer-info',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  // {
  //   id: '8rd2',
  //   title: 'Review and Discussion',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '9',
  //   title: 'Reviews',
  //   icon: 'comments',
  //   hasSubMenu: false,
  //   parentId: '8rd2',
  //   routerLink: 'comments',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '911',
  //   title: 'Discussion',
  //   icon: 'comments',
  //   hasSubMenu: false,
  //   parentId: '8rd2',
  //   routerLink: 'discussion',
  //   href: null,
  //   target: null
  // },
  // Parent Support
  {
    id: '10',
    title: 'Support',
    icon: 'support_agent',
    hasSubMenu: false,
    parentId: null,
    routerLink: null,
    href: 'https://softlabit.com/',
    target: '_blank'
  },
  {
    id: '17',
    title: 'Why Choose Airtrips',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'why-choose-airtrips',
    href: null,
    target: null
  },
  {
    id: '18',
    title: 'Footer Data',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'footer-data',
    href: null,
    target: null
  },
];

export const menuItemsCounter: MenuAdmin[] = [

  // Parent Products

  // {
  //   id: 'br1',
  //   title: 'Launches',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'launches',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b1',
  //   title: 'Schedules',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'schedules',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b10',
  //   title: 'Terminals',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'terminals',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b2',
  //   title: 'Routes',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'routes',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b3',
  //   title: 'Fares',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'fares',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b3',
  //   title: 'Launch Configuration',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'launch-configuration',
  //   href: null,
  //   target: null
  // },
  // Parent Launch Status
  // {
  //   id: '45x',
  //   title: 'Launch Active~Inactive',
  //   icon: 'toggle_off',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-status',
  //   href: null,
  //   target: null
  // },
  {
    id: 'b1462',
    title: 'Launch Routes & Schedules',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'launch-configuration',
    href: null,
    target: null
  },
  // Parent Launch Booking
  // {
  //   id: '45x',
  //   title: 'Ticket Booking',
  //   icon: 'library_add_check',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-booking',
  //   href: null,
  //   target: null
  // },
  // Parent Newsletter
  {
    id: '7654',
    title: 'Booked Ticket',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'booked-ticket',
    href: null,
    target: null
  },

  // Parent Newsletter
  // {
  //   id: '8534',
  //   title: 'Cancel Ticket',
  //   icon: 'drafts',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'cancel-ticket',
  //   href: null,
  //   target: null
  // },

  // Issue Newsletter
  // {
  //   id: '9344',
  //   title: 'Issue Ticket',
  //   icon: 'drafts',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'issue-ticket',
  //   href: null,
  //   target: null
  // },
  // Parent Newsletter
  // {
  //   id: 'lt01',
  //   title: 'Launch Trip Sheet',
  //   icon: 'description',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-trip-sheet',
  //   href: null,
  //   target: null
  // },

  // Parent Support
  // {
  //   id: '10',
  //   title: 'Support',
  //   icon: 'support_agent',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: null,
  //   href: 'https://softlabit.com/',
  //   target: '_blank'
  // },
  {
    id: '18',
    title: 'Package ',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'package',
    href: null,
    target: null
  },
  {
    id: '16',
    title: 'Recomamded Destination',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'recomamded-destination',
    href: null,
    target: null
  },
  {
    id: '17',
    title: 'Why Choose Airtrips',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'why-choose-airtrips',
    href: null,
    target: null
  },
  {
    id: '18',
    title: 'Footer Data',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'footer-data',
    href: null,
    target: null
  },
];
export const menuItemsSuperCounter: MenuAdmin[] = [

  // Parent Products
  // {
  //   id: '3',
  //   title: 'Launch Setup',
  //   icon: 'category',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'br1',
  //   title: 'Launches',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'launches',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b1',
  //   title: 'Schedules',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'schedules',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b10',
  //   title: 'Terminals',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'terminals',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b2',
  //   title: 'Routes',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'routes',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b3',
  //   title: 'Fares',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'fares',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: 'b3',
  //   title: 'Launch Configuration',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '3',
  //   routerLink: 'launch-configuration',
  //   href: null,
  //   target: null
  // },
  // Parent Launch Status
  // {
  //   id: '45x',
  //   title: 'Launch Active~Inactive',
  //   icon: 'toggle_off',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-status',
  //   href: null,
  //   target: null
  // },
  {
    id: '18',
    title: 'Package ',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'package',
    href: null,
    target: null
  },
  {
    id: 'b1462',
    title: 'Launch Routes & Schedules',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'launch-configuration',
    href: null,
    target: null
  },
  // Parent Launch Booking
  // {
  //   id: '45x',
  //   title: 'Ticket Booking',
  //   icon: 'library_add_check',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-booking',
  //   href: null,
  //   target: null
  // },
  // Parent Newsletter
  {
    id: '7654',
    title: 'Booked Ticket',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'booked-ticket',
    href: null,
    target: null
  },

  // Parent Newsletter
  {
    id: '8534',
    title: 'Cancel Ticket',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'cancel-ticket',
    href: null,
    target: null
  },

  // Issue Newsletter
  // {
  //   id: '9344',
  //   title: 'Issue Ticket',
  //   icon: 'drafts',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'issue-ticket',
  //   href: null,
  //   target: null
  // },
  // Parent Newsletter
  // {
  //   id: 'lt01',
  //   title: 'Launch Trip Sheet',
  //   icon: 'description',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: 'launch-trip-sheet',
  //   href: null,
  //   target: null
  // },

  // Parent Support
  // {
  //   id: '10',
  //   title: 'Support',
  //   icon: 'support_agent',
  //   hasSubMenu: false,
  //   parentId: null,
  //   routerLink: null,
  //   href: 'https://softlabit.com/',
  //   target: '_blank'
  // },
  {
    id: '16',
    title: 'Recomamded Destination',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'recomamded-destination',
    href: null,
    target: null
  },
  {
    id: '17',
    title: 'Why Choose Airtrips',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'why-choose-airtrips',
    href: null,
    target: null
  },
  //footer-data
  {
    id: '18',
    title: 'Footer Data',
    icon: 'rss_feed',
    hasSubMenu:false,
    parentId: null,
    routerLink: 'footer-data',
    href: null,
    target: null
  },
];
