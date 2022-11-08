import { User } from './user';
// import {departInfo,returnInfo} from './trip-info';
// export interface OrderItem {
//   returnInfo: returnInfo | any;
//   departInfo: departInfo | any;
//   departTicket: any;
//   returnTicket: any;
//   returnTicketPrice: number;
//   departTicketPrice:number;
//   discountType: number;
//   discountAmount?: number;
//   totalDepartTicket: number;
//   totalReturnTicket: number;
//   orderType: string;
// }

export interface Order {
  _id?: string;
  orderId?: string;
  checkoutDate?: Date;
  deliveryDate?: Date;
  // deliveryStatus: number;
  // subTotal: number;
  // shippingFee: number;
  discount: number;
  totalAmount: number;
  // paymentMethod: string;
  paymentStatus: string;
  paymentDate: string;
  user?: string | User;
  name: string;
  phoneNo: string;
  email: string;

  // returnInfo: returnInfo | any;
  // departInfo: departInfo | any;

  departTicket: any;
  returnTicket: any;
  returnTicketPrice: number;
  departTicketPrice: number;
  discountType: number;
  discountAmount?: number;
  totalDepartTicket: number;
  totalReturnTicket: number;
  orderType: string;
  // alternativePhoneNo?: string;
  // city: string;
  // area: string;
  // postCode: string;
  // shippingAddress: string;
  couponId?: string | any;
  couponValue?: number;
  hasPreorderItem?: boolean;
  orderNotes?: string;
  sessionkey?: string;
  createdAt?: string;
}
