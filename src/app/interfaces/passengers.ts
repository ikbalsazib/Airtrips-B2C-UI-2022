export interface Passengers {
  Title?: String;
  FirstName?: String;
  LastName?: String;
  PaxType?: String;
  DateOfBirth?: String;
  Gender?: String;
  PassportNumber?: String;
  PassportExpiryDate?: String;
  PassportNationality?: String;
  Address1?: String;
  Address2?: String;
  CountryCode?: String;
  Nationality?: String;
  ContactNumber?: String;
  Email?: String;
  FFAirline?: String;
  FFNumber?: String;
  Ticket?: Ticket[];
}

export interface Ticket {
  TicketNo?: String;
}
