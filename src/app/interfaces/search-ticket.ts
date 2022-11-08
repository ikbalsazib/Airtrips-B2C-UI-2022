export interface OneWaySearchTicket {
  selectedSeat: string;
  JourneyType: number;
  AdultQuantity: string;
  ChildQuantity: string;
  InfantQuantity: string;
  EndUserIp: string;
  Segments: [
    {
      Origin: string;
      to: string;
      CabinClass: number;
      DepartureDateTime: string;
    }
  ];
}
