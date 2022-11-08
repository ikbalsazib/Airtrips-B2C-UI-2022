// import {departInfo,departData,returnData,returnInfo} from './trip-info';
export interface Cart {
  _id?: string;
  // product: Product | string;
  departTicket: any;
  returnTicket: any;
  // departInfo: departInfo | any;
  // returnInfo: returnInfo | any;
  // departData: departData |any,
  // returnData: returnData|any,
  totalDepartTicket: number;
  totalReturnTicket: number;
  totalAmount: number;
}
