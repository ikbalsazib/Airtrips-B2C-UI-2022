export interface Transaction {
  _id?:string;
  orderId?:string;
  bookingId?: string;
  totalAmount?:string;
  paymentStatus?:string;
  paymentMethod?:string;
  paymentDate?:string;
}
