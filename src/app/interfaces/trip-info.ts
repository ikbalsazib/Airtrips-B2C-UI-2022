export interface AirBook {
  BookingID: string;
  Results: Result[];
  Passengers: Passenger[];
  AppliedPromotion: any;
  Error: {
    ErrorCode: number;
    ErrorMessage: string;
  };
}
export interface AirBookQueryData {
  SearchId: string;
  ResultID: string;
  Passengers: Passenger[];
}
export interface PreBook {
  SearchId: string;
  Results: any | any[];
  Error: {
    ErrorCode: number;
    ErrorMessage: string;
  };
  AppliedPromotion: any;
}
export interface Passenger {
  Title: string;
  FirstName: string;
  LastName: string;
  PaxType: string;
  DateOfBirth: string;
  Gender: string;
  Address1: string;
  CountryCode: string;
  Nationality: string;
  ContactNumber: string;
  Email: string;
  IsLeadPassenger: true;
  PassportNumber: string;
  PassportExpiryDate: string;
  PassportNationality: string;
}
export interface PreBookQueryData {
  SearchId: string;
  ResultID: string;
  Passengers: Passenger[];
}
export interface AirRules {
  RuleType: string;
  RuleDetails: string;
  Paxtype: string;
  AirlineCode: string;
  CityPair: string;
  Error: any;
}
export interface AirRulesQueryData {
  SearchId: string;
  ResultID: string;
}
export interface Fares {
  BaseFare: number;
  Tax: number;
  Currency: string;
  OtherCharges: number;
  Discount: number;
  AgentMarkUp: boolean;
  PaxType: string;
  PassengerCount: number;
  ServiceFee: number;
}
export interface Airport {
  AirportCode: string;
  AirportName: string;
  Terminal: number;
  CityCode: string;
  CityName: string;
  CountryCode: string;
  CountryName: string;
}
export interface baggageDetails {
  IsAllPax: true;
  PaxType: number;
  Cabin: null;
  Checkin: string;
}
export interface Airline {
  AirlineCode: string;
  AirlineName: string;
  FlightNumber: string;
  BookingClass: string;
  CabinClass: string;
  OperatingCarrier: string;
}
export interface Segments {
  TripIndicator: string;
  Origin: {
    Airport: Airport;
    DepTime: string;
  };
  Destination: {
    Airport: Airport;
    ArrTime: string;
  };
  Airline: Airline;
  Baggage: string;
  JourneyDuration: string;
  StopQuantity: string;
  Equipment: string;
  baggageDetails: baggageDetails[];
  SegmentGroup: number;
}
//Result Interface
export interface Result {
  ResultID: string;
  IsRefundable: boolean;
  Fares: Fares[];
  Discount: number;
  Validatingcarrier: string;
  LastTicketDate: string;
  segments: Segments[];
  TotalFare: number;
  TotalFareWithAgentMarkup: number;
  Currency: string;
  Availabilty: number;
  FareType: string;
  isMiniRulesAvailable: boolean;
  HoldAllowed: boolean;
}
export interface TripInfo {
  SearchId: string;
  Results: Result[];
}
export interface TripQueryData {
  JourneyType: number;
  AdultQuantity: number;
  ChildQuantity: number;
  InfantQuantity: number;
  EndUserIp: string;
  Segments: [
    {
      Origin: string;
      Destination: string;
      CabinClass: number;
      DepartureDateTime: string;
    }
  ];
}
