import { Passengers } from "./passengers";

export interface AirRetrieve {
  readOnly?: boolean;
  BookingID?: string;
  Results?: Results[];
  Passengers?: Passengers[];
  BookingStatus?: string;
  Error?: string;
  createdAt?: Date;
}

export interface Results {
  ResultID?: string;
  IsRefundable?: string;
  Fares?: Fares[];
  Discount?: String;
  Validatingcarrier?: String;
  LastTicketDate?: String;
  segments?:Segments[]
  TotalFare?: String;
  Currency?: String;
  Availabilty?: String;
  FareType?: String;
  isMiniRulesAvailable?: String;
  HoldAllowed?: String;
}
export interface Fares {
  BaseFare?: string;
  Tax?: string;
  Currency?: String;
  OtherCharges?: String;
  Discount?: String;
  PaxType?: String;
  PassengerCount?: String;
  ServiceFee?: String;
}
export interface Segments {
  TripIndicator?: string;
  Origin?: Origin;
  Destination?: Destination;
  Airline?: Airline;
  Baggage?: String;
  JourneyDuration?: String;
  StopQuantity?: String;
  AirlinePNR?: String;
  baggageDetails?:BaggageDetails[]
  SegmentGroup?:String
}
export interface BaggageDetails {
  IsAllPax?: boolean,
  PaxType?: String
  Cabin?: String,
  Checkin?: String
  DepTime?: String;
}

export interface Origin {
  Airport?: Airport;
  DepTime?: String;
}
export interface Airport {
  AirportCode?: String;
  AirportName?:String;
  Terminal?:String;
  CityCode?:String;
  CityName?:String;
  CountryCode?:String;
  CountryName?:String;
}
export interface Destination {
  Airport?: Airport;
  ArrTime?: String;
}
export interface Airline {
  AirlineCode?: String;
  AirlineName?: String;
  FlightNumber?: String;
  BookingClass?: String;
  CabinClass?: String;
  OperatingCarrier?: String;
}




