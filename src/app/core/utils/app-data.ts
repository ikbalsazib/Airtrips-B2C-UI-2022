import { Select } from '../../interfaces/select';
import { AdminRoleEnum } from '../../enum/admin-role.enum';
// import {LaunchSeatType} from "../../enum/launch-seat-type.enum";
import { SeatStatus } from '../../enum/seat-status';
import { TripType } from '../../enum/trip-type.enum';
import { AirClassType } from '../../enum/air-class.enums';
import { AirportList } from 'src/app/interfaces/airport';

export const ADMIN_ROLES: Select[] = [
  { value: AdminRoleEnum.SUPER_ADMIN, viewValue: 'Super Admin' },
  { value: AdminRoleEnum.ADMIN, viewValue: 'Admin' },
  { value: AdminRoleEnum.COUNTER, viewValue: 'Counter' },
  { value: AdminRoleEnum.SUPER_COUNTER, viewValue: 'Super Counter' },
];

export const TRIP_TYPE: Select[] = [
  {
    value: TripType.ONE_WAY,
    viewValue: 'One Way',
  },
  {
    value: TripType.ROUND_TRIP,
    viewValue: 'Round Trip',
  },
  {
    value: TripType.MULTI_CITY,
    viewValue: 'Multi City',
  },
];

export const AIR_CLASS: Select[] = [
  {
    value: AirClassType.ECONOMY,
    viewValue: 'Economy',
  },
  {
    value: AirClassType.PREMIUM_ECONOMY,
    viewValue: 'Premium Economy',
  },
  {
    value: AirClassType.BUSINESS,
    viewValue: 'Business',
  },
  {
    value: AirClassType.FIRST_CLASS,
    viewValue: 'First Class',
  },
];
export const GENDERS: Select[] = [
  { value: 'Male', viewValue: 'Male' },
  { value: 'Female', viewValue: 'Female' },
  { value: 'Others', viewValue: 'Others' },
];

export const REPORT_FILTER: Select[] = [
  // {value: 0, viewValue: 'Today'},
  { value: 1, viewValue: 'Last Day' },
  { value: 7, viewValue: 'Last 7 days' },
  { value: 15, viewValue: 'Last 15 days' },
  { value: 30, viewValue: 'Last 30 days' },
  { value: 60, viewValue: 'Last 60 days' },
  { value: 90, viewValue: 'Last 90 days' },
];

export const BOOKING_FOR_TIME: Select[] = [
  { value: 1 / 60, viewValue: '1 Minute' },
  { value: 5 / 60, viewValue: '5 Minute' },
  { value: 2, viewValue: '2 Hours' },
  { value: 3, viewValue: '3 Hours' },
  { value: 4, viewValue: '4 Hours' },
  { value: 5, viewValue: '5 Hours' },
  { value: 6, viewValue: '6 Hours' },
  { value: 12, viewValue: '12 Hours' },
  { value: 24, viewValue: '1 Day' },
  { value: 48, viewValue: '2 Day' },
  { value: 72, viewValue: '3 Day' },
];

// export const SEAT_TYPES: Select[] = [
//   // {value: LaunchSeatType.No_Seat, viewValue: 'No Seat'},
//   {value: LaunchSeatType.Single, viewValue: 'Single'},
//   {value: LaunchSeatType.Double, viewValue: 'Double'},
//   {value: LaunchSeatType.Double, viewValue: 'Double'},
//   {value: LaunchSeatType.Single_AC, viewValue: 'Single AC'},
//   {value: LaunchSeatType.Double_AC, viewValue: 'Double AC'},
//   {value: LaunchSeatType.Semi_Family_AC, viewValue: 'Semi Family AC'},
//   {value: LaunchSeatType.Family_AC, viewValue: 'Family AC'},
//   {value: LaunchSeatType.Semi_VIP_AC, viewValue: 'Semi VIP AC'},
//   {value: LaunchSeatType.VIP_AC, viewValue: 'VIP AC'},
//   {value: LaunchSeatType.Sofa, viewValue: 'Sofa'},
//   {value: LaunchSeatType.Deck, viewValue: 'Deck'},
//   {value: LaunchSeatType.VIP_REGULAR, viewValue: 'VIP Regular'},
//   {value: LaunchSeatType.VIP_SILVER, viewValue: 'VIP Silver'},
//   {value: LaunchSeatType.VIP_GOLD, viewValue: 'VIP Gold'},
//   {value: LaunchSeatType.VIP_RUBY, viewValue: 'VIP Ruby'},
//   {value: LaunchSeatType.VIP_PLATINUM, viewValue: 'VIP Platinum'}
// ];

export const ALL_HOSTS: Select[] = [
  { value: 'mkshippinglines.com', viewValue: 'Mk Shipping' },
  { value: 'surovi.com.bd', viewValue: 'Surovi' },
];

export const AIR_IMAGE: any[] = [
  {
    name: 'BIMAN BANGLADESH',
    img: '/assets/images/logo/biman-bangladesh.png',
  },
  {
    name: 'Novoair',
    img: '/assets/images/logo/novoair.png',
  },
  {
    name: 'US-Bangla Airlines',
    img: '/assets/images/logo/us-bangla-airlines.png',
  },
  {
    name: 'Turkish Airlines',
    img: '/assets/images/logo/turkish-airlines-logo.png',
  },
  {
    name: 'American Airlines',
    img: '/assets/images/logo/american-airlines.png',
  },
  {
    name: 'Air Arabia',
    img: '/assets/images/logo/air-arabia.png',
  },
  {
    name: 'Gulf Air',
    img: '/assets/images/logo/GulfAirlineLogo.png',
  },
  {
    name: 'IndiGo',
    img: '/assets/images/logo/indigo-logo.png',
  },
  {
    name: 'Qatar Airways',
    img: '/assets/images/logo/qatar-airways.png',
  },
  {
    name: 'Oman Air',
    img: '/assets/images/logo/WY_OmanAir.png',
  },
  {
    name: 'Etihad Airways',
    img: '/assets/images/logo/etihad-airways-logo.png',
  },
  {
    name: 'Emirates',
    img: '/assets/images/logo/emirates-logo.png',
  },
  {
    name: 'SriLankan Airlaines',
    img: '/assets/images/logo/SriLankan_Airlines_logo.png',
  },
  {
    name: 'jetBlue',
    img: '/assets/images/logo/jetBlue_logo.png',
  },
  {
    name: 'Flydubai',
    img: '/assets/images/logo/FlyDubai_logo.png',
  },
  {
    name: 'Pakistan International Airways',
    img: '/assets/images/logo/Pakistan_International_Airlines_Logo.png',
  },
  {
    name: 'SriLankan Airlines',
    img: '/assets/images/logo/srilankan_airlines-logo.png',
  },
  {
    name: 'Saudia',
    img: '/assets/images/logo/saudia_airlines_logo.png',
  },
  {
    name: 'Aer Lingus',
    img: '/assets/images/logo/aer_lingus_logo.png',
  },
  {
    name: 'Alitalia',
    img: '/assets/images/logo/alitalia_airlines_logo.png',
  },
  {
    name: 'Intersky Luftfahrt',
    img: '/assets/images/logo/InterSky_airlines_logo.png',
  },
  {
    name: 'KLM',
    img: '/assets/images/logo/KLM_logo.png',
  },
  {
    name: 'Lufthansa',
    img: '/assets/images/logo/lufthansa_logo.png',
  },
  {
    name: 'Lufthansa CityLine',
    img: '/assets/images/logo/lufthansa_cityline_logo.png',
  },
  {
    name: 'SAS Scandinavian',
    img: '/assets/images/logo/Scandinavian_Airlines_logo.png',
  },
  {
    name: 'Singapore Airlines',
    img: '/assets/images/logo/singapore_airlines_logo.png',
  },
  {
    name: 'Malaysia Airlines',
    img: '/assets/images/logo/malaysia_airlines_logo.png',
  },
  {
    name: 'United Airlines',
    img: '/assets/images/logo/United-Airlines-Logo.png',
  },
  {
    name: 'Iberia',
    img: '/assets/images/logo/Iberia_airlines_logo.png',
  },
  {
    name: 'Air France',
    img: '/assets/images/logo/Air-France-Logo.png',
  },
  {
    name: 'Vistara',
    img: '/assets/images/logo/vistara_airlines_Logo.png',
  },
  {
    name: 'Air Dolomiti',
    img: '/assets/images/logo/Air_Dolomiti-Logo.png',
  },
  {
    name: 'Accesrail',
    img: '/assets/images/logo/Accesrail_airlines_logo.png',
  },
  {
    name: 'Brussels Airlines',
    img: '/assets/images/logo/Brussels_airlines_logo.png',
  },
  {
    name: 'Air India',
    img: '/assets/images/logo/air-india.png',
  },
];

export const AIRPORT_LIST: AirportList[] = [
  {
    name: 'Birmingham, United Kingdom - Birmingham Airport [BHX]',
    value: 'BHX',
  },
  {
    name: 'Bournemouth, United Kingdom - Bournemouth Airport [BOH]',
    value: 'BOH',
  },
  {
    name: 'Bristol, United Kingdom - Bristol Airport [BRS]',
    value: 'BRS',
  },
  {
    name: 'Cardiff, United Kingdom - Cardiff Airport [CWL]',
    value: 'CWL',
  },
  {
    name: 'Doncaster, United Kingdom - Robin Hood Airport Doncaster Sheffield [DSA]',
    value: 'DSA',
  },
  {
    name: 'Sheffield, United Kingdom - Robin Hood Airport Doncaster Sheffield [DSA]',
    value: 'DSA',
  },
  {
    name: 'Middlesbrough, United Kingdom - Durham Tees Valley Airport [MME]',
    value: 'MME',
  },
  {
    name: 'Nottingham, United Kingdom - East Midlands Airport [EMA]',
    value: 'EMA',
  },
  {
    name: 'Leicester, United Kingdom - East Midlands Airport [EMA]',
    value: 'EMA',
  },
  {
    name: 'Exeter, United Kingdom - Exeter International Airport [EXT]',
    value: 'EXT',
  },
  {
    name: 'Leeds, United Kingdom - Leeds Bradford International Airport [LBA]',
    value: 'LBA',
  },
  {
    name: 'Bradford, United Kingdom - Leeds Bradford International Airport [LBA]',
    value: 'LBA',
  },
  {
    name: 'Liverpool, United Kingdom - Liverpool John Lennon Airport [LPL]',
    value: 'LPL',
  },
  {
    name: 'London, United Kingdom - London City Airport [LCY]',
    value: 'LCY',
  },
  {
    name: 'London, United Kingdom - Gatwick Airport [LGW]',
    value: 'LGW',
  },
  {
    name: 'London, United Kingdom - Heathrow Airport [LHR]',
    value: 'LHR',
  },
  {
    name: 'London, United Kingdom - Luton Airport [LTN]',
    value: 'LTN',
  },
  {
    name: 'London, United Kingdom - London Southend Airport [SEN]',
    value: 'SEN',
  },
  {
    name: 'London, United Kingdom - London Stansted Airport [STN]',
    value: 'STN',
  },
  {
    name: 'Manchester, United Kingdom - Manchester Airport [MAN]',
    value: 'MAN',
  },
  {
    name: 'Newcastle upon Tyne, United Kingdom - Newcastle Airport [NCL]',
    value: 'MAN',
  },
  {
    name: 'Newquay, United Kingdom - Newquay Cornwall Airport [NQY]',
    value: 'NQY',
  },
  {
    name: 'Norwich, United Kingdom - Norwich International Airport [NWI]',
    value: 'NWI',
  },
  {
    name: 'Southampton, Scotland - Aberdeen Airport [ABZ]',
    value: 'ABZ',
  },
  {
    name: 'Edinburgh, Scotland - Edinburgh Airport [EDI]',
    value: 'EDI',
  },
  {
    name: 'Glasgow, Scotland - Glasgow International Airport [GLA]',
    value: 'GLA',
  },
  {
    name: 'Glasgow, Scotland - Glasgow Prestwick Airport [PIK]',
    value: 'PIK',
  },
  {
    name: 'Inverness, Scotland - Inverness Airport [INV]',
    value: 'INV',
  },
  {
    name: 'Belfast, Northern Ireland - Belfast International Airport [BFS]',
    value: 'BFS',
  },
  {
    name: 'Belfast, Northern Ireland - George Best Belfast City Airport [BHD]',
    value: 'BHD',
  },
  {
    name: 'Derry, Northern Ireland - City of Derry AirportGeorge Best Belfast City Airport [LDY]',
    value: 'LDY',
  },
  {
    name: 'Antwerp, Belgium - Antwerp International Airport [ANR]',
    value: 'ANR',
  },
  {
    name: 'Charleroi, Belgium - Brussels South Charleroi Airport [CRL]',
    value: 'CRL',
  },
  {
    name: 'Liège, Belgium - Liège Airport [LGG]',
    value: 'LGG',
  },
  {
    name: 'Ostend, Belgium - Ostend Bruges International Airport [OST]',
    value: 'OST',
  },
  {
    name: 'Bruges, Belgium - Ostend Bruges International Airport [OST]',
    value: 'OST',
  },
  {
    name: 'Bastia, France - Poretta Airport [BIA]',
    value: 'BIA',
  },
  {
    name: 'Bergerac, France - Bergerac Dordogne Périgord Airport [EGC]',
    value: 'EGC',
  },
  {
    name: "Béziers, France - Béziers Cap d'Agde Airport [BZR]",
    value: 'BZR',
  },
  {
    name: 'Biarritz, France - Biarritz Pays Basque Airport [BIQ]',
    value: 'BIQ',
  },
  {
    name: 'Brest, France - Brest Bretagne Airport [BES]',
    value: 'BES',
  },
  {
    name: 'Carcassonne, France - Carcassonne Airport [CCF]',
    value: 'CCF',
  },
  {
    name: 'Châlons-en-Champagne, France - Châlons Vatry Airport [XCR]',
    value: 'XCR',
  },
  {
    name: 'Chambéry, France - Chambéry Airport [CMF]',
    value: 'CMF',
  },
  {
    name: 'Dinard, France - Dinard Pleurtuit Saint Malo Airport [DNR]',
    value: 'DNR',
  },
  {
    name: 'Figari, France - Figari Sud Corse Airport [FSC]',
    value: 'FSC',
  },
  {
    name: 'Grenoble, France - Alpes–Isère Airport [GNB]',
    value: 'GNB',
  },
  {
    name: 'Île de Ré, France - La Rochelle – Île de Ré Airport [LRH]',
    value: 'LRH',
  },
  {
    name: 'Limoges, France - Limoges – Bellegarde Airport [LIG]',
    value: 'LIG',
  },
  {
    name: 'Lyon, France - Lyon–Saint Exupéry Airport [LYS]',
    value: 'LYS',
  },
  {
    name: 'Marseille, France - Marseille Provence Airport [MRS]',
    value: 'MRS',
  },
  {
    name: 'Mulhouse, France - EuroAirport Basel Mulhouse Freiburg [BSL]',
    value: 'BSL',
  },
  {
    name: 'Nantes, France - Nantes Atlantique Airport [NTE]',
    value: 'NTE',
  },
  {
    name: "Nice, France - Nice Côte d'Azur Airport [NCE]",
    value: 'NCE',
  },
  {
    name: 'Nîmes, France - Nîmes–Alès–Camargue–Cévennes Airport [FNI]',
    value: 'FNI',
  },
  {
    name: 'Paris, France - Charles de Gaulle Airport [CDG]',
    value: 'CDG',
  },
  {
    name: 'Paris, France - Orly Airport [ORY]',
    value: 'ORY',
  },
  {
    name: 'Pau, France - Pau Pyrénées Airport [PUF]',
    value: 'PUF',
  },
  {
    name: 'Perpignan, France - Perpignan–Rivesaltes Airport [PGF]',
    value: 'PGF',
  },
  {
    name: 'Poitiers, France - Poitiers–Biard Airport [PIS]',
    value: 'PIS',
  },
  {
    name: 'Rodez, France - Rodez–Aveyron Airport [RDZ]',
    value: 'RDZ',
  },
  {
    name: 'Rodez, France - Rodez–Aveyron Airport [RDZ]',
    value: 'RDZ',
  },
  {
    name: 'Saint-Étienne, France - Saint-Étienne–Bouthéon Airport [EBU]',
    value: 'EBU',
  },
  {
    name: 'Strasbourg, France - Strasbourg Airport [SXB]',
    value: 'SXB',
  },
  {
    name: 'Toulon, France - Toulon–Hyères Airport [TLN]',
    value: 'TLN',
  },
  {
    name: 'Tours, France - Tours Val de Loire Airport [TUF]',
    value: 'TUF',
  },
  {
    name: 'Gibraltar, Gibraltar - Gibraltar International Airport [GIB]',
    value: 'GIB',
  },
  {
    name: 'Tours, France - Tours Val de Loire Airport [TUF]',
    value: 'TUF',
  },
  {
    name: 'Tours, France - Tours Val de Loire Airport [TUF]',
    value: 'TUF',
  },
  {
    name: 'Gibraltar, Gibraltar - Gibraltar International Airport [GIB]',
    value: 'GIB',
  },
  {
    name: 'Alderney, Guernsey - Alderney Airport [ACI]',
    value: 'ACI',
  },
  {
    name: 'Guernsey, Guernsey - Guernsey Airport [GCI]',
    value: 'GCI',
  },
  {
    name: 'Jersey, Jersey - Jersey Airport [JER]',
    value: 'JER',
  },
  {
    name: 'Cork, Ireland - Cork Airport [ORK]',
    value: 'ORK',
  },
  {
    name: 'Dublin, Ireland - Dublin Airport [DUB]',
    value: 'DUB',
  },
  {
    name: 'Kerry, Ireland - Kerry Airport [KIR]',
    value: 'KIR',
  },
  {
    name: 'Knock, Ireland - Ireland West Airport [NOC]',
    value: 'NOC',
  },
  {
    name: 'Shannon, Ireland - Shannon Airport [SNN]',
    value: 'SNN',
  },
  {
    name: 'Isle of Man, Isle of Man - Isle of Man Airport [IOM]',
    value: 'IOM',
  },
  {
    name: 'Luxembourg City, Luxembourg - Findel Airport [LUX]',
    value: 'LUX',
  },
  {
    name: 'Amsterdam, Netherlands - Amsterdam Airport Schiphol [AMS]',
    value: 'AMS',
  },
  {
    name: 'Groningen, Netherlands - Groningen Airport Eelde [GRQ]',
    value: 'GRQ',
  },
  {
    name: 'Maastricht, Netherlands - Maastricht Aachen Airport [MST]',
    value: 'MST',
  },
  {
    name: 'Rotterdam, Netherlands - Rotterdam The Hague Airport [RTM]',
    value: 'RTM',
  },
  {
    name: 'Graz, Austria - Graz Airport [GRZ]',
    value: 'GRZ',
  },
  {
    name: 'Klagenfurt, Austria - Klagenfurt Airport [KLU]',
    value: 'KLU',
  },
  {
    name: 'Innsbruck, Austria - Innsbruck Airport [INN]',
    value: 'INN',
  },
  {
    name: 'Linz, Austria - Linz Airport [LNZ]',
    value: 'LNZ',
  },
  {
    name: 'Salzburg, Austria - Salzburg Airport [SZG]',
    value: 'SZG',
  },
  {
    name: 'Vienna, Austria - Vienna International Airport [VIE]',
    value: 'VIE',
  },
  {
    name: 'Brno, Czech Republic - Brno–Tuřany Airport [BRQ]',
    value: 'BRQ',
  },
  {
    name: 'Karlovy Vary, Czech Republic - Karlovy Vary Airport [KLV]',
    value: 'KLV',
  },
  {
    name: 'Ostrava, Czech Republic - Leoš Janáček Airport Ostrava [OSR]',
    value: 'OSR',
  },
  {
    name: 'Prague, Czech Republic - Václav Havel Airport Prague [PRG]',
    value: 'PRG',
  },
  {
    name: 'Pardubice, Czech Republic - Pardubice Airport [PED]',
    value: 'PED',
  },
  {
    name: 'Baden/Karlsruhe, Germany - Karlsruhe/Baden-Baden Airport [FKB]',
    value: 'FKB',
  },
  {
    name: 'Berlin, Germany - Berlin Brandenburg Airport [BER]',
    value: 'BER',
  },
  {
    name: 'Bremen, Germany - Bremen Airport [BRE]',
    value: 'BRE',
  },
  {
    name: 'Cologne/Bonn, Germany - Cologne/Bonn Airport [CGN]',
    value: 'CGN',
  },
  {
    name: 'Dortmund, Germany - Dortmund Airport [DTM]',
    value: 'DTM',
  },
  {
    name: 'Düsseldorf, Germany - Düsseldorf Airport [DUS]',
    value: 'DUS',
  },
  {
    name: 'Frankfurt, Germany - Frankfurt Airport [FRA]',
    value: 'FRA',
  },
  {
    name: 'Freiburg im Breisgau, Germany - EuroAirport Basel–Mulhouse–Freiburg [MLH]',
    value: 'MLH',
  },
  {
    name: 'Friedrichshafen, Germany - Friedrichshafen Airport [FDH]',
    value: 'FDH',
  },
  {
    name: 'Hamburg, Germany - Hamburg Airport [HAM]',
    value: 'HAM',
  },
  {
    name: 'Hanover, Germany - Hannover Airport [HAJ]',
    value: 'HAJ',
  },
  {
    name: 'Leipzig, Germany - Leipzig/Halle Airport [LEJ]',
    value: 'LEJ',
  },
  {
    name: 'Lübeck, Germany - Lübeck Airport [LBC]',
    value: 'LBC',
  },
  {
    name: 'Memmingen, Germany - Memmingen Airport [FMM]',
    value: 'FMM',
  },
  {
    name: 'Munich, Germany - Munich Airport [MUC]',
    value: 'MUC',
  },
  {
    name: 'Nuremberg, Germany - Nuremberg Airport [MUC]',
    value: 'MUC',
  },
  {
    name: 'Stuttgart, Germany - Stuttgart Airport [STR]',
    value: 'STR',
  },
  {
    name: 'Weeze, Germany - Weeze Airport [NRN]',
    value: 'NRN',
  },
  {
    name: 'Budapest, Hungary - Budapest Ferenc Liszt International Airport [BUD]',
    value: 'BUD',
  },
  {
    name: 'Budapest, Hungary - Budapest Ferenc Liszt International Airport [BUD]',
    value: 'BUD',
  },
  {
    name: 'Debrecen, Hungary - Debrecen International Airport [DEB]',
    value: 'DEB',
  },
  {
    name: 'Hévíz, Hungary - Hévíz-Balaton Airport [SOB]',
    value: 'SOB',
  },
  {
    name: 'Győr, Hungary - Győr-Pér International Airport [QGY]',
    value: 'QGY',
  },
  {
    name: 'Pécs, Hungary - Pécs-Pogány International Airport [QPJ]',
    value: 'QPJ',
  },
  {
    name: 'Pécs, Hungary - Pécs-Pogány International Airport [QPJ]',
    value: 'QPJ',
  },
  {
    name: 'Bratislava, Hungary - Bratislava Airport [BTS]',
    value: 'BTS',
  },
  {
    name: 'Košice, Slovakia - Košice International Airport [KSC]',
    value: 'KSC',
  },
  {
    name: 'Piešťany, Slovakia - Piešťany Airport [KSC]',
    value: 'KSC',
  },
  {
    name: 'Poprad, Slovakia - Poprad-Tatry Airport [TAT]',
    value: 'TAT',
  },
  {
    name: 'Sliač, Slovakia - Sliač Airport [SLD]',
    value: 'SLD',
  },
  {
    name: 'Žilina, Slovakia - Žilina Airport [ILZ]',
    value: 'ILZ',
  },
  {
    name: 'Basel, Switzerland - EuroAirport Basel Mulhouse Freiburg [BSL]',
    value: 'BSL',
  },
  {
    name: 'Bern, Switzerland - Bern Airport [BRN]',
    value: 'BRN',
  },
  {
    name: 'Geneva, Switzerland - Geneva Airport [GVA]',
    value: 'GVA',
  },
  {
    name: 'Lugano, Switzerland - Lugano Airport [LUG]',
    value: 'LUG',
  },
  {
    name: 'St. Gallen, Switzerland - St. Gallen–Altenrhein Airport [ACH]',
    value: 'ACH',
  },
  {
    name: 'Zürich, Switzerland - Zurich Airport [ZRH]',
    value: 'ZRH',
  },
  {
    name: 'Zürich, Switzerland - Zurich Airport [ZRH]',
    value: 'ZRH',
  },
  {
    name: 'Bydgoszcz, Poland - Bydgoszcz Ignacy Jan Paderewski Airport [BZG]',
    value: 'BZG',
  },
  {
    name: 'Gdańsk, Poland - Gdańsk Lech Wałęsa Airport [GDN]',
    value: 'GDN',
  },
  {
    name: 'Katowice, Poland - Katowice Airport [KTW]',
    value: 'KTW',
  },
  {
    name: 'Kraków, Poland - Kraków John Paul II International Airport [KRK]',
    value: 'KRK',
  },
  {
    name: 'Lublin, Poland - Lublin Airport [LUZ]',
    value: 'LUZ',
  },
  {
    name: 'Łódź, Poland - Łódź Władysław Reymont Airport [LCJ]',
    value: 'LCJ',
  },
  {
    name: 'Poznań, Poland - Poznań–Ławica Airport [POZ]',
    value: 'POZ',
  },
  {
    name: 'Rzeszów, Poland - Rzeszów–Jasionka Airport [RZE]',
    value: 'RZE',
  },
  {
    name: 'Szczecin, Poland - Solidarity Szczecin–Goleniów Airport [SZZ]',
    value: 'SZZ',
  },
  {
    name: 'Warsaw, Poland - Warsaw Chopin Airport [WAW]',
    value: 'WAW',
  },
  {
    name: 'Warsaw, Poland - Warsaw Modlin Airport [WMI]',
    value: 'WMI',
  },
  {
    name: 'Wrocław, Poland - Copernicus Airport Wrocław [WRO]',
    value: 'WRO',
  },
  {
    name: 'Wrocław, Poland - Copernicus Airport Wrocław [WRO]',
    value: 'WRO',
  },
  {
    name: 'Brač, Croatia - Brač Airport [BWK]',
    value: 'BWK',
  },
  {
    name: 'Dubrovnik, Croatia - Dubrovnik Airport [DBV]',
    value: 'DBV',
  },
  {
    name: 'Mali Lošinj, Croatia - Lošinj Airport [LSZ]',
    value: 'LSZ',
  },
  {
    name: 'Osijek, Croatia - Osijek Airport [OSI]',
    value: 'OSI',
  },
  {
    name: 'Pula, Croatia - Pula Airport [PUY]',
    value: 'PUY',
  },
  {
    name: 'Rijeka, Croatia - Rijeka Airport [RJK]',
    value: 'RJK',
  },
  {
    name: 'Split, Croatia - Split Airport [SPU]',
    value: 'SPU',
  },
  {
    name: 'Zadar, Croatia - Zadar Airport [ZAD]',
    value: 'ZAD',
  },
  {
    name: 'Zagreb, Croatia - Zagreb Airport [ZAG]',
    value: 'ZAG',
  },
  {
    name: 'Larnaca, Cyprus - Larnaca International Airport [LCA]',
    value: 'LCA',
  },
  {
    name: 'Paphos, Cyprus - Paphos International Airport [PFO]',
    value: 'PFO',
  },
  {
    name: 'North Nicosia, Cyprus - Ercan International Airport [ECN]',
    value: 'ECN',
  },
  {
    name: 'Athens, Greece - Athens International Airport [ATH]',
    value: 'ATH',
  },
  {
    name: 'Cephalonia, Greece - Kefalonia Island International Airport [EFL]',
    value: 'EFL',
  },
  {
    name: 'Chania, Greece - Chania International Airport [CHQ]',
    value: 'CHQ',
  },
  {
    name: 'Chios, Greece - Chios Island National Airport [JKH]',
    value: 'JKH',
  },
  {
    name: 'Corfu, Greece - Corfu International Airport [CFU]',
    value: 'CFU',
  },
  {
    name: 'Heraklion, Greece - Heraklion International Airport [HER]',
    value: 'HER',
  },
  {
    name: 'Karpathos, Greece - Karpathos Island National Airport [AOK]',
    value: 'AOK',
  },
  {
    name: 'Kavala, Greece - Kavala International Airport [KVA]',
    value: 'KVA',
  },
  {
    name: 'Kos, Greece - Kos International Airport [KGS]',
    value: 'KGS',
  },
  {
    name: 'Mykonos, Greece - Mykonos Airport [JMK]',
    value: 'JMK',
  },
  {
    name: 'Mytilene, Greece - Mytilene International Airport [MJT]',
    value: 'MJT',
  },
  {
    name: 'Preveza, Greece - Aktion National Airport [PVK]',
    value: 'PVK',
  },
  {
    name: 'Rhodes, Greece - Rhodes International Airport [RHO]',
    value: 'RHO',
  },
  {
    name: 'Samos, Greece - Samos International Airport [SMI]',
    value: 'SMI',
  },
  {
    name: 'Santorini, Greece - Santorini (Thira) International Airport [JTR]',
    value: 'JTR',
  },
  {
    name: 'Santorini, Greece - Santorini (Thira) International Airport [JTR]',
    value: 'JTR',
  },
  {
    name: 'Adrar, Algeria - Touat-Cheikh Sidi Mohamed Belkebir Airport [AZR]',
    value: 'AZR',
  },
  {
    name: 'Algiers, Algeria - Houari Boumediene Airport [ALG]',
    value: 'ALG',
  },
  {
    name: 'Annaba, Algeria - Rabah Bitat Airport [AAE]',
    value: 'AAE',
  },
  {
    name: 'Béjaïa, Algeria - Soummam Airport [BJA]',
    value: 'BJA',
  },
  {
    name: 'Batna, Algeria - Batna Airport [BLJ]',
    value: 'BLJ',
  },
  {
    name: 'Oumache, Algeria - Biskra Airport [BSK]',
    value: 'BSK',
  },
  {
    name: 'Chlef, Algeria - Chlef International Airport [CFK]',
    value: 'CFK',
  },
  {
    name: 'Constantine, Algeria - Mohamed Boudiaf International Airport [CZL]',
    value: 'CZL',
  },
  {
    name: 'Hassi Messaoud, Algeria - Oued Irara Airport [HME]',
    value: 'HME',
  },
  {
    name: 'Jijel, Algeria - Jijel Ferhat Abbas Airport [GJL]',
    value: 'GJL',
  },
  {
    name: 'Oran, Algeria - Oran Es Senia Airport [ORN]',
    value: 'ORN',
  },
  {
    name: 'Sétif, Algeria - Ain Arnat Airport [QSF]',
    value: 'QSF',
  },
  {
    name: 'Tamanrasset, Algeria - Tamanrasset Airport [TMR]',
    value: 'TMR',
  },
  {
    name: 'Tlemcen, Algeria - Zenata – Messali El Hadj Airport [TLM]',
    value: 'TLM',
  },
  {
    name: 'Alexandria, Egypt - Borg El Arab Airport [HBE]',
    value: 'HBE',
  },
  {
    name: 'Alexandria, Egypt - El Nouzha Airport [ALY]',
    value: 'ALY',
  },
  {
    name: 'Asyut, Egypt - Assiut Airport [ATZ]',
    value: 'ATZ',
  },
  {
    name: 'Aswan, Egypt - Aswan International Airport [ASW]',
    value: 'ASW',
  },
  {
    name: 'Cairo, Egypt - Cairo International Airport [CAI]',
    value: 'CAI',
  },
  {
    name: 'El Arish, Egypt - El Arish International Airport [AAC]',
    value: 'AAC',
  },
  {
    name: 'El Dabaa, Egypt - El Alamein International Airport [DBB]',
    value: 'DBB',
  },
  {
    name: 'Hurghada, Egypt - Hurghada International Airport [HRG]',
    value: 'HRG',
  },
  {
    name: 'Luxor, Egypt - Luxor International Airport [LXR]',
    value: 'LXR',
  },
  {
    name: 'Marsa Alam, Egypt - Marsa Alam International Airport [RMF]',
    value: 'RMF',
  },
  {
    name: 'Mersa Matruh, Egypt - Mersa Matruh International Airport [MUH]',
    value: 'MUH',
  },
  {
    name: 'Saint Catherine, Egypt - St. Catherine International Airport [SKV]',
    value: 'SKV',
  },
  {
    name: 'Sharm El Sheikh, Egypt - Sharm El Sheikh International Airport [SSH]',
    value: 'SSH',
  },
  {
    name: 'Sohag, Egypt - Sohag International Airport [HMB]',
    value: 'HMB',
  },
  {
    name: 'Taba, Egypt - Taba International Airport [TCP]',
    value: 'TCP',
  },
  {
    name: 'Benghazi, Libya - Benina International Airport [BEN]',
    value: 'BEN',
  },
  {
    name: 'Sabha, Libya - Sabha Airport [SEB]',
    value: 'SEB',
  },
  {
    name: 'Tripoli, Libya - Tripoli International Airport [TIP]',
    value: 'TIP',
  },
  {
    name: 'Tajoura, Libya - Mitiga International Airport [MJI]',
    value: 'MJI',
  },
  {
    name: 'Agadir, Morocco - Agadir–Al Massira Airport [AGA]',
    value: 'AGA',
  },
  {
    name: 'Casablanca, Morocco - Mohammed V International Airport [CMN]',
    value: 'CMN',
  },
  {
    name: 'Fes, Morocco - Fès–Saïs Airport [FEZ]',
    value: 'FEZ',
  },
  {
    name: 'Marrakech, Morocco - Marrakesh Menara Airport [RAK]',
    value: 'RAK',
  },
  {
    name: 'Nador, Morocco - Nador International Airport [NDR]',
    value: 'NDR',
  },
  {
    name: 'Oujda, Morocco - Angads Airport [OUD]',
    value: 'OUD',
  },
  {
    name: 'Rabat, Morocco - Rabat–Salé Airport [RBA]',
    value: 'RBA',
  },
  {
    name: 'Tangier, Morocco - Tangier Ibn Battouta Airport [TNG]',
    value: 'TNG',
  },
  {
    name: 'Tetouan, Morocco - Sania Ramel Airport [TTU]',
    value: 'TTU',
  },
  {
    name: 'Dakhla, Morocco - Dakhla Airport [VIL]',
    value: 'VIL',
  },
  {
    name: 'Laayoune, Morocco - Hassan I Airport [EUN]',
    value: 'EUN',
  },
  {
    name: 'Khartoum, Sudan - Khartoum International Airport [KRT]',
    value: 'KRT',
  },
  {
    name: 'Port Sudan, Sudan - Port Sudan New International Airport [PZU]',
    value: 'PZU',
  },
  {
    name: 'Djerba, Tunisia - Djerba–Zarzis International Airport [DJE]',
    value: 'DJE',
  },
  {
    name: 'Enfidha, Tunisia - Enfidha–Hammamet International Airport [NBE]',
    value: 'NBE',
  },
  {
    name: 'Monastir, Tunisia - Monastir Habib Bourguiba International Airport [MIR]',
    value: 'MIR',
  },
  {
    name: 'Sfax, Tunisia - Sfax–Thyna International Airport [SFA]',
    value: 'SFA',
  },
  {
    name: 'Tabarka, Tunisia - Tabarka–Aïn Draham International Airport [TBJ]',
    value: 'TBJ',
  },
  {
    name: 'Tozeur, Tunisia - Tozeur–Nefta International Airport [TOE]',
    value: 'TOE',
  },
  {
    name: 'Tunis, Tunisia - Tunis–Carthage International Airport [TUN]',
    value: 'TUN',
  },
  {
    name: 'Cotonou, Benin - Cadjehoun Airport [COO]',
    value: 'COO',
  },

  {
    name: 'Bobo-Dioulasso, Burkina Faso - Bobo Dioulasso Airport [BOY]',
    value: 'BOY',
  },
  {
    name: 'Ouagadougou, Burkina Faso - Thomas Sankara International Airport Ouagadougou [OUA]',
    value: 'OUA',
  },
  {
    name: 'Boa Vista, Cape Verde - Aristides Pereira International Airport [BVC]',
    value: 'BVC',
  },
  {
    name: 'Sal Island, Cape Verde - Amílcar Cabral International Airport [SID]',
    value: 'SID',
  },
  {
    name: 'Praia, Santiago Island, Cape Verde - Nelson Mandela International Airport [RAI]',
    value: 'RAI',
  },
  {
    name: 'São Vicente, Cape Verde - Cesária Évora Airport [VXE]',
    value: 'VXE',
  },
  {
    name: "Abidjan, Côte d'Ivoire - Cesária Évora Airport [BJL]",
    value: 'BJL',
  },
  {
    name: 'Accra, Ghana - Kotoka International Airport [ACC]',
    value: 'ACC',
  },
  {
    name: 'Kumasi, Ghana - Kumasi International Airport [KMS]',
    value: 'ACC',
  },
  {
    name: 'Takoradi, Ghana - Takoradi Airport [TKD]',
    value: 'TKD',
  },
  {
    name: 'Sunyani, Ghana - Sunyani Airport [NYI]',
    value: 'NYI',
  },
  {
    name: 'Ho, Ghana - Ho Airport [HZO]',
    value: 'HZO',
  },
  {
    name: 'Wa, Ghana - Wa Airport [WZA]',
    value: 'WZA',
  },
  {
    name: 'Tamale, Ghana - Tamale Airport [TML]',
    value: 'TML',
  },
  {
    name: 'Conakry, Guinea - Conakry International Airport [CKY]',
    value: 'CKY',
  },
  {
    name: 'Bissau, Guinea-Bissau - Osvaldo Vieira International Airport [OXB]',
    value: 'OXB',
  },
  {
    name: 'Bubaque, Guinea-Bissau - Bubaque Airport [BQE]',
    value: 'BQE',
  },
  {
    name: 'Monrovia, Liberia - Roberts International Airport [ROB]',
    value: 'ROB',
  },
  {
    name: 'Bamako, Mali - Modibo Keita International Airport [BKO]',
    value: 'BKO',
  },
  {
    name: 'Nouakchott, Mauritania - Nouakchott–Oumtounsy International Airport [NKC]',
    value: 'NKC',
  },
  {
    name: 'Nouadhibou, Mauritania - Nouadhibou International Airport [NDB]',
    value: 'NDB',
  },
  {
    name: 'Niamey, Niger - Diori Hamani International Airport [NIM]',
    value: 'NIM',
  },
  {
    name: 'Abuja, Nigeria - Nnamdi Azikiwe International Airport [ABV]',
    value: 'ABV',
  },
  {
    name: 'Calabar, Nigeria - Margaret Ekpo International Airport [CBQ]',
    value: 'CBQ',
  },
  {
    name: 'Asaba, Delta, Nigeria - Asaba International Airport [ABB]',
    value: 'ABB',
  },
  {
    name: 'Kano, Nigeria - Mallam Aminu Kano International Airport [KAN]',
    value: 'KAN',
  },
  {
    name: 'Lagos, Nigeria - Murtala Muhammed International Airport [LOS]',
    value: 'LOS',
  },
  {
    name: 'Port Harcourt, Nigeria - Port Harcourt International Airport [PHC]',
    value: 'PHC',
  },
  {
    name: 'Enugu, Nigeria - Akanu Ibiam International Airport [ENU]',
    value: 'ENU',
  },
  {
    name: 'Sokoto, Nigeria - Sadiq Abubakar III International Airport [SKO]',
    value: 'SKO',
  },
  {
    name: 'Saint Helena, Saint Helena, Ascension and Tristan da Cunha - Saint Helena Airport [HLE]',
    value: 'HLE',
  },
  {
    name: 'Dakar, Senegal - Blaise Diagne International Airport [DSS]',
    value: 'DSS',
  },
  {
    name: 'Sierra Leone, Senegal - Lungi International Airport [FNA]',
    value: 'FNA',
  },
  {
    name: 'Lomé, Togo - Lomé–Tokoin International Airport [LFW]',
    value: 'LFW',
  },
  {
    name: 'Luanda, Angola - Quatro de Fevereiro Airport [LAD]',
    value: 'LAD',
  },
  {
    name: 'Lubango, Angola - Lubango Airport [SDD]',
    value: 'SDD',
  },
  {
    name: 'Douala, Cameroon - Douala International Airport [DLA]',
    value: 'DLA',
  },
  {
    name: 'Yaoundé, Cameroon - Yaoundé Nsimalen International Airport [NSI]',
    value: 'NSI',
  },
  {
    name: "Bangui, Central African Republic - Bangui M'Poko International Airport [BGF]",
    value: 'BGF',
  },
  {
    name: "N'Djamena, Chad - N'Djamena International Airport [NDJ]",
    value: 'NDJ',
  },
  {
    name: 'Goma, Democratic Republic of the Congo - Goma International Airport [GOM]',
    value: 'GOM',
  },
  {
    name: "Kinshasa, Democratic Republic of the Congo - N'djili Airport [FIH]",
    value: 'FIH',
  },
  {
    name: 'Kisangani, Democratic Republic of the Congo - Kisangani Bangoka International Airport [FKI]',
    value: 'FKI',
  },
  {
    name: 'Lubumbashi, Democratic Republic of the Congo - Lubumbashi International Airport [FBM]',
    value: 'FBM',
  },
  {
    name: 'Brazzaville, Republic of the Congo - Maya-Maya Airport [BZV]',
    value: 'BZV',
  },
  {
    name: 'Pointe-Noire, Republic of the Congo - Agostinho-Neto International Airport [PNR]',
    value: 'PNR',
  },
  {
    name: 'Malabo, Equatorial Guinea - Malabo International Airport [SSG]',
    value: 'SSG',
  },
  {
    name: "Franceville, Gabon - M'Vengue El Hadj Omar Bongo Ondimba International Airport [MVB]",
    value: 'MVB',
  },
  {
    name: 'Libreville, Gabon - Léon-Mba International Airport [LBV]',
    value: 'LBV',
  },
  {
    name: 'Port-Gentil, Gabon - Port-Gentil International Airport [POG]',
    value: 'POG',
  },
  {
    name: 'São Tomé, São Tomé and Príncipe - São Tomé International Airport [TMS]',
    value: 'TMS',
  },
  {
    name: 'Gaborone, Botswana - Sir Seretse Khama International Airport [GBE]',
    value: 'GBE',
  },
  {
    name: 'Maun, Botswana - Maun Airport [MUB]',
    value: 'MUB',
  },
  {
    name: 'Francistown - Francistown International Airport [FRW]',
    value: 'FRW',
  },
  {
    name: 'Kasane, Botswana - Kasane Airport [BBK]',
    value: 'BBK',
  },
  {
    name: 'Manzini, Eswatini - King Mswati III International Airport [SHO]',
    value: 'SHO',
  },
  {
    name: 'Maseru, Lesotho - Moshoeshoe I International Airport [MSU]',
    value: 'MSU',
  },
  {
    name: 'Windhoek, Namibia - Hosea Kutako International Airport [WDH]',
    value: 'WDH',
  },
  {
    name: 'Walvis Bay, Namibia - Walvis Bay Airport [WVB]',
    value: 'WVB',
  },
  {
    name: 'Cape Town, South Africa - Cape Town International Airport [CPT]',
    value: 'CPT',
  },
  {
    name: 'Durban, South Africa - King Shaka International Airport [DUR]',
    value: 'DUR',
  },
  {
    name: 'Johannesburg, South Africa - O. R. Tambo International Airport [JNB]',
    value: 'JNB',
  },
  {
    name: 'Johannesburg, South Africa - Lanseria International Airport [HLA]',
    value: 'HLA',
  },
  {
    name: 'Nelspruit, South Africa - Kruger Mpumalanga International Airport [MQP]',
    value: 'MQP',
  },
  {
    name: 'Bloemfontein, South Africa - Bram Fischer International Airport [BFN]',
    value: 'BFN',
  },
  {
    name: 'East London, South Africa - East London Airport [ELS]',
    value: 'ELS',
  },
  {
    name: 'Bujumbura, Burundi - Bujumbura International Airport [BJM]',
    value: 'BJM',
  },
  {
    name: 'Moroni, Comoros - Prince Said Ibrahim International Airport [HAH]',
    value: 'HAH',
  },
  {
    name: 'Djibouti City, Djibouti - Djibouti–Ambouli International Airport [JIB]',
    value: 'JIB',
  },
  {
    name: 'Asmara, Eritrea - Asmara International Airport [ASM]',
    value: 'ASM',
  },
  {
    name: 'Addis Ababa, Ethiopia -Addis Ababa Bole International Airport [ADD]',
    value: 'ADD',
  },
  {
    name: 'Dire Dawa, Ethiopia - Dire Dawa Airport [DIR]',
    value: 'DIR',
  },
  {
    name: 'Eldoret, Kenya - Eldoret International Airport [EDL]',
    value: 'EDL',
  },
  {
    name: 'Mombasa, Kenya - Moi International Airport [MBA]',
    value: 'MBA',
  },
  {
    name: 'Kisumu, Kenya - Kisumu International Airport [KIS]',
    value: 'KIS',
  },
  {
    name: 'Nairobi, Kenya - Jomo Kenyatta International Airport [NBO]',
    value: 'NBO',
  },
  {
    name: 'Antananarivo, Madagascar - Ivato International Airport [TNR]',
    value: 'TNR',
  },
  {
    name: 'Antsiranana, Madagascar - Arrachart Airport [DIE]',
    value: 'DIE',
  },
  {
    name: 'Mahajanga, Madagascar - Amborovy Airport [MJN]',
    value: 'MJN',
  },
  {
    name: 'Nosy Be, Madagascar - Fascene Airport [NOS]',
    value: 'NOS',
  },
  {
    name: 'Toamasina, Madagascar - Toamasina Airport [TMM]',
    value: 'TMM',
  },
  {
    name: 'Tôlanaro, Madagascar - Tôlanaro Airport [FTU]',
    value: 'FTU',
  },
  {
    name: 'Toliara, Madagascar - Toliara Airport [TLE]',
    value: 'TLE',
  },
  {
    name: 'Blantyre, Malawi - Chileka International Airport [BLZ]',
    value: 'BLZ',
  },
  {
    name: 'Lilongwe, Malawi - Lilongwe International Airport [LLW]',
    value: 'LLW',
  },
  {
    name: 'Plaine Magnien, Mauritius - Sir Seewoosagur Ramgoolam International Airport [MRU]',
    value: 'MRU',
  },
  {
    name: 'Dzaoudzi, Mayotte - Dzaoudzi–Pamandzi International Airport [DZA]',
    value: 'DZA',
  },
  {
    name: 'Maputo, Mozambique - Maputo International Airport [MPM]',
    value: 'MPM',
  },
  {
    name: 'Beira, Mozambique - Beira Airport [BEW]',
    value: 'BEW',
  },
  {
    name: 'Inhambane, Mozambique - Inhambane Airport [INH]',
    value: 'INH',
  },
  {
    name: 'Nampula, Mozambique - Nampula Airport [APL]',
    value: 'APL',
  },
  {
    name: 'Pemba, Mozambique - Pemba Airport [POL]',
    value: 'POL',
  },
  {
    name: 'Tete, Mozambique - Chingozi Airport [TET]',
    value: 'TET',
  },
  {
    name: 'Vilankulo, Mozambique - Vilankulo Airport [VNX]',
    value: 'VNX',
  },
  {
    name: 'Saint-Denis, Réunion - Roland Garros Airport [RUN]',
    value: 'RUN',
  },
  {
    name: 'Kigali, Rwanda - Kigali International Airport [KGL]',
    value: 'KGL',
  },
  {
    name: 'Victoria, Seychelles - Seychelles International Airport [SEZ]',
    value: 'SEZ',
  },
  {
    name: 'Bosaso, Somalia - Bosaso Airport [BSA]',
    value: 'BSA',
  },
  {
    name: 'Galkayo, Somalia - Abdullahi Yusuf Airport [GBY]',
    value: 'GBY',
  },
  {
    name: 'Garoowe, Somalia - Garowe Airport [GGR]',
    value: 'GGR',
  },
  {
    name: 'Hargeisa, Somalia - Hargeisa Airport [HGA]',
    value: 'HGA',
  },
  {
    name: 'Kismayo, Somalia - Kismayo Airport [KMU]',
    value: 'KMU',
  },
  {
    name: 'Mogadishu, Somalia - Aden Adde International Airport [MGQ]',
    value: 'MGQ',
  },
  {
    name: 'Juba, South Sudan - Juba International Airport [JUB]',
    value: 'JUB',
  },
  {
    name: 'Arusha, Tanzania - Arusha Airport [ARK]',
    value: 'ARK',
  },
  {
    name: 'Dar es Salaam, Tanzania - Julius Nyerere International Airport [DAR]',
    value: 'DAR',
  },
  {
    name: 'Hai District, Tanzania - Kilimanjaro International Airport [JRO]',
    value: 'JRO',
  },
  {
    name: 'Mwanza, Tanzania - Mwanza Airport [MWZ]',
    value: 'MWZ',
  },
  {
    name: 'Unguja, Zanzibar, Tanzania - Abeid Amani Karume International Airport [ZNZ]',
    value: 'ZNZ',
  },
  {
    name: 'Arua, Uganda - Arua Airport [RUA]',
    value: 'RUA',
  },
  {
    name: 'Entebbe, Uganda - Entebbe International Airport [EBB]',
    value: 'EBB',
  },
  {
    name: 'Gulu, Uganda - Gulu Airport [ULU]',
    value: 'ULU',
  },
  {
    name: 'Livingstone, Harry Mwanga Nkumbula International Airport [LVI]',
    value: 'LVI',
  },
  {
    name: 'Lusaka,Kenneth Kaunda International Airport [LUN]',
    value: 'LUN',
  },
  {
    name: 'Ndola, Zambia - Simon Mwansa Kapwepwe International Airport [NLA]',
    value: 'NLA',
  },
  {
    name: 'Harare, Zimbabwe - Robert Gabriel Mugabe International Airport [HRE]',
    value: 'HRE',
  },
  {
    name: 'Victoria Falls, Zimbabwe - Victoria Falls Airport [VFA]',
    value: 'VFA',
  },
  {
    name: 'Bulawayo, Zimbabwe - Joshua Mqabuko Nkomo International Airport [BUQ]',
    value: 'BUQ',
  },
  {
    name: 'Aktau, Kazakhstan - Aktau Airport [SCO]',
    value: 'SCO',
  },
  {
    name: 'Aktobe, Kazakhstan - Aktobe International Airport [AKX]',
    value: 'AKX',
  },
  {
    name: 'Almaty, Kazakhstan - Almaty International Airport [ALA]',
    value: 'ALA',
  },
  {
    name: 'Atyrau, Kazakhstan - Atyrau Airport [GUW]',
    value: 'GUW',
  },
  {
    name: 'Karaganda, Kazakhstan - Karaganda Airport [KGF]',
    value: 'KGF',
  },
  {
    name: 'Kokshetau, Kazakhstan - Kokshetau Airport [KOV]',
    value: 'KOV',
  },
  {
    name: 'Kostanay, Kazakhstan - Kostanay Airport [KSN]',
    value: 'KSN',
  },
  {
    name: 'Kyzylorda, Kazakhstan - Kyzylorda Airport [KZO]',
    value: 'KZO',
  },
  {
    name: 'Nur-Sultan, Kazakhstan - Nursultan Nazarbayev International Airport [TSE]',
    value: 'TSE',
  },
  {
    name: 'Oral, Kazakhstan - Oral Ak Zhol Airport [URA]',
    value: 'URA',
  },
  {
    name: 'Oskemen, Kazakhstan - Oskemen Airport [UKK]',
    value: 'UKK',
  },
  {
    name: 'Pavlodar, Kazakhstan - Pavlodar Airport [PWQ]',
    value: 'PWQ',
  },
  {
    name: 'Petropavl, Kazakhstan - Petropavl Airport [PPK]',
    value: 'PPK',
  },
  {
    name: 'Semey, Kazakhstan - Semey Airport [PLX]',
    value: 'PLX',
  },
  {
    name: 'Shymkent, Kazakhstan - Shymkent Airport [CIT]',
    value: 'CIT',
  },
  {
    name: 'Taraz, Kazakhstan - Taraz Airport [DMB]',
    value: 'DMB',
  },
  {
    name: 'Bishkek, Kyrgyzstan - Manas International Airport [FRU]',
    value: 'FRU',
  },
  {
    name: 'Issyk-Kul, Kyrgyzstan - Issyk-Kul International Airport [IKU]',
    value: 'IKU',
  },
  {
    name: 'Karakol, Kyrgyzstan - Karakol International Airport [КПЖ (Russian)]',
    value: 'КПЖ (Russian)',
  },
  {
    name: 'Osh, Kyrgyzstan - Osh Airport [OSS]',
    value: 'OSS',
  },
  {
    name: 'Bokhtar, Tajikistan - Bokhtar International Airport [KQT]',
    value: 'KQT',
  },
  {
    name: 'Dushanbe, Tajikistan - Dushanbe Airport [DYU]',
    value: 'DYU',
  },
  {
    name: 'Khujand, Tajikistan - Khujand Airport [LBD]',
    value: 'LBD',
  },
  {
    name: 'Kulob, Tajikistan - Kulob Airport [TJU]',
    value: 'TJU',
  },
  {
    name: 'Ashgabat, Turkmenistan - Ashgabat Airport [ASB]',
    value: 'ASB',
  },
  {
    name: 'Da?oguz, Turkmenistan - Da?oguz Airport [TAZ]',
    value: 'TAZ',
  },
  {
    name: 'Mary, Turkmenistan - Mary International Airport [MYP]',
    value: 'MYP',
  },
  {
    name: 'Turkmenbashi, Turkmenistan - Turkmenbashi International Airport [KRW]',
    value: 'KRW',
  },
  {
    name: 'Trkmenabat, Turkmenistan - Turkmenabat International Airport [CRZ]',
    value: 'CRZ',
  },
  {
    name: 'Andijan, Uzbekistan - Andizhan Airport [AZN]',
    value: 'AZN',
  },
  {
    name: 'Bukhara, Uzbekistan - Bukhara International Airport [BHK]',
    value: 'BHK',
  },
  {
    name: 'Fergana, Uzbekistan - Fergana International Airport [FEG]',
    value: 'FEG',
  },
  {
    name: 'Qarshi, Uzbekistan - Karshi Airport [KSQ]',
    value: 'KSQ',
  },
  {
    name: 'Namangan, Uzbekistan - Namangan Airport [NMA]',
    value: 'NMA',
  },
  {
    name: 'Navoi, Uzbekistan - Navoi International Airport [NVI]',
    value: 'NVI',
  },
  {
    name: 'Nukus, Uzbekistan - Nukus Airport [NCU]',
    value: 'NCU',
  },
  {
    name: 'Samarkand, Uzbekistan - Samarkand International Airport [SKD]',
    value: 'SKD',
  },
  {
    name: 'Tashkent, Uzbekistan - Islam Karimov Tashkent International Airport [TAS]',
    value: 'TAS',
  },
  {
    name: 'Termez, Uzbekistan - Termez Airport [TMJ]',
    value: 'TMJ',
  },
  {
    name: 'Urgench, Uzbekistan - Urgench International Airport [UGC]',
    value: 'UGC',
  },
  {
    name: 'Pyongyang, North Korea - Pyongyang International Airport [FNJ]',
    value: 'FNJ',
  },
  {
    name: 'Akita, Japan - Akita Airport [AXT]',
    value: 'AXT',
  },
  {
    name: 'Aomori, Japan - Aomori Airport [AOJ]',
    value: 'AOJ',
  },
  {
    name: 'Fukuoka, Japan - Fukuoka Airport [FUK]',
    value: 'FUK',
  },
  {
    name: 'Hakodate, Japan - Hakodate Airport [HKD]',
    value: 'HKD',
  },
  {
    name: 'Kagoshima, Japan - Kagoshima Airport [KOJ]',
    value: 'KOJ',
  },
  {
    name: 'Komatsu, Japan - Komatsu Airport [KMQ]',
    value: 'KMQ',
  },
  {
    name: 'Hiroshima, Japan - Hiroshima Airport [HIJ]',
    value: 'HIJ',
  },
  {
    name: 'Kitakyushu, Japan - Kitakyushu Airport [KKJ]',
    value: 'KKJ',
  },
  {
    name: 'Nagasaki, Japan - Nagasaki Airport [NGS]',
    value: 'NGS',
  },
  {
    name: 'Naha, Japan - Naha Airport [OKA]',
    value: 'OKA',
  },
  {
    name: 'Nagoya, Japan - Chubu Centrair International Airport [NGO]',
    value: 'NGO',
  },
  {
    name: 'Niigata, Japan - Niigata Airport [KIJ]',
    value: 'KIJ',
  },
  {
    name: '?ita, Japan - Oita Airport [OIT]',
    value: 'OIT',
  },
  {
    name: 'Okayama, Japan - Okayama Airport [OKJ]',
    value: 'OKJ',
  },
  {
    name: 'Osaka, Japan - Kansai International Airport [KIX]',
    value: 'KIX',
  },
  {
    name: 'Sapporo, Japan - New Chitose Airport [CTS]',
    value: 'CTS',
  },
  {
    name: 'Sendai, Japan - Sendai Airport [SDJ]',
    value: 'SDJ',
  },
  {
    name: 'Shizuoka, Japan - Shizuoka Airport [FSZ]',
    value: 'FSZ',
  },
  {
    name: 'Tokyo/Yokohama, Japan - Haneda Airport [HND]',
    value: 'HND',
  },
  {
    name: 'Tokyo/Chiba, Japan - Narita International Airport [NRT]',
    value: 'NRT',
  },
  {
    name: 'Ulaanbaatar, Mongolia - Chinggis Khaan International Airport [ULN]',
    value: 'ULN',
  },
  {
    name: 'Baotou, China - Baotou Donghe Airport [BAV]',
    value: 'BAV',
  },
  {
    name: 'Beihai, China - Beihai Fucheng Airport [BHY]',
    value: 'BHY',
  },
  {
    name: 'Beijing, China - Beijing Capital International Airport [PEK]',
    value: 'PEK',
  },
  {
    name: 'Beijing, China - Beijing Daxing International Airport [PKX]',
    value: 'PKX',
  },
  {
    name: 'Changchun, China - Changchun Longjia International Airport [CGQ]',
    value: 'CGQ',
  },
  {
    name: 'Changsha, China - Changsha Huanghua International Airport [CSX]',
    value: 'CSX',
  },
  {
    name: 'Changzhou, China - Changzhou Benniu International Airport [CZX]',
    value: 'CZX',
  },
  {
    name: 'Chengdu, China - Chengdu Shuangliu International Airport [CTU]',
    value: 'CTU',
  },
  {
    name: 'Chengdu, China - Chengdu Tianfu International Airport [TFU]',
    value: 'TFU',
  },
  {
    name: 'Chongqing, China - Chongqing Jiangbei International Airport [CKG]',
    value: 'CKG',
  },
  {
    name: 'Dalian, China - Dalian Zhoushuizi International Airport [DLC]',
    value: 'DLC',
  },
  {
    name: 'Dandong, China - Dandong Langtou Airport [DDG]',
    value: 'DDG',
  },
  {
    name: 'Datong, China - Datong Yungang Airport [DAT]',
    value: 'DAT',
  },
  {
    name: 'Dunhuang, China - Dunhuang Mogao International Airport [DNH]',
    value: 'DNH',
  },
  {
    name: 'Enshi City, China - Enshi Xujiaping Airport [ENH]',
    value: 'ENH',
  },
  {
    name: 'Fuzhou, China - Fuzhou Changle International Airport [FOC]',
    value: 'FOC',
  },
  {
    name: 'Ganzhou, China - Ganzhou Huangjin Airport [KOW]',
    value: 'KOW',
  },
  {
    name: 'Guangzhou, China - Guangzhou Baiyun International Airport [CAN]',
    value: 'CAN',
  },
  {
    name: 'Guilin, China - Guilin Liangjiang International Airport [KWL]',
    value: 'KWL',
  },
  {
    name: 'Guiyang, China - Guiyang Longdongbao International Airport [KWE]',
    value: 'KWE',
  },
  {
    name: 'Haikou, China - Haikou Meilan International Airport [HAK]',
    value: 'HAK',
  },
  {
    name: 'Hangzhou, China - Hangzhou Xiaoshan International Airport [HGH]',
    value: 'HGH',
  },
  {
    name: 'Harbin, China - Harbin Taiping International Airport [HRB]',
    value: 'HRB',
  },
  {
    name: 'Hefei, China - Hefei Xinqiao International Airport [HFE]',
    value: 'HFE',
  },
  {
    name: 'Heihe, China - Heihe Aihui Airport [HEK]',
    value: 'HEK',
  },
  {
    name: 'Hohhot, China - Hohhot Baita International Airport [HET]',
    value: 'HET',
  },
  {
    name: "Huai'an, China - Huai'an Lianshui International Airport [HIA]",
    value: 'HIA',
  },
  {
    name: 'Huangshan City, China - Huangshan Tunxi International Airport [TXN]',
    value: 'TXN',
  },
  {
    name: 'Hulunbuir, China - Hulunbuir Hailar Airport [HLD]',
    value: 'HLD',
  },
  {
    name: 'Jiamusi, China - Jiamusi Dongjiao Airport [JMU]',
    value: 'JMU',
  },
  {
    name: 'Jieyang, China - Jieyang Chaoshan International Airport [SWA]',
    value: 'SWA',
  },
  {
    name: 'Jinan, China - Jinan Yaoqiang International Airport [TNA]',
    value: 'TNA',
  },
  {
    name: 'Kunming, China - Kunming Changshui International Airport [KMG]',
    value: 'KMG',
  },
  {
    name: 'Lanzhou, China - Lanzhou Zhongchuan International Airport [LHW]',
    value: 'LHW',
  },
  {
    name: 'Lhasa, China - Lhasa Gonggar Airport [LXA]',
    value: 'LXA',
  },
  {
    name: 'Lianyungang, China - Lianyungang Baitabu Airport [LYG]',
    value: 'LYG',
  },
  {
    name: 'Lijiang, China - Lijiang Sanyi International Airport [LJG]',
    value: 'LJG',
  },
  {
    name: 'Linyi, China - Linyi Qiyang Airport [LYI]',
    value: 'LYI',
  },
  {
    name: 'Luoyang, China - Luoyang Beijiao Airport [LYA]',
    value: 'LYA',
  },
  {
    name: 'Mangshi,Dehong Mangshi Airport [LUM]',
    value: 'LUM',
  },
  {
    name: 'Manzhouli, China - Manzhouli Xijiao Airport [NZH]',
    value: 'NZH',
  },
  {
    name: 'Meizhou, China - Meixian Airport [MXZ]',
    value: 'MXZ',
  },
  {
    name: 'Mudanjiang, China - Mudanjiang Hailang International Airport [MDG]',
    value: 'MDG',
  },
  {
    name: 'Nanchang, China - Nanchang Changbei International Airport [KHN]',
    value: 'KHN',
  },
  {
    name: 'Nanjing, China - Nanjing Lukou International Airport [NKG]',
    value: 'NKG',
  },
  {
    name: 'Nanning, China - Nanning Wuxu International Airport [NNG]',
    value: 'NNG',
  },
  {
    name: 'Nantong, China - Nantong Xingdong International Airport [NTG]',
    value: 'NTG',
  },
  {
    name: 'Ningbo, China - Ningbo Lishe International Airport [NGB]',
    value: 'NGB',
  },
  {
    name: 'Ordos City, China - Ordos Ejin Horo International Airport [DSN]',
    value: 'DSN',
  },
  {
    name: 'Qingdao, China - Qingdao Liuting International Airport [TAO]',
    value: 'TAO',
  },
  {
    name: 'Qinhuangdao, China - Qinhuangdao Beidaihe Airport [BPE]',
    value: 'BPE',
  },
  {
    name: 'Qiqihar, China - Qiqihar Sanjiazi Airport [NDG]',
    value: 'NDG',
  },
  {
    name: 'Quanzhou, China - Quanzhou Jinjiang International Airport [JJN]',
    value: 'JJN',
  },
  {
    name: 'Sanya, China - Sanya Phoenix International Airport [SYX]',
    value: 'SYX',
  },
  {
    name: 'Shanghai, China - Shanghai Hongqiao International Airport [SHA]',
    value: 'SHA',
  },
  {
    name: 'Shanghai, China - Shanghai Pudong International Airport [PVG]',
    value: 'PVG',
  },
  {
    name: 'Shenyang, China - Shenyang Taoxian International Airport [SHE]',
    value: 'SHE',
  },
  {
    name: "Shenzhen, China - Shenzhen Bao'an International Airport [SZX]",
    value: 'SZX',
  },
  {
    name: 'Shijiazhuang, China - Shijiazhuang Zhengding International Airport [SJW]',
    value: 'SJW',
  },
  {
    name: 'Taiyuan, China - Taiyuan Wusu International Airport [TYN]',
    value: 'TYN',
  },
  {
    name: 'Tianjin, China - Tianjin Binhai International Airport [TSN]',
    value: 'TSN',
  },
  {
    name: 'Ulanqab, China - Ulanqab Jining Airport [UCB]',
    value: 'UCB',
  },
  {
    name: 'šrmqi, China - šrmqi Diwopu International Airport [URC]',
    value: 'URC',
  },
  {
    name: 'Wanzhou, China - Wanzhou Wuqiao Airport [WXN]',
    value: 'WXN',
  },
  {
    name: 'Weihai, China - Weihai Dashuibo Airport [WEH]',
    value: 'WEH',
  },
  {
    name: 'Wenzhou, China - Wenzhou Yongqiang Airport [WNZ]',
    value: 'WNZ',
  },
  {
    name: 'Wuhan, China - Wuhan Tianhe International Airport [WUH]',
    value: 'WUH',
  },
  {
    name: 'Wuxi, China - Sunan Shuofang International Airport [WUX]',
    value: 'WUX',
  },
  {
    name: 'Wuyishan, China - Wuyishan Airport [WUS]',
    value: 'WUS',
  },
  {
    name: 'Xiamen, China - Xiamen Gaoqi International Airport [XMN]',
    value: 'XMN',
  },
  {
    name: "Xi'an, China - Xi'an Xianyang International Airport [XIY]",
    value: 'XIY',
  },
  {
    name: 'Xining, China - Xining Caojiabao International Airport [XNN]',
    value: 'XNN',
  },
  {
    name: 'Xinzhou, China - Xinzhou Wutaishan Airport [WUT]',
    value: 'WUT',
  },
  {
    name: 'Xishuangbanna, China - Xishuangbanna Gasa International Airport [JHG]',
    value: 'JHG',
  },
  {
    name: 'Xuzhou, China - Xuzhou Guanyin Airport [XUZ]',
    value: 'XUZ',
  },
  {
    name: 'Yancheng, China - Yancheng Nanyang Airport [YNZ]',
    value: 'YNZ',
  },
  {
    name: 'Yangzhou, China - Yangzhou Taizhou International Airport [YTY]',
    value: 'YTY',
  },
  {
    name: 'Yanji, China - Yanji Airport [YNJ]',
    value: 'YNJ',
  },
  {
    name: 'Yantai, China - Yantai Penglai International Airport [YNT]',
    value: 'YNT',
  },
  {
    name: 'Yichang, China - Yichang Sanxia Airport [YIH]',
    value: 'YIH',
  },
  {
    name: 'Yinchuan, China - Yinchuan Hedong International Airport [INC]',
    value: 'INC',
  },
  {
    name: 'Yiwu, China - Yiwu Airport [YIW]',
    value: 'YIW',
  },
  {
    name: 'Yuncheng, China - Yuncheng Guangong Airport [YCU]',
    value: 'YCU',
  },
  {
    name: 'Zhangjiajie, China - Zhangjiajie Hehua Airport [DYG]',
    value: 'DYG',
  },
  {
    name: 'Zhanjiang, China - Zhanjiang Airport [ZHA]',
    value: 'ZHA',
  },
  {
    name: 'Zhengzhou, China - Zhengzhou Xinzheng International Airport [CGO]',
    value: 'CGO',
  },
  {
    name: 'Zhuhai, China - Zhuhai Jinwan Airport [ZUH]',
    value: 'ZUH',
  },
  {
    name: 'Zunyi, China - Zunyi Xinzhou Airport [ZYI]',
    value: 'ZYI',
  },
  {
    name: 'Hong Kong, Hong Kong - Hong Kong International Airport [HKG]',
    value: 'HKG',
  },
  {
    name: 'Macau, Macau - Macau International Airport [MFM]',
    value: 'MFM',
  },
  {
    name: 'Hualien City, Taiwan - Hualien Airport [HUN]',
    value: 'HUN',
  },
  {
    name: 'Kaohsiung, Taiwan - Kaohsiung International Airport [KHH]',
    value: 'KHH',
  },
  {
    name: 'Taichung, Taiwan - Taichung International Airport [RMQ]',
    value: 'RMQ',
  },
  {
    name: 'Tainan, Taiwan - Tainan Airport [TNN]',
    value: 'TNN',
  },
  {
    name: 'Taipei, Taiwan - Taipei Songshan Airport [TSA]',
    value: 'TSA',
  },
  {
    name: 'Taoyuan, Taiwan - Taoyuan International Airport [TPE]',
    value: 'TPE',
  },
  {
    name: 'Busan, South Korea - Gimhae International Airport [PUS]',
    value: 'PUS',
  },
  {
    name: 'Daegu, South Korea - Daegu International Airport [TAE]',
    value: 'TAE',
  },
  {
    name: 'Jeju, South Korea - Jeju International Airport [CJU]',
    value: 'CJU',
  },
  {
    name: 'Seoul, South Korea - Gimpo International Airport [GMP]',
    value: 'GMP',
  },
  {
    name: 'Incheon, South Korea - Incheon International Airport [ICN]',
    value: 'ICN',
  },
  {
    name: 'Cheongju, South Korea - Cheongju International Airport [CJJ]',
    value: 'CJJ',
  },
  {
    name: 'Muan, South Korea - Muan International Airport [MWX]',
    value: 'MWX',
  },
  {
    name: 'Yangyang, South Korea - Yangyang International Airport [YNY]',
    value: 'YNY',
  },
  {
    name: 'Chittagong, Bangladesh - Shah Amanat International Airport [CGP]',
    value: 'CGP',
  },
  {
    name: 'Dhaka, Bangladesh - Shahjalal International Airport [DAC]',
    value: 'DAC',
  },
  {
    name: 'Sylhet, Bangladesh - Osmani International Airport [ZYL]',
    value: 'ZYL',
  },
  {
    name: 'Paro, Bhutan - Paro Airport [PBH]',
    value: 'PBH',
  },
  {
    name: 'Agartala, India - Maharaja Bir Bikram Airport [IXA]',
    value: 'IXA',
  },
  {
    name: 'Ahmedabad, India - Sardar Vallabhbhai Patel International Airport [AMD]',
    value: 'AMD',
  },
  {
    name: 'Amritsar, India - Sri Guru Ram Dass Jee International Airport [ATQ]',
    value: 'ATQ',
  },
  {
    name: 'Bangalore, India - Kempegowda International Airport [BLR]',
    value: 'BLR',
  },
  {
    name: 'Bhubaneswar, India - Biju Patnaik Airport [BBI]',
    value: 'BBI',
  },
  {
    name: 'Chennai, India - Chennai International Airport [MAA]',
    value: 'MAA',
  },
  {
    name: 'Coimbatore, India - Coimbatore International Airport [CJB]',
    value: 'CJB',
  },
  {
    name: 'Delhi, India - Indira Gandhi International Airport [DEL]',
    value: 'DEL',
  },
  {
    name: 'Goa, India - Dabolim Airport [GOI]',
    value: 'GOI',
  },
  {
    name: 'Gaya, India - Gaya Airport [GAY]',
    value: 'GAY',
  },
  {
    name: 'Guwahati, India - Lokpriya Gopinath Bordoloi International Airport [GAU]',
    value: 'GAU',
  },
  {
    name: 'Hyderabad, India - Rajiv Gandhi International Airport [HYD]',
    value: 'HYD',
  },
  {
    name: 'Imphal, India - Imphal Airport [IMF]',
    value: 'IMF',
  },
  {
    name: 'Indore, India - Devi Ahilya Bai Holkar Airport [IDR]',
    value: 'IDR',
  },
  {
    name: 'Jaipur, India - Jaipur International Airport [JAI]',
    value: 'JAI',
  },
  {
    name: 'Kannur, India - Kannur International Airport [CNN]',
    value: 'CNN',
  },
  {
    name: 'Kochi, India - Cochin International Airport [COK]',
    value: 'COK',
  },
  {
    name: 'Kolkata, India - Netaji Subhas Chandra Bose International Airport [CCU]',
    value: 'CCU',
  },
  {
    name: 'Kozhikode, India - Calicut International Airport [CCJ]',
    value: 'CCJ',
  },
  {
    name: 'Lucknow, India - Chaudhary Charan Singh Airport [LKO]',
    value: 'LKO',
  },
  {
    name: 'Madurai, India - Madurai Airport [IXM]',
    value: 'IXM',
  },
  {
    name: 'Mangalore, India - Mangalore International Airport [IXE]',
    value: 'IXE',
  },
  {
    name: 'Mumbai, India - Chhatrapati Shivaji Maharaj International Airport [BOM]',
    value: 'BOM',
  },
  {
    name: 'Nagpur, India - Dr. Babasaheb Ambedkar International Airport [NAG]',
    value: 'NAG',
  },
  {
    name: 'Pune, India - Pune Airport [PNQ]',
    value: 'PNQ',
  },
  {
    name: 'Ranchi, India - Birsa Munda Airport [IXR]',
    value: 'IXR',
  },
  {
    name: 'Siliguri, India - Bagdogra Airport [IXB]',
    value: 'IXB',
  },
  {
    name: 'Srinagar, India - Sheikh ul-Alam International Airport [SXR]',
    value: 'SXR',
  },
  {
    name: 'Surat, India - Surat Airport [STV]',
    value: 'STV',
  },
  {
    name: 'Thiruvananthapuram, India - Trivandrum International Airport [TRV]',
    value: 'TRV',
  },
  {
    name: 'Tirupati, India - Tirupati International Airport [TIR]',
    value: 'TIR',
  },
  {
    name: 'Trichy, India - Tiruchirappalli International Airport [TRZ]',
    value: 'TRZ',
  },
  {
    name: 'Vadodara, India - Vadodara Airport [BDQ]',
    value: 'BDQ',
  },
  {
    name: 'Varanasi, India - Lal Bahadur Shastri Airport [VNS]',
    value: 'VNS',
  },
  {
    name: 'Vijayawada, India - NTR Amaravati International Airport [VGA]',
    value: 'VGA',
  },
  {
    name: 'Visakhapatnam, India - Visakhapatnam International Airport [VTZ]',
    value: 'VTZ',
  },
  {
    name: 'Hulhul Island, Maldives - Velana International Airport [MLE]',
    value: 'MLE',
  },
  {
    name: 'Addu City, Maldives - Gan International Airport [GAN]',
    value: 'GAN',
  },
  {
    name: 'Hanimaadhoo, Maldives - Hanimaadhoo International Airport [HAQ]',
    value: 'HAQ',
  },
  {
    name: 'Maamigili, Maldives - Villa International Airport Maamigili [VAM]',
    value: 'VAM',
  },
  {
    name: 'Maafaru, Maldives - Maafaru International Airport [VRDA]',
    value: 'VRDA',
  },
  {
    name: 'Kathmandu, Nepal - Tribhuvan International Airport [KTM]',
    value: 'KTM',
  },
  {
    name: 'Bhairahawa, Nepal - Gautam Buddha International Airport [BWA]',
    value: 'BWA',
  },
  {
    name: 'Bahawalpur, Pakistan - Bahawalpur Airport [BHV]',
    value: 'BHV',
  },
  {
    name: 'Faisalabad, Pakistan - Faisalabad International Airport [LYP]',
    value: 'LYP',
  },
  {
    name: 'Gwadar, Pakistan - Gwadar International Airport [GWD]',
    value: 'GWD',
  },
  {
    name: 'Islamabad, Pakistan - Islamabad International Airport [ISB]',
    value: 'ISB',
  },
  {
    name: 'Karachi, Pakistan - Jinnah International Airport [KHI]',
    value: 'KHI',
  },
  {
    name: 'Lahore, Pakistan - Allama Iqbal International Airport [LHE]',
    value: 'LHE',
  },
  {
    name: 'Multan, Pakistan - Multan International Airport [MUX]',
    value: 'MUX',
  },
  {
    name: 'Peshawar, Pakistan - Bacha Khan International Airport [PEW]',
    value: 'PEW',
  },
  {
    name: 'Quetta, Pakistan - Quetta International Airport [UET]',
    value: 'UET',
  },
  {
    name: 'Rahim Yar Khan, Pakistan - Shaikh Zayed International Airport [RYK]',
    value: 'RYK',
  },
  {
    name: 'Sialkot, Pakistan - Sialkot International Airport [SKT]',
    value: 'SKT',
  },
  {
    name: 'Turbat, Pakistan - Turbat International Airport [TUK]',
    value: 'TUK',
  },
  {
    name: 'Colombo, Sri Lanka - Bandaranaike International Airport [CMB]',
    value: 'CMB',
  },
  {
    name: 'Colombo, Sri Lanka - Ratmalana Airport [RML]',
    value: 'RML',
  },
  {
    name: 'Hambantota, Sri Lanka - Mattala Rajapaksa International Airport [HRI]',
    value: 'HRI',
  },
  {
    name: 'Jaffna, Sri Lanka - Jaffna International Airport [JAF]',
    value: 'JAF',
  },
  {
    name: 'Bandar Seri Begawan, Brunei - Brunei International Airport [BWN]',
    value: 'BWN',
  },
  {
    name: 'Phnom Penh, Cambodia - Phnom Penh International Airport [PNH]',
    value: 'PNH',
  },
  {
    name: 'Siem Reap, Cambodia - Siem Reap International Airport [REP]',
    value: 'REP',
  },
  {
    name: 'Sihanoukville, Cambodia - Sihanouk International Airport [KOS]',
    value: 'KOS',
  },
  {
    name: 'Dili, East Timor - Presidente Nicolau Lobato International Airport [DIL]',
    value: 'DIL',
  },
  {
    name: 'Balikpapan, Indonesia - Sultan Aji Muhammad Sulaiman Sepinggan Airport [BPN]',
    value: 'BPN',
  },
  {
    name: 'Banda Aceh, Indonesia - Sultan Iskandar Muda International Airport [BTJ]',
    value: 'BTJ',
  },
  {
    name: 'Bandar Lampung, Indonesia - Radin Inten II International Airport [TKG]',
    value: 'TKG',
  },
  {
    name: 'Bandung, Indonesia - Husein Sastranegara International Airport [BDO]',
    value: 'BDO',
  },
  {
    name: 'Bandung, Indonesia - Kertajati International Airport [KJT]',
    value: 'KJT',
  },
  {
    name: 'Banjarmasin, Indonesia - Syamsudin Noor International Airport [BDJ]',
    value: 'BDJ',
  },
  {
    name: 'Banyuwangi, Indonesia - Banyuwangi International Airport [BWX]',
    value: 'BWX',
  },
  {
    name: 'Batam, Indonesia - Hang Nadim International Airport [BTH]',
    value: 'BTH',
  },
  {
    name: 'Biak, Indonesia - Frans Kaisiepo International Airport [BIK]',
    value: 'BIK',
  },
  {
    name: 'Denpasar, Indonesia - Ngurah Rai International Airport [DPS]',
    value: 'DPS',
  },
  {
    name: 'Jakarta, Indonesia - Halim Perdanakusuma International Airport [HLP]',
    value: 'HLP',
  },
  {
    name: 'Jakarta, Indonesia - Soekarno?Hatta International Airport [CGK]',
    value: 'CGK',
  },
  {
    name: 'Kupang, Indonesia - El Tari International Airport [KOE]',
    value: 'KOE',
  },
  {
    name: 'Makassar, Indonesia - Sultan Hasanuddin International Airport [UPG]',
    value: 'UPG',
  },
  {
    name: 'Manado, Indonesia - Sam Ratulangi International Airport [MDC]',
    value: 'MDC',
  },
  {
    name: 'Mataram, Indonesia - Lombok International Airport [LOP]',
    value: 'LOP',
  },
  {
    name: 'Medan, Indonesia - Kualanamu International Airport [KNO]',
    value: 'KNO',
  },
  {
    name: 'Padang, Indonesia - Minangkabau International Airport [PDG]',
    value: 'PDG',
  },
  {
    name: 'Palembang, Indonesia - Sultan Mahmud Badaruddin II International Airport [PLM]',
    value: 'PLM',
  },
  {
    name: 'Pekanbaru, Indonesia - Sultan Syarif Kasim II International Airport [PKU]',
    value: 'PKU',
  },
  {
    name: 'Pontianak, Indonesia - Supadio International Airport [PNK]',
    value: 'PNK',
  },
  {
    name: 'Semarang, Indonesia - Jenderal Ahmad Yani International Airport [SRG]',
    value: 'SRG',
  },
  {
    name: 'Siborong-Borong, Indonesia - Sisingamangaraja XII International Airport [DTB]',
    value: 'DTB',
  },
  {
    name: 'Surabaya, Indonesia - Juanda International Airport [SUB]',
    value: 'SUB',
  },
  {
    name: 'Surakarta, Indonesia - Adisumarmo International Airport [SOC]',
    value: 'SOC',
  },
  {
    name: 'Tanjung Pandan, Indonesia - H.A.S. Hanandjoeddin International Airport [TJQ]',
    value: 'TJQ',
  },
  {
    name: 'Tarakan, Indonesia - Juwata International Airport [TRK]',
    value: 'TRK',
  },
  {
    name: 'Yogyakarta, Indonesia - Yogyakarta International Airport [YIA]',
    value: 'YIA',
  },
  {
    name: 'Luang Prabang, Laos - Luang Prabang International Airport [LPQ]',
    value: 'LPQ',
  },
  {
    name: 'Pakse, Laos - Pakse International Airport [PKZ]',
    value: 'PKZ',
  },
  {
    name: 'Savannakhet, Laos - Savannakhet Airport [ZVK]',
    value: 'ZVK',
  },
  {
    name: 'Vientiane, Laos - Wattay International Airport [VTE]',
    value: 'VTE',
  },
  {
    name: 'Alor Setar, Malaysia - Sultan Abdul Halim Airport [AOR]',
    value: 'AOR',
  },
  {
    name: 'Ipoh, Malaysia - Sultan Azlan Shah Airport [IPH]',
    value: 'IPH',
  },
  {
    name: 'Johor Bahru, Malaysia - Senai International Airport [JHB]',
    value: 'JHB',
  },
  {
    name: 'Kota Bharu, Malaysia - Sultan Ismail Petra Airport [KBR]',
    value: 'KBR',
  },
  {
    name: 'Kota Kinabalu, Malaysia - Kota Kinabalu International Airport [BKI]',
    value: 'BKI',
  },
  {
    name: 'Kuala Lumpur/Sepang, Malaysia - Kuala Lumpur International Airport [KUL]',
    value: 'KUL',
  },
  {
    name: 'Kuala Terengganu, Malaysia - Sultan Mahmud Airport [TGG]',
    value: 'TGG',
  },
  {
    name: 'Kuantan, Malaysia - Sultan Haji Ahmad Shah Airport [KUA]',
    value: 'KUA',
  },
  {
    name: 'Kuching, Malaysia - Kuching International Airport [KCH]',
    value: 'KCH',
  },
  {
    name: 'Langkawi, Malaysia - Langkawi International Airport [LGK]',
    value: 'LGK',
  },
  {
    name: 'Penang, Malaysia - Penang International Airport [PEN]',
    value: 'PEN',
  },
  {
    name: 'Subang, Malaysia - Sultan Abdul Aziz Shah Airport [SZB]',
    value: 'SZB',
  },
  {
    name: 'Mandalay, Myanmar (Burma) - Mandalay International Airport [MDL]',
    value: 'MDL',
  },
  {
    name: 'Yangon, Myanmar (Burma) - Yangon International Airport [RGN]',
    value: 'RGN',
  },
  {
    name: 'Naypyidaw, Myanmar (Burma) - Naypyidaw International Airport [NYT]',
    value: 'NYT',
  },
  {
    name: 'Batanes, Philippines - Basco Airport [BSO]',
    value: 'BSO',
  },
  {
    name: 'Cagayan, Philippines - Cagayan North International Airport [LLC]',
    value: 'LLC',
  },
  {
    name: 'Lapu-Lapu City, Philippines - Mactan?Cebu International Airport [CEB]',
    value: 'CEB',
  },
  {
    name: 'Angeles City, Philippines - Clark International Airport [CRK]',
    value: 'CRK',
  },
  {
    name: 'Davao City, Philippines - Francisco Bangoy International Airport [DVO]',
    value: 'DVO',
  },
  {
    name: 'General Santos, Philippines - General Santos International Airport [GES]',
    value: 'GES',
  },
  {
    name: 'Iloilo City, Philippines - Iloilo International Airport [ILO]',
    value: 'ILO',
  },
  {
    name: 'Kalibo, Philippines - Kalibo International Airport [KLO]',
    value: 'KLO',
  },
  {
    name: 'Laoag, Philippines - Laoag International Airport [LAO]',
    value: 'LAO',
  },
  {
    name: 'Manila, Philippines - Ninoy Aquino International Airport [MNL]',
    value: 'MNL',
  },
  {
    name: 'Panglao Island, Philippines - Bohol?Panglao International Airport [TAG]',
    value: 'TAG',
  },
  {
    name: 'Puerto Princesa, Philippines - Puerto Princesa International Airport [PPS]',
    value: 'PPS',
  },
  {
    name: 'Olongapo, Philippines - Subic Bay International Airport [SFS]',
    value: 'SFS',
  },
  {
    name: 'Zamboanga City, Philippines - Zamboanga International Airport [ZAM]',
    value: 'ZAM',
  },
  {
    name: 'Singapore, Singapore - Changi Airport [SIN]',
    value: 'SIN',
  },
  {
    name: 'Singapore, Singapore - Seletar Airport [XSP]',
    value: 'XSP',
  },
  {
    name: 'Bangkok/Samut Prakan, Thailand - Suvarnabhumi Airport [BKK]',
    value: 'BKK',
  },
  {
    name: 'Bangkok, Thailand - Don Mueang International Airport [DMK]',
    value: 'DMK',
  },
  {
    name: 'Chiang Mai, Thailand - Chiang Mai International Airport [CNX]',
    value: 'CNX',
  },
  {
    name: 'Chiang Rai, Thailand - Chiang Rai International Airport [CEI]',
    value: 'CEI',
  },
  {
    name: 'Rayong/Pattaya, Thailand - U-Tapao International Airport [UTP]',
    value: 'UTP',
  },
  {
    name: 'Hat Yai, Thailand - Hat Yai International Airport [HDY]',
    value: 'HDY',
  },
  {
    name: 'Krabi, Thailand - Krabi International Airport [KBV]',
    value: 'KBV',
  },
  {
    name: 'Phuket, Thailand - Phuket International Airport [HKT]',
    value: 'HKT',
  },
  {
    name: 'Surat Thani, Thailand - Surat Thani International Airport [URT]',
    value: 'URT',
  },
  {
    name: 'Ko Samui, Thailand - Samui Airport [USM]',
    value: 'USM',
  },
  {
    name: 'Udon Thani, Thailand - Udon Thani International Airport [UTH]',
    value: 'UTH',
  },
  {
    name: 'Da Nang, Vietnam - Da Nang International Airport [DAD]',
    value: 'DAD',
  },
  {
    name: 'Hanoi, Vietnam - Noi Bai International Airport [HAN]',
    value: 'HAN',
  },
  {
    name: 'Ho Chi Minh City, Vietnam - Tan Son Nhat International Airport [SGN]',
    value: 'SGN',
  },
  {
    name: 'Can Tho, Vietnam - Can Tho International Airport [VCA]',
    value: 'VCA',
  },
  {
    name: 'Haiphong, Vietnam - Cat Bi International Airport [HPH]',
    value: 'HPH',
  },
  {
    name: 'Huế, Vietnam - Phu Bai International Airport [HUI]',
    value: 'HUI',
  },
  {
    name: 'Phu Quoc, Vietnam - Phu Quoc International Airport [PQC]',
    value: 'PQC',
  },
  {
    name: 'Nha Trang, Vietnam - Cam Ranh International Airport [CXR]',
    value: 'CXR',
  },
  {
    name: 'Quảng Nam, Vietnam - Chu Lai Airport [VCL]',
    value: 'VCL',
  },
  {
    name: 'Kabul, Afghanistan - Kabul International Airport [KBL]',
    value: 'KBL',
  },
  {
    name: 'Herat, Afghanistan - Herat International Airport [HEA]',
    value: 'HEA',
  },
  {
    name: 'Kandahar, Afghanistan - Kandahar International Airport [KDH]',
    value: 'KDH',
  },
  {
    name: 'Mazar-i-Sharif, Afghanistan - Mazar-i-Sharif International Airport [MZR]',
    value: 'MZR',
  },
  {
    name: 'Manama, Bahrain - Bahrain International Airport [BAH]',
    value: 'BAH',
  },
  {
    name: 'Abadan, Iran - Abadan International Airport [ABD]',
    value: 'ABD',
  },
  {
    name: 'Ahvaz, Iran - Ahvaz International Airport [AWZ]',
    value: 'AWZ',
  },
  {
    name: 'Arak, Iran - Arak International Airport [AJK]',
    value: 'AJK',
  },
  {
    name: 'Ardabil, Iran - Ardabil Airport [ADU]',
    value: 'ADU',
  },
  {
    name: 'Asaluyeh, Iran - Persian Gulf Airport [PGU]',
    value: 'PGU',
  },
  {
    name: 'Bandar Abbas, Iran - Bandar Abbas International Airport [BND]',
    value: 'BND',
  },
  {
    name: 'Birjand, Iran - Birjand International Airport [XBJ]',
    value: 'XBJ',
  },
  {
    name: 'Bushehr, Iran - Bushehr Airport [BUZ]',
    value: 'BUZ',
  },
  {
    name: 'Gorgan, Iran - Gorgan International Airport [GBT]',
    value: 'GBT',
  },
  {
    name: 'Hamadan, Iran - Hamadan International Airport [HDM]',
    value: 'HDM',
  },
  {
    name: 'Ilam, Iran - Ilam Airport [IIL]',
    value: 'IIL',
  },
  {
    name: 'Isfahan, Iran - Isfahan International Airport [IFN]',
    value: 'IFN',
  },
  {
    name: 'Kerman, Iran - Ayatollah Hashemi Rafsanjani Airport [KER]',
    value: 'KER',
  },
  {
    name: 'Kermanshah, Iran - Shahid Ashrafi Esfahani Airport [KSH]',
    value: 'KSH',
  },
  {
    name: 'Kish Island, Iran - Kish Airport [KIH]',
    value: 'KIH',
  },
  {
    name: 'Konarak, Iran - Chabahar Konarak Airport [ZBR]',
    value: 'ZBR',
  },
  {
    name: 'Lamerd, Iran - Lamerd Airport [LFM]',
    value: 'LFM',
  },
  {
    name: 'Lar, Iran - Larestan International Airport [LRR]',
    value: 'LRR',
  },
  {
    name: 'Mashhad, Iran - Mashhad International Airport [MHD]',
    value: 'MHD',
  },
  {
    name: 'Qeshm Island, Iran - Qeshm International Airport [GSM]',
    value: 'GSM',
  },
  {
    name: 'Rasht, Iran - Rasht Airport [RAS]',
    value: 'RAS',
  },
  {
    name: 'Sari, Iran - Dasht-e Naz Airport [SRY]',
    value: 'SRY',
  },
  {
    name: 'Shiraz, Iran - Shiraz International Airport [SYZ]',
    value: 'SYZ',
  },
  {
    name: 'Tabriz, Iran - Tabriz International Airport [TBZ]',
    value: 'TBZ',
  },
  {
    name: 'Tehran, Iran - Imam Khomeini International Airport [IKA]',
    value: 'IKA',
  },
  {
    name: 'Tehran, Iran - Mehrabad International Airport [THR]',
    value: 'THR',
  },
  {
    name: 'Urmia, Iran - Urmia Airport [OMH]',
    value: 'OMH',
  },
  {
    name: 'Yazd, Iran - Shahid Sadooghi Airport [AZD]',
    value: 'AZD',
  },
  {
    name: 'Zahedan, Iran - Zahedan Airport [ZAH]',
    value: 'ZAH',
  },
  {
    name: 'Al Najaf, Iraq - Al Najaf International Airport NJF',
    value: 'NJF',
  },
  {
    name: 'Baghdad, Iraq - Baghdad International Airport [BGW]',
    value: 'BGW',
  },
  {
    name: 'Basra, Iraq - Basra International Airport [BSR]',
    value: 'BSR',
  },
  {
    name: 'Erbil, Iraq - Erbil International Airport [EBL]',
    value: 'EBL',
  },
  {
    name: 'Mosul, Iraq - Mosul International Airport [OSM]',
    value: 'OSM',
  },
  {
    name: 'Nasiriyah, Iraq - Nasiriyah Airport [XNH]',
    value: 'XNH',
  },
  {
    name: 'Sulaymaniyah, Iraq - Sulaimaniyah International Airport [ISU]',
    value: 'ISU',
  },
  {
    name: 'Eilat, Israel - Ramon Airport [ETM]',
    value: 'ETM',
  },
  {
    name: 'Haifa, Israel - Haifa Airport [HFA]',
    value: 'HFA',
  },
  {
    name: 'Tel Aviv, Israel - Ben Gurion Airport [TLV]',
    value: 'TLV',
  },
  {
    name: 'Aqaba, Jordan - King Hussein International Airport [AQJ]',
    value: 'AQJ',
  },
  {
    name: 'Amman, Jordan - Queen Alia International Airport [AMM]',
    value: 'AMM',
  },
  {
    name: 'Kuwait City, Kuwait - Kuwait International Airport [KWI]',
    value: 'KWI',
  },
  {
    name: 'Beirut, Lebanon - Beirut–Rafic Hariri International Airport [BEY]',
    value: 'BEY',
  },
  {
    name: 'Muscat, Oman - Muscat International Airport [MCT]',
    value: 'MCT',
  },
  {
    name: 'Salalah, Oman - Salalah International Airport [SLL]',
    value: 'SLL',
  },
  {
    name: 'Sohar, Oman - Sohar International Airport [OHS]',
    value: 'OHS',
  },
  {
    name: 'Doha, Qatar - Hamad International Airport [DOH]',
    value: 'DOH',
  },
  {
    name: 'Abha, Saudi Arabia - Abha International Airport [AHB]',
    value: 'AHB',
  },
  {
    name: 'Al-Ahsa, Saudi Arabia - Al-Ahsa International Airport [HOF]',
    value: 'HOF',
  },
  {
    name: 'Al-Jawf, Saudi Arabia - Al Jouf Airport [AJF]',
    value: 'AJF',
  },
  {
    name: 'Buraydah, Saudi Arabia - Prince Naif bin Abdulaziz International Airport [ELQ]',
    value: 'ELQ',
  },
  {
    name: 'Dammam, Saudi Arabia - King Fahd International Airport [DMM]',
    value: 'DMM',
  },
  {
    name: "Ha'il, Saudi Arabia - Ha'il International Airport [HAS]",
    value: 'HAS',
  },
  {
    name: 'Jeddah, Saudi Arabia - King Abdulaziz International Airport [JED]',
    value: 'JED',
  },
  {
    name: 'Jizan, Saudi Arabia - Jizan Regional Airport [GIZ]',
    value: 'GIZ',
  },
  {
    name: 'Medina, Saudi Arabia - Prince Mohammad bin Abdulaziz International Airport [MED]',
    value: 'MED',
  },
  {
    name: 'Najran, Saudi Arabia - Najran Domestic Airport [EAM]',
    value: 'EAM',
  },
  {
    name: 'Riyadh, Saudi Arabia - King Khalid International Airport [RUH]',
    value: 'RUH',
  },
  {
    name: 'Tabuk, Saudi Arabia - Tabuk Regional Airport [TUU]',
    value: 'TUU',
  },
  {
    name: "Ta'if, Saudi Arabia - Ta'if Regional Airport [TIF]",
    value: 'TIF',
  },
  {
    name: 'Yanbu, Saudi Arabia - Yanbu Airport [YNB]',
    value: 'YNB',
  },
  {
    name: 'Aleppo, Syria - Aleppo International Airport [ALP]',
    value: 'ALP',
  },
  {
    name: 'Damascus, Syria - Damascus International Airport [DAM]',
    value: 'DAM',
  },
  {
    name: 'Latakia, Syria - Bassel Al-Assad International Airport [LTK]',
    value: 'LTK',
  },
  {
    name: 'Qamishli, Syria - Qamishli Airport [KAC]',
    value: 'KAC',
  },
  {
    name: 'Abu Dhabi, United Arab Emirates - Abu Dhabi International Airport [AUH]',
    value: 'AUH',
  },
  {
    name: 'Al Ain, United Arab Emirates - Al Ain International Airport [AAN]',
    value: 'AAN',
  },
  {
    name: 'Dubai, United Arab Emirates - Al Maktoum International Airport [DWC]',
    value: 'DWC',
  },
  {
    name: 'Dubai, United Arab Emirates - Dubai International Airport [DXB]',
    value: 'DXB',
  },
  {
    name: 'Ras Al Khaimah, United Arab Emirates - Ras Al Khaimah International Airport [RKT]',
    value: 'RKT',
  },
  {
    name: 'Sharjah, United Arab Emirates - Sharjah International Airport [SHJ]',
    value: 'SHJ',
  },
  {
    name: 'Aden, Yemen - Aden International Airport [ADE]',
    value: 'ADE',
  },
  {
    name: 'Sanaa, Yemen - Sanaa International Airport [SAH]',
    value: 'SAH',
  },
  {
    name: 'Seiyun, Yemen - Seiyun Airport [GXF]',
    value: 'GXF',
  },
  {
    name: 'The Valley, Anguilla - Clayton J. Lloyd International Airport [AXA]',
    value: 'AXA',
  },
  {
    name: 'Antigua, Antigua and Barbuda - V. C. Bird International Airport [ANU]',
    value: 'ANU',
  },
  {
    name: 'Oranjestad, Aruba - Queen Beatrix International Airport [AUA]',
    value: 'AUA',
  },
  {
    name: 'Nassau, Bahamas - Lynden Pindling International Airport [NAS]',
    value: 'NAS',
  },
  {
    name: 'Chub Cay, Bahamas - Chub Cay International Airport [CCZ]',
    value: 'CCZ',
  },
  {
    name: 'Exuma, Bahamas - Exuma International Airport [GGT]',
    value: 'GGT',
  },
  {
    name: 'Freeport, Bahamas - Grand Bahama International Airport [FPO]',
    value: 'FPO',
  },
  {
    name: 'South Eleuthera, Bahamas - Rock Sound International Airport [RSD]',
    value: 'RSD',
  },
  {
    name: 'Marsh Harbour, Bahamas - Marsh Harbour International Airport [MHH]',
    value: 'MHH',
  },
  {
    name: 'Bridgetown, Barbados - Grantley Adams International Airport [BGI]',
    value: 'BGI',
  },
  {
    name: 'Road Town, British Virgin Islands - Terrance B. Lettsome International Airport [EIS]',
    value: 'EIS',
  },
  {
    name: 'Bonaire, Caribbean Netherlands - Flamingo International Airport [BON]',
    value: 'BON',
  },
  {
    name: 'Sint Eustatius, Caribbean Netherlands - F. D. Roosevelt Airport [EUX]',
    value: 'EUX',
  },
  {
    name: 'Saba, Caribbean Netherlands - Juancho E. Yrausquin Airport [SAB]',
    value: 'SAB',
  },
  {
    name: 'Cayman Brac, Cayman Islands - Charles Kirkconnell International Airport [CYB]',
    value: 'CYB',
  },
  {
    name: 'Georgetown, Cayman Islands - Owen Roberts International Airport [GCM]',
    value: 'GCM',
  },
  {
    name: 'Camagüey, Cuba - Ignacio Agramonte International Airport [CMW]',
    value: 'CMW',
  },
  {
    name: 'Cayo Coco, Cuba - Jardines del Rey Airport [CCC]',
    value: 'CCC',
  },
  {
    name: 'Cayo Largo del Sur, Cuba - Vilo Acuña Airport [CYO]',
    value: 'CYO',
  },
  {
    name: 'Cienfuegos, Cuba - Jaime González Airport [CFG]',
    value: 'CFG',
  },
  {
    name: 'Havana, Cuba - José Martí International Airport [HAV]',
    value: 'HAV',
  },
  {
    name: 'Holguín, Cuba - Frank País Airport [HOG]',
    value: 'HOG',
  },
  {
    name: 'Santa Clara, Cuba - Abel Santamaría Airport [SNU]',
    value: 'SNU',
  },
  {
    name: 'Santiago de Cuba, Cuba - Antonio Maceo Airport [SCU]',
    value: 'SCU',
  },
  {
    name: 'Varadero, Cuba - Juan Gualberto Gómez Airport [VRA]',
    value: 'VRA',
  },
  {
    name: 'Willemstad, Curaçao - Curaçao International Airport [CUR]',
    value: 'CUR',
  },
  {
    name: 'Roseau, Dominica - Melville Hall Airport [DOM]',
    value: 'DOM',
  },
  {
    name: 'Barahona, Dominican Republic - María Montez International Airport [BRX]',
    value: 'BRX',
  },
  {
    name: 'La Romana, Dominican Republic - La Romana International Airport [LRM]',
    value: 'LRM',
  },
  {
    name: 'Punta Cana, Dominican Republic - Punta Cana International Airport [PUJ]',
    value: 'PUJ',
  },
  {
    name: 'Samana, Dominican Republic - Samaná El Catey International Airport [AZS]',
    value: 'AZS',
  },
  {
    name: 'San Felipe de Puerto Plata, Dominican Republic - Gregorio Luperón International Airport [POP]',
    value: 'POP',
  },
  {
    name: 'Santiago de los Caballeros, Dominican Republic - Cibao International Airport [STI]',
    value: 'STI',
  },
  {
    name: 'Santo Domingo, Dominican Republic - Las Américas International Airport [SDQ]',
    value: 'SDQ',
  },
  {
    name: 'Grenada, Grenada - Maurice Bishop International Airport [GND]',
    value: 'GND',
  },
  {
    name: 'Pointe-à-Pitre, Guadeloupe - Pointe-à-Pitre International Airport [PTP]',
    value: 'PTP',
  },
  {
    name: 'Cap-Haïtien, Haiti - Cap-Haïtien International Airport [CAP]',
    value: 'CAP',
  },
  {
    name: 'Port-au-Prince, Haiti - Toussaint Louverture International Airport [PAP]',
    value: 'PAP',
  },
  {
    name: 'Kingston, Jamaica - Norman Manley International Airport [KIN]',
    value: 'KIN',
  },
  {
    name: 'Montego Bay, Jamaica - Sangster International Airport [MBJ]',
    value: 'MBJ',
  },
  {
    name: 'Fort-de-France, Martinique - Martinique Aimé Césaire International Airport [FDF',
    value: 'FDF',
  },
  {
    name: 'Brades, Montserrat - John A. Osborne Airport [MNI]',
    value: 'MNI',
  },
  {
    name: 'Aguadilla, Puerto Rico - Rafael Hernández Airport [BQN]',
    value: 'BQN',
  },
  {
    name: 'San Juan, Puerto Rico - Luis Muñoz Marín International Airport [SJU]',
    value: 'SJU',
  },
  {
    name: 'Saint Jean, Saint Barthélemy - Gustaf III Airport [SBH]',
    value: 'SBH',
  },
  {
    name: 'Saint Kitts, Saint Kitts and Nevis - Robert L. Bradshaw International Airport [SKB]',
    value: 'SKB',
  },
  {
    name: 'Vieux Fort Quarters, Saint Lucia - Hewanorra International Airport [UVF]',
    value: 'UVF',
  },
  {
    name: 'Kingstown, Saint Vincent and the Grenadines - Argyle International Airport [SVD]',
    value: 'SVD',
  },
  {
    name: 'Canouan, Saint Vincent and the Grenadines - Canouan Airport [CIW]',
    value: 'CIW',
  },
  {
    name: 'Philipsburg, Sint Maarten - Princess Juliana International Airport [SXM]',
    value: 'SXM',
  },
  {
    name: 'Port of Spain, Trinidad and Tobago - Piarco International Airport [POS]',
    value: 'POS',
  },
  {
    name: 'Tobago, Trinidad and Tobago - A.N.R. Robinson International Airport [TAB]',
    value: 'AAA',
  },
  {
    name: 'Providenciales, Turks and Caicos Islands - Providenciales Airport [PLS]',
    value: 'PLS',
  },
  {
    name: 'Saint Thomas, U.S. Virgin Islands - Cyril E. King Airport [STT]',
    value: 'STT',
  },
  {
    name: 'Saint Croix, U.S. Virgin Islands - Henry E. Rohlsen Airport [STX]',
    value: 'STX',
  },
  {
    name: 'Belize City, Central America - Philip S. W. Goldson International Airport [BZE]',
    value: 'BZE',
  },
  {
    name: 'Liberia, Costa Rica - Daniel Oduber Quirós International Airport [LIR]',
    value: 'LIR',
  },
  {
    name: 'San José, Costa Rica - Juan Santamaría International Airport [SJO]',
    value: 'SJO',
  },
  {
    name: 'San Salvador, El Salvador - El Salvador International Airport [SAL]',
    value: 'SAL',
  },
  {
    name: 'Flores, Guatemala - Mundo Maya International Airport [FRS]',
    value: 'FRS',
  },
  {
    name: 'Guatemala City, Guatemala - La Aurora International Airport [GUA]',
    value: 'GUA',
  },
  {
    name: 'La Ceiba, Honduras - Golosón International Airport [LCE]',
    value: 'LCE',
  },
  {
    name: 'Roatán, Honduras - Juan Manuel Gálvez International Airport [RTB]',
    value: 'RTB',
  },
  {
    name: 'San Pedro Sula, Honduras - Ramón Villeda Morales International Airport [SAP]',
    value: 'SAP',
  },
  {
    name: 'Tegucigalpa, Honduras - Toncontín International Airport [TGU]',
    value: 'TGU',
  },
  {
    name: 'Managua, Nicaragua - Augusto C. Sandino International Airport [MGA]',
    value: 'MGA',
  },
  {
    name: 'Bluefields, Nicaragua - Bluefields Airport [BEF]',
    value: 'BEF',
  },
  {
    name: 'Corn Island, Nicaragua - Corn Island Airport [RNI]',
    value: 'RNI',
  },
  {
    name: "Bocas del Toro, Panama - Bocas del Toro 'Isla Colón' International Airport [BOC]",
    value: 'BOC',
  },
  {
    name: 'David, Chiriquí, Panama - Enrique Malek International Airport [DAV]',
    value: 'DAV',
  },
  {
    name: "Panama City, Panama - Albrook 'Marcos A. Gelabert' International Airport [PAC]",
    value: 'PAC',
  },
  {
    name: 'Panama City, Panama - Panama Pacifico International Airport [BLB]',
    value: 'BLB',
  },
  {
    name: 'Panama City, Panama - Tocumen International Airport [PTY]',
    value: 'PTY',
  },
  {
    name: 'Rio Hato, Panama - Scarlett Martínez International Airport [RIH]',
    value: 'RIH',
  },
  {
    name: "St. George's, Bermuda - L.F. Wade International Airport [BDA]",
    value: 'BDA',
  },
  {
    name: 'Abbotsford, Canada - Abbotsford International Airport [YXX]',
    value: 'YXX',
  },
  {
    name: 'Calgary, Canada - Calgary International Airport [YYC]',
    value: 'YYC',
  },
  {
    name: 'Edmonton, Canada - Edmonton International Airport [YEG]',
    value: 'YEG',
  },
  {
    name: 'Fredericton, Canada - Fredericton International Airport [YFC]',
    value: 'YFC',
  },
  {
    name: 'Gander, Canada - Gander International Airport [YQX]',
    value: 'YQX',
  },
  {
    name: 'Halifax (Goffs), Canada - Halifax Stanfield International Airport [YHZ]',
    value: 'YHZ',
  },
  {
    name: 'Hamilton, Canada - John C. Munro Hamilton International Airport [YHM]',
    value: 'YHM',
  },
  {
    name: 'Kelowna, Canada - Kelowna International Airport [YLW]',
    value: 'YLW',
  },
  {
    name: 'London, Canada - London International Airport [YXU]',
    value: 'YXU',
  },
  {
    name: 'Moncton (Dieppe), Canada - Greater Moncton Roméo LeBlanc International Airport [YQM]',
    value: 'YQM',
  },
  {
    name: 'Montreal (Dorval), Canada - Montréal–Trudeau International Airport [YUL]',
    value: 'YUL',
  },
  {
    name: 'Ottawa, Canada - Ottawa Macdonald–Cartier International Airport [YOW]',
    value: 'YOW',
  },
  {
    name: 'Quebec City, Canada - Québec City Jean Lesage International Airport [YQB]',
    value: 'YQB',
  },
  {
    name: 'Regina, Canada - Regina International Airport [YQR]',
    value: 'YQR',
  },
  {
    name: 'Saskatoon, Canada - Saskatoon John G. Diefenbaker International Airport [YXE]',
    value: 'YXE',
  },
  {
    name: "St. John's, Canada - St. John's International Airport [YYT]",
    value: 'YYT',
  },
  {
    name: 'Thunder Bay, Canada - Thunder Bay International Airport [YQT]',
    value: 'YQT',
  },
  {
    name: 'Toronto (Mississauga), Canada - Toronto Pearson International Airport [YYZ]',
    value: 'YYZ',
  },
  {
    name: 'Vancouver (Richmond), Canada - Vancouver International Airport [YVR]',
    value: 'YVR',
  },
  {
    name: 'Victoria, Canada - Victoria International Airport [YYJ]',
    value: 'YYJ',
  },
  {
    name: 'Whitehorse, Canada - Erik Nielsen Whitehorse International Airport [YXY]',
    value: 'YXY',
  },
  {
    name: 'Windsor, Canada - Windsor International Airport [YQC]',
    value: 'YQC',
  },
  {
    name: 'Winnipeg, Canada - Winnipeg James Armstrong Richardson International Airport [YWG]',
    value: 'YWG',
  },
  {
    name: 'Kangerlussuaq, Greenland - Kangerlussuaq Airport [SFJ]',
    value: 'SFJ',
  },
  {
    name: 'Nuuk, Greenland - Nuuk Airport [GOH]',
    value: 'GOH',
  },
  {
    name: 'Ilulissat, Greenland - Ilulissat Airport [JAV]',
    value: 'AAA',
  },
  {
    name: 'Narsarsuaq, Greenland - Narsarsuaq Airport [UAK]',
    value: 'UAK',
  },
  {
    name: 'Acapulco, Mexico - Acapulco International Airport [ACA]',
    value: 'ACA',
  },
  {
    name: 'Aguascalientes, Mexico - Aguascalientes International Airport [AGU]',
    value: 'AGU',
  },
  {
    name: 'Cancún, Mexico - Cancún International Airport [CUN]',
    value: 'CUN',
  },
  {
    name: 'Chihuahua City, Mexico - Chihuahua International Airport [CUU]',
    value: 'CUU',
  },
  {
    name: 'Ciudad del Carmen, Mexico - Ciudad del Carmen International Airport [CME]',
    value: 'CME',
  },
  {
    name: 'Cozumel, Mexico - Cozumel International Airport [CZM]',
    value: 'CZM',
  },
  {
    name: 'Culiacán, Mexico - Culiacán International Airport [CUL]',
    value: 'CUL',
  },
  {
    name: 'Durango, Mexico - Durango International Airport [DGO]',
    value: 'DGO',
  },
  {
    name: 'Guadalajara, Mexico - Miguel Hidalgo y Costilla Guadalajara International Airport [GDL]',
    value: 'GDL',
  },
  {
    name: 'Hermosillo, Mexico - Hermosillo International Airport [HMO]',
    value: 'HMO',
  },
  {
    name: 'Huatulco, Mexico - Bahías de Huatulco International Airport [HUX]',
    value: 'HUX',
  },
  {
    name: 'Ixtapa, Mexico - Ixtapa-Zihuatanejo International Airport [ZIH]',
    value: 'ZIH',
  },
  {
    name: 'León, Mexico - Bajío International Airport [BJX]',
    value: 'BJX',
  },
  {
    name: 'Loreto, Mexico - Loreto International Airport [LTO]',
    value: 'LTO',
  },
  {
    name: 'Los Cabos, Mexico - Los Cabos International Airport [SJD]',
    value: 'SJD',
  },
  {
    name: 'Manzanillo, Mexico - Playa de Oro International Airport [ZLO]',
    value: 'ZLO',
  },
  {
    name: 'Mazatlán, Mexico - Mazatlán International Airport [MZT]',
    value: 'MZT',
  },
  {
    name: 'Mérida, Mexico - Mérida International Airport [MID]',
    value: 'MID',
  },
  {
    name: 'Mexico City, Mexico - Mexico City International Airport [MEX]',
    value: 'MEX',
  },
  {
    name: 'Monterrey, Mexico - Monterrey International Airport [MTY]',
    value: 'MTY',
  },
  {
    name: 'Morelia, Mexico - General Francisco Mujica International Airport [MLM]',
    value: 'MLM',
  },
  {
    name: 'Oaxaca City, Mexico - Oaxaca International Airport [OAX]',
    value: 'AAA',
  },
  {
    name: 'Puebla, Mexico - Puebla International Airport [PBC]',
    value: 'PBC',
  },
  {
    name: 'Puerto Vallarta, Mexico - Licenciado Gustavo Díaz Ordaz International Airport [PVR]',
    value: 'PVR',
  },
  {
    name: 'Querétaro City, Mexico - Querétaro Intercontinental Airport [QRO]',
    value: 'QRO',
  },
  {
    name: 'Reynosa, Mexico - General Lucio Blanco International Airport [QREXRO]',
    value: 'REX',
  },
  {
    name: 'Saltillo, Mexico - Saltillo Airport [SLW]',
    value: 'SLW',
  },
  {
    name: 'San Luis Potosí City, Mexico - San Luis Potosí International Airport [SLP]',
    value: 'SLP',
  },
  {
    name: 'Tampico, Mexico - Tampico International Airport [TAM]',
    value: 'TAM',
  },
  {
    name: 'Tijuana, Mexico - Tijuana International Airport [TIJ]',
    value: 'TIJ',
  },
  {
    name: 'Toluca, Mexico - Toluca International Airport [TLC]',
    value: 'TLC',
  },
  {
    name: 'Torreón, Mexico - Torreón International Airport [TRC]',
    value: 'TRC',
  },
  {
    name: 'Tuxtla Gutiérrez, Mexico - Tuxtla Gutiérrez International Airport [TGZ]',
    value: 'TGZ',
  },
  {
    name: 'Uruapan, Mexico - Uruapan International Airport [UPN]',
    value: 'AAA',
  },
  {
    name: 'Veracruz, Mexico - Veracruz International Airport [VER]',
    value: 'VER',
  },
  {
    name: 'Villahermosa, Mexico - Villahermosa International Airport [VSA]',
    value: 'VSA',
  },
  {
    name: 'Zacatecas City, Mexico - Zacatecas International Airport [ZCL]',
    value: 'AAA',
  },
  {
    name: 'Saint-Pierre, Saint Pierre and Miquelon - Saint-Pierre Airport [FSP]',
    value: 'FSP',
  },
  {
    name: 'Akron, United States - Akron Executive Airport [AKC]',
    value: 'AKC',
  },
  {
    name: 'Albany, United States - Albany International Airport [ALB]',
    value: 'ALB',
  },
  {
    name: 'Albuquerque, United States - Albuquerque International Sunport [ABQ]',
    value: 'ABQ',
  },
  {
    name: 'Anchorage, United States - Ted Stevens Anchorage International Airport [ANC]',
    value: 'ANC',
  },
  {
    name: 'Appleton, United States - Appleton International Airport [ATW]',
    value: 'ATW',
  },
  {
    name: 'Atlanta, United States - Hartsfield–Jackson Atlanta International Airport [ATL]',
    value: 'ATL',
  },
  {
    name: 'Atlantic City, United States - Atlantic City International Airport [ACY]',
    value: 'ACY',
  },
  {
    name: 'Austin (TX), United States - Austin–Bergstrom International Airport [AUS]',
    value: 'AUS',
  },
  {
    name: 'Baltimore, United States - Baltimore/Washington International Airport [BWI]',
    value: 'BWI',
  },
  {
    name: 'Bangor, United States - Bangor International Airport [BGR]',
    value: 'BGR',
  },
  {
    name: 'Bellingham, United States - Bellingham International Airport [BLI]',
    value: 'BLI',
  },
  {
    name: 'Birmingham, United States - Birmingham–Shuttlesworth International Airport [BHM]',
    value: 'BHM',
  },
  {
    name: 'Boise, United States - Boise Airport [BOI]',
    value: 'BOI',
  },
  {
    name: 'Boise, United States - Boise Airport [BOI]',
    value: 'BOI',
  },
  {
    name: 'Boston, United States - Logan International Airport [BOS]',
    value: 'BOS',
  },
  {
    name: 'Buffalo, United States - Buffalo Niagara International Airport [BUF]',
    value: 'BUF',
  },
  {
    name: 'Charlotte, United States - Charlotte Douglas International Airport [CLT]',
    value: 'CLT',
  },
  {
    name: 'Charleston (SC), United States - Charleston International Airport [CHS]',
    value: 'CHS',
  },
  {
    name: 'Chicago, United States - Midway International Airport [MDW]',
    value: 'MDW',
  },
  {
    name: "Chicago, United States - O'Hare International Airport [ORD]",
    value: 'ORD',
  },
  {
    name: 'Cincinnati, United States - Cincinnati/Northern Kentucky International Airport [CVG]',
    value: 'CVG',
  },
  {
    name: 'Cleveland, United States - Cleveland Hopkins International Airport [CLE]',
    value: 'CLE',
  },
  {
    name: 'Columbus (OH), United States - John Glenn Columbus International Airport [CMH]',
    value: 'CMH',
  },
  {
    name: 'Dallas, United States - Dallas/Fort Worth International Airport [DFW]',
    value: 'DFW',
  },
  {
    name: 'Dayton (OH), United States - Airport [DAY]',
    value: 'DAY',
  },
  {
    name: 'Denver, United States - Denver International Airport [DEN]',
    value: 'DEN',
  },
  {
    name: 'Des Moines (IA), United States - Des Moines International Airport [DSM]',
    value: 'DSM',
  },
  {
    name: 'Detroit, United States - Detroit Metropolitan Airport [DTW]',
    value: 'DTW',
  },
  {
    name: 'El Paso, United States - El Paso International Airport [ELP]',
    value: 'ELP',
  },
  {
    name: 'Fairbanks, United States - Fairbanks International Airport [FAI]',
    value: 'FAI',
  },
  {
    name: 'Fort Lauderdale, United States - Fort Lauderdale–Hollywood International Airport [FLL]',
    value: 'FLL',
  },
  {
    name: 'Fort Myers, United States - Southwest Florida International Airport [RSW]',
    value: 'RSW',
  },
  {
    name: 'Fresno, United States - Fresno Yosemite International Airport [FAT]',
    value: 'FAT',
  },
  {
    name: 'Grand Rapids, United States - Gerald R. Ford International Airport [GRR]',
    value: 'GRR',
  },
  {
    name: 'Green Bay, United States - Green Bay–Austin Straubel International Airport [GRB]',
    value: 'GRB',
  },
  {
    name: 'Greensboro, United States - Piedmont Triad International Airport [GSO]',
    value: 'AAA',
  },
  {
    name: 'Harrisburg, United States - Harrisburg International Airport [MDT]',
    value: 'MDT',
  },
  {
    name: 'Hartford (CT), United States - Bradley International Airport [BDL]',
    value: 'BDL',
  },
  {
    name: 'Hilo, United States - Hilo International Airport [ITO]',
    value: 'ITO',
  },
  {
    name: 'Honolulu, United States - Daniel K. Inouye International Airport [HNL]',
    value: 'HNL',
  },
  {
    name: 'Houston, United States - George Bush Intercontinental Airport [IAH]',
    value: 'IAH',
  },
  {
    name: 'Houston, United States - William P. Hobby Airport [HOU]',
    value: 'HOU',
  },
  {
    name: 'Huntsville (AL), United States - Huntsville International Airport [HSV]',
    value: 'HSV',
  },
  {
    name: 'Indianapolis, United States - Indianapolis International Airport [IND]',
    value: 'IND',
  },
  {
    name: 'Jackson (MS), United States - Jackson–Medgar Wiley Evers International Airport [JAN]',
    value: 'JAN',
  },
  {
    name: 'Jacksonville, United States - Jacksonville International Airport [JAX]',
    value: 'JAX',
  },
  {
    name: 'Juneau, United States - Juneau International Airport [JNU]',
    value: 'JNU',
  },
  {
    name: 'Kansas City (MO), United States - Kansas City International Airport [MCI]',
    value: 'MCI',
  },
  {
    name: 'Ketchikan, United States - Ketchikan International Airport [KTN]',
    value: 'AAA',
  },
  {
    name: 'Key West, United States - Key West International Airport [EYW]',
    value: 'EYW',
  },
  {
    name: 'Kailua-Kona, United States - Kona International Airport [KOA]',
    value: 'KOA',
  },
  {
    name: 'Location, United States - Airport [AAA]',
    value: 'AAA',
  },
  {
    name: 'Knoxville, United States - McGhee Tyson Airport [TYS]',
    value: 'TYS',
  },
  {
    name: 'Lakeland, United States - Lakeland Linder International Airport [LAL]',
    value: 'LAL',
  },
  {
    name: 'Lansing, United States - AirCapital Region International Airportport [LAN]',
    value: 'LAN',
  },
  {
    name: 'Lansing, United States - Capital Region International Airport [LAN]',
    value: 'LAN',
  },
  {
    name: 'Las Vegas, United States - McCarran International Airport [LAS]',
    value: 'LAS',
  },
  {
    name: 'Little Rock, United States - Clinton National Airport [LIT]',
    value: 'LIT',
  },
  {
    name: 'Los Angeles, United States - Los Angeles International Airport [LAX]',
    value: 'LAX',
  },
  {
    name: 'Louisville, United States - Louisville International Airport [SDF]',
    value: 'SDF',
  },
  {
    name: 'Melbourne (FL), United States - Melbourne Orlando International Airport [MLB]',
    value: 'MLB',
  },
  {
    name: 'Memphis, United States - Memphis International Airport [MEM]',
    value: 'MEM',
  },
  {
    name: 'Miami, United States - Miami International Airport [MIA]',
    value: 'MIA',
  },
  {
    name: 'Midland, United States - Midland International Air and Space Port [MAF]',
    value: 'MAF',
  },
  {
    name: 'Milwaukee, United States - General Mitchell International MKE]',
    value: 'MKE',
  },
  {
    name: 'Minneapolis/St. Paul, United States - Minneapolis–Saint Paul International AirportMSP]',
    value: 'MSP',
  },
  {
    name: 'Myrtle Beach, United States - Midland International Air and Space Port [MAF]',
    value: 'MAF',
  },
  {
    name: 'Milwaukee, United States - General Mitchell International Airport [MKE]',
    value: 'MKE',
  },
  {
    name: 'Minneapolis/St. Paul, United States - Minneapolis–Saint Paul International Airport [MSP]',
    value: 'MSP',
  },
  {
    name: 'Myrtle Beach, United States - Myrtle Beach International Airport [MYR]',
    value: 'MYR',
  },
  {
    name: 'Nashville, United States - Nashville International Airport [BNA]',
    value: 'BNA',
  },
  {
    name: 'New Orleans, United States - Louis Armstrong New Orleans International Airport [MSY]',
    value: 'MSY',
  },
  {
    name: 'New York City, United States - John F. Kennedy International Airport [JFK]',
    value: 'JFK',
  },
  {
    name: 'Newark, United States - Newark Liberty International Airport [EWR]',
    value: 'EWR',
  },
  {
    name: 'Newburgh, United States - Stewart International Airport [SWF]',
    value: 'SWF',
  },
  {
    name: 'Norfolk (VA), United States - Norfolk International Airport [ORF]',
    value: 'ORF',
  },
  {
    name: 'Oakland, United States - Oakland International Airport [OAK]',
    value: 'OAK',
  },
  {
    name: 'Oklahoma City, United States - Will Rogers World Airport [AAOKCA]',
    value: 'OKC',
  },
  {
    name: 'Oklahoma City, United States - Will Rogers World Airport [OKC]',
    value: 'OKC',
  },
  {
    name: 'Omaha, United States - Eppley Airfield [OMA]',
    value: 'OMA',
  },
  {
    name: 'Ontario, United States - Ontario International Airport [ONT]',
    value: 'ONT',
  },
  {
    name: 'Orange County, United States - John Wayne Airport [SNA]',
    value: 'AAA',
  },
  {
    name: 'Orlando, United States - Orlando International Airport [MCO]',
    value: 'MCO',
  },
  {
    name: 'Orlando/Sanford, United States - Orlando Sanford International Airport [SFB]',
    value: 'SFB',
  },
  {
    name: 'Palm Springs, United States - Palm Springs International Airport [PSP]',
    value: 'PSP',
  },
  {
    name: 'Panama City (FL), United States - Northwest Florida Beaches International Airport [ECP]',
    value: 'ECP',
  },
  {
    name: 'Pensacola, United States - Pensacola International Airport [PNS]',
    value: 'PNS',
  },
  {
    name: 'Philadelphia, United States - Philadelphia International Airport [PHL]',
    value: 'PHL',
  },
  {
    name: 'Phoenix, United States - Phoenix Sky Harbor International Airport [AAA]',
    value: 'AAA',
  },
  {
    name: 'Pittsburgh, United States - Pittsburgh International Airport [PIT]',
    value: 'PIT',
  },
  {
    name: 'Portland (ME), United States - Portland International Jetport [PWM]',
    value: 'PWM',
  },
  {
    name: 'Portland (OR), United States - Portland International Airport [PDX]',
    value: 'PDX',
  },
  {
    name: 'Providence, United States - Rhode Island T. F. Green International Airport [PVD]',
    value: 'PVD',
  },
  {
    name: 'Racine, United States - Batten International Airport [RAC]',
    value: 'RAC',
  },
  {
    name: 'Raleigh/Durham, United States - Raleigh–Durham International Airport [RDU]',
    value: 'RDU',
  },
  {
    name: 'Reno, United States - Reno–Tahoe International Airport [RNO]',
    value: 'RNO',
  },
  {
    name: 'Richmond (VA) (Sandston), United States - Richmond International Airport [RIC]',
    value: 'RIC',
  },
  {
    name: 'Rochester (MN), United States - Rochester International Airport [RST]',
    value: 'RST',
  },
  {
    name: 'Rochester (NY), United States - Greater Rochester International Airport [ROC]',
    value: 'ROC',
  },
  {
    name: 'Rockford (IL), United States - Chicago Rockford International Airport [RFD]',
    value: 'RFD',
  },
  {
    name: 'Sacramento, United States - Sacramento International Airport [SMF]',
    value: 'SMF',
  },
  {
    name: 'Salt Lake City, United States - Salt Lake City International Airport [SLC]',
    value: 'SLC',
  },
  {
    name: 'San Antonio, United States - San Antonio International Airport [SAT]',
    value: 'SAT',
  },
  {
    name: 'San Bernardino, United States - San Bernardino International Airport [SBD]',
    value: 'SBD',
  },
  {
    name: 'San Diego, United States - San Diego International Airport [SAN]',
    value: 'SAN',
  },
  {
    name: 'San Francisco, United States - San Francisco International Airport [SFO]',
    value: 'SFO',
  },
  {
    name: 'San Jose (CA), United States - San Jose International Airport [SJC]',
    value: 'SJC',
  },
  {
    name: 'Sarasota/Bradenton, United States - Sarasota–Bradenton International Airport [SRQ]',
    value: 'SRQ',
  },
  {
    name: 'Savannah (GA)/Hilton Head (SC), United States - Savannah/Hilton Head International Airport [SAV]',
    value: 'SAV',
  },
  {
    name: 'Seattle, United States - Kenmore Air Harbor Seaplane Base [LKE]',
    value: 'LKE',
  },
  {
    name: 'Seattle, United States - King County International Airport [BFI]',
    value: 'BFI',
  },
  {
    name: 'Seattle, United States - Seattle–Tacoma International Airport [SEA]',
    value: 'SEA',
  },
  {
    name: 'Sheboygan, United States - Sheboygan County Memorial Airport [SBM]',
    value: 'SBM',
  },
  {
    name: 'Snohomish County (WA), United States - Paine Field [PAE]',
    value: 'PAE',
  },
  {
    name: 'Spokane, United States - Spokane International Airport [GEG]',
    value: 'GEG',
  },
  {
    name: 'St. Louis, United States - St. Louis Lambert International Airport [STL]',
    value: 'STL',
  },
  {
    name: 'St. Petersburg (FL), United States - St. Pete–Clearwater International Airport [PIE]',
    value: 'PIE',
  },
  {
    name: 'Syracuse, United States - Syracuse Hancock International Airport [SYR]',
    value: 'SYR',
  },
  {
    name: 'Tallahassee, United States - Tallahassee International Airport [TLH]',
    value: 'TLH',
  },
  {
    name: 'Tampa, United States - Tampa International Airport [TPA]',
    value: 'TPA',
  },
  {
    name: 'Tucson, United States - Tucson International Airport [TUS]',
    value: 'TUS',
  },
  {
    name: 'Tulsa, United States - Tulsa International Airport [TUL]',
    value: 'TUL',
  },
  {
    name: 'Washington, D.C., United States - Ronald Reagan Washington National Airport** [DCA]',
    value: 'DCA',
  },
  {
    name: 'Washington, D.C., United States - Dulles International Airport [IAD]',
    value: 'IAD',
  },
  {
    name: 'West Palm Beach, United States - Palm Beach International Airport [PBI]',
    value: 'PBI',
  },
  {
    name: 'Wilkes-Barre/Scranton, United States - Wilkes-Barre/Scranton International Airport [AVP]',
    value: 'AVP',
  },
  {
    name: 'Wilmington (NC), United States - Wilmington International Airport [ILM]',
    value: 'ILM',
  },
  {
    name: 'Buenos Aires, Argentina - Ministro Pistarini International Airport [EZE]',
    value: 'EZE',
  },
  {
    name: 'Buenos Aires, Argentina - Aeroparque Jorge Newbery [AEP]',
    value: 'AEP',
  },
  {
    name: 'Bariloche, Argentina - San Carlos de Bariloche Airport [BRC]',
    value: 'BRC',
  },
  {
    name: 'Córdoba, Argentina - Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport [COR]',
    value: 'COR',
  },
  {
    name: 'Mendoza, Argentina - Governor Francisco Gabrielli International Airport [MDZ]',
    value: 'MDZ',
  },
  {
    name: 'Puerto Iguazú, Argentina - Cataratas del Iguazú International Airport [IGR]',
    value: 'IGR',
  },
  {
    name: 'Resistencia, Argentina - Resistencia International Airport [RES]',
    value: 'RES',
  },
  {
    name: 'Río Gallegos, Argentina - Piloto Civil Norberto Fernández International Airport [RGL]',
    value: 'RGL',
  },
  {
    name: 'Ushuaia, Argentina - Ushuaia – Malvinas Argentinas International Airport [USH]',
    value: 'USH',
  },
  {
    name: 'La Paz, Bolivia - El Alto International Airport [LPB]',
    value: 'LPB',
  },
  {
    name: 'Santa Cruz de la Sierra, Bolivia - Viru Viru International Airport [VVI]',
    value: 'VVI',
  },
  {
    name: 'Cochabamba, Bolivia - Jorge Wilstermann International Airport [CBB]',
    value: 'CBB',
  },
  {
    name: 'Aracaju, Brazil - Santa Maria Airport [AJU]',
    value: 'AJU',
  },
  {
    name: 'Belém, Brazil - Val de Cães International Airport [BEL]',
    value: 'BEL',
  },
  {
    name: 'Belo Horizonte, Brazil - Tancredo Neves International Airport [CNF]',
    value: 'CNF',
  },
  {
    name: 'Boa Vista, Brazil - Boa Vista International Airport [BVB]',
    value: 'BVB',
  },
  {
    name: 'Brasília, Brazil - Brasília International Airport [BSB]',
    value: 'BSB',
  },
  {
    name: 'Campinas, Brazil - Viracopos International Airport [VCP]',
    value: 'VCP',
  },
  {
    name: 'Campo Grande, Brazil - Campo Grande International Airport [CGR]',
    value: 'CGR',
  },
  {
    name: 'Cuiabá, Brazil - Marechal Rondon International Airport [CGB]',
    value: 'CGB',
  },
  {
    name: 'Curitiba, Brazil - Afonso Pena International Airport [CWB]',
    value: 'CWB',
  },
  {
    name: 'Florianópolis, Brazil - Hercílio Luz International Airport [FLN]',
    value: 'FLN',
  },
  {
    name: 'Fortaleza, Brazil - Pinto Martins International Airport [FOR]',
    value: 'FOR',
  },
  {
    name: 'Foz do Iguaçu, Brazil - Foz do Iguaçu International Airport [IGU]',
    value: 'IGU',
  },
  {
    name: 'Goiânia, Brazil - Santa Genoveva Airport GYN]',
    value: 'GYN',
  },
  {
    name: 'João Pessoa, Brazil - Presidente Castro Pinto International Airport JPA]',
    value: 'JPA',
  },
  {
    name: 'Maceió, Brazil - Zumbi dos Palmares International Airport [MCZ]',
    value: 'MCZ',
  },
  {
    name: 'Manaus, Brazil - Eduardo Gomes International Airport [MAO]',
    value: 'MAO',
  },
  {
    name: 'MANatal, Brazil - Greater Natal International Airport [NAT]',
    value: 'NAT',
  },
  {
    name: 'Petrolina, Brazil - Petrolina Airport [PNZ]',
    value: 'PNZ',
  },
  {
    name: 'Porto Alegre, Brazil - Salgado Filho Porto Alegre International Airport [POA]',
    value: 'AAA',
  },
  {
    name: 'Porto Velho, Brazil - Governador Jorge Teixeira de Oliveira International Airport [PVH]',
    value: 'PVH',
  },
  {
    name: 'Recife, Brazil - Guararapes International Airport [REC]',
    value: 'REC',
  },
  {
    name: 'Rio Branco, Brazil - Rio Branco International Airport [RBR]',
    value: 'RBR',
  },
  {
    name: 'Rio de Janeiro, Brazil - Rio de Janeiro/Galeão International Airport [GIG]',
    value: 'GIG',
  },
  {
    name: 'Rio de Janeiro, Brazil - Santos Dumont Airport [SDU]',
    value: 'AAA',
  },
  {
    name: 'Salvador, Brazil - Deputado Luís Eduardo Magalhães International Airport [SSA]',
    value: 'SSA',
  },
  {
    name: 'São Luís, Brazil - Marechal Cunha Machado International Airport [SLZ]',
    value: 'SLZ',
  },
  {
    name: 'São Paulo, Brazil - São Paulo–Congonhas Airport [CGH]',
    value: 'CGH',
  },
  {
    name: 'São Paulo, Brazil - São Paulo/Guarulhos International Airport [GRU]',
    value: 'GRU',
  },
  {
    name: 'Teresina, Brazil - Teresina Airport [THE]',
    value: 'THE',
  },
  {
    name: 'Uberlândia, Brazil - Uberlândia Airport [UDI]',
    value: 'UDI',
  },
  {
    name: 'Vitória, Brazil - Eurico de Aguiar Salles Airport [VIX]',
    value: 'VIX',
  },
  {
    name: 'Antofagasta, Chile - Andrés Sabella Gálvez International Airport [ANF]',
    value: 'ANF',
  },
  {
    name: 'Concepción, Chile - Carriel Sur International Airport [CCP]',
    value: 'CCP',
  },
  {
    name: 'Puerto Montt, Chile - El Tepual International Airport [PMC]',
    value: 'PMC',
  },
  {
    name: 'Punta Arenas, Chile - Presidente Carlos Ibáñez del Campo International Airport [PUQ]',
    value: 'PUQ',
  },
  {
    name: 'Santiago, Chile - Arturo Merino Benítez International Airport SCL]',
    value: 'SCL',
  },
  {
    name: 'Armenia, Colombia - El Edén International Airport [AXM]',
    value: 'AXM',
  },
  {
    name: 'Barranquilla, Colombia - Ernesto Cortissoz International Airport [BAQ]',
    value: 'BAQ',
  },
  {
    name: 'Bogotá, Colombia - El Dorado International Airport [BOG]',
    value: 'BOG',
  },
  {
    name: 'Bucaramanga, Colombia - Airport [AAA]',
    value: 'AAA',
  },
  {
    name: 'Buenaventura, Colombia - Gerardo Tobar López Airport [BUN]',
    value: 'BUN',
  },
  {
    name: 'Cali, Colombia - Alfonso Bonilla Aragón International Airport [CLO]',
    value: 'CLO',
  },
  {
    name: 'Cartagena, Colombia - Rafael Núñez International Airport [CTG]',
    value: 'CTG',
  },
  {
    name: 'Cúcuta, Colombia - Camilo Daza International Airport [CUC]',
    value: 'CUC',
  },
  {
    name: 'Ibagué, Colombia - Perales Airport [IBE]',
    value: 'IBE',
  },
  {
    name: 'Ipiales, Colombia - San Luis Airport [IPI]',
    value: 'IPI',
  },
  {
    name: 'Florencia, Colombia - Gustavo Artunduaga Paredes Airport [FLA]',
    value: 'FLA',
  },
  {
    name: 'Leticia, Colombia - Alfredo Vásquez Cobo International Airport [LET]',
    value: 'LET',
  },
  {
    name: 'Maicao, Colombia - Jorge Isaacs Airport [MCJ]',
    value: 'MCJ',
  },
  {
    name: 'Manizales, Colombia - La Nubia Airport [MZL]',
    value: 'MZL',
  },
  {
    name: 'Medellín, Colombia - José María Córdova International Airport [MDE]',
    value: 'MDE',
  },
  {
    name: 'Mitú, Colombia - Fabio Alberto León Bentley Airport [MVP]',
    value: 'MVP',
  },
  {
    name: 'Montería, Colombia - Los Garzones Airport [MTR]',
    value: 'MTR',
  },
  {
    name: 'Neiva, Colombia - Benito Salas Airport [NVA]',
    value: 'NVA',
  },
  {
    name: 'Pasto, Colombia - Antonio Nariño Airport [PSO]',
    value: 'PSO',
  },
  {
    name: 'Pereira, Colombia - Matecaña International Airport [PEI]',
    value: 'PEI',
  },
  {
    name: 'Popayán, Colombia - Guillermo León Valencia Airport [PPN]',
    value: 'PPN',
  },
  {
    name: 'Providence Island, Colombia - El Embrujo Airport [PVA]',
    value: 'PVA',
  },
  {
    name: 'Quibdó, Colombia - El Caraño Airport [UIB]',
    value: 'UIB',
  },
  {
    name: 'Riohacha, Colombia - Almirante Padilla Airport [RCH]',
    value: 'RCH',
  },
  {
    name: 'San Andrés, Colombia - Gustavo Rojas Pinilla International Airport [ADZ]',
    value: 'ADZ',
  },
  {
    name: 'Tolú, Colombia - Golfo de Morrosquillo Airport [TLU]',
    value: 'TLU',
  },
  {
    name: 'Tumaco, Colombia - La Florida Airport [TCO]',
    value: 'TCO',
  },
  {
    name: 'Santa Marta, Colombia - Simón Bolívar International Airport [SMR]',
    value: 'SMR',
  },
  {
    name: 'Sincelejo, Colombia - Las Brujas Airport [CZU]',
    value: 'CZU',
  },
  {
    name: 'Valledupar, Colombia - Alfonso López Pumarejo Airport [VUP]',
    value: 'VUP',
  },
  {
    name: 'Villavicencio, Colombia - La Vanguardia Airport [VVC]',
    value: 'VVC',
  },
  {
    name: 'Yopal, Colombia - El Alcaraván Airport [EYP]',
    value: 'EYP',
  },
  {
    name: 'Cuenca, Ecuador - Mariscal Lamar International Airport [CUE]',
    value: 'CUE',
  },
  {
    name: 'Esmeraldas, Ecuador - Carlos Concha Torres International Airport [ESM]',
    value: 'ESM',
  },
  {
    name: 'Guayaquil, Ecuador - José Joaquín de Olmedo International Airport [GYE]',
    value: 'GYE',
  },
  {
    name: 'Machala, Ecuador - Santa Rosa International Airport [ETR]',
    value: 'ETR',
  },
  {
    name: 'Manta, Ecuador - Eloy Alfaro International Airport [MEC]',
    value: 'MEC',
  },
  {
    name: 'Quito, Ecuador - Mariscal Sucre International Airport [UIO]',
    value: 'UIO',
  },
  {
    name: 'Tulcán, Ecuador - Teniente Coronel Luis a Mantilla International Airport [TUA]',
    value: 'TUA',
  },
  {
    name: 'Mount Pleasant, Falkland Islands - RAF Mount Pleasant [MPN]',
    value: 'MPN',
  },
  {
    name: 'Cayenne, French Guiana - Cayenne – Félix Eboué Airport [CAY]',
    value: 'CAY',
  },
  {
    name: 'Georgetown, Guyana - Cheddi Jagan International Airport [GEO]',
    value: 'GEO',
  },
  {
    name: 'Asunción, Paraguay - Silvio Pettirossi International Airport [ASU]',
    value: 'ASU',
  },
  {
    name: 'Ciudad del Este, Paraguay - Guaraní International Airport [AGT]',
    value: 'AGT',
  },
  {
    name: 'Arequipa, Peru - Rodríguez Ballón International Airport [AQP]',
    value: 'AQP',
  },
  {
    name: 'Cusco, Peru - Alejandro Velasco Astete International Airport [CUZ]',
    value: 'CUZ',
  },
  {
    name: 'Lima, Peru - Jorge Chávez International Airport [LIM]',
    value: 'LIM',
  },
  {
    name: 'Paramaribo, Suriname - Johan Adolf Pengel International Airport [PBM]',
    value: 'PBM',
  },
  {
    name: 'Montevideo, Uruguay - Carrasco International Airport [MVD]',
    value: 'MVD',
  },
  {
    name: 'Punta del Este, Uruguay - Capitán de Corbeta Carlos A. Curbelo International Airport [PDP]',
    value: 'PDP',
  },
  {
    name: 'Rivera, Uruguay - Rivera International Airport [RVY]',
    value: 'RVY',
  },
  {
    name: 'Caracas, Venezuela - Simón Bolívar International Airport [CCS]',
    value: 'CCS',
  },
  {
    name: 'Maracaibo, Venezuela - La Chinita International Airport [MAR]',
    value: 'MAR',
  },
  {
    name: 'Valencia, Venezuela - Arturo Michelena International Airport [VLN]',
    value: 'VLN',
  },
];
