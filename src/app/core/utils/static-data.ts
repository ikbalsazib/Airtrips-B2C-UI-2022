import {TripArea} from '../../interfaces/trip-area';
import {Select} from '../../interfaces/select';


export const TRIP_AREAS: TripArea[] = [
  {
    from: 'Rajshahi',
    to: ['Mohakhali', 'Dhaka', 'Gabtoli', 'Uttara']
  },
  {
    from: 'Chapainawabganj',
    to: ['Mohakhali', 'Gabtoli', 'Uttara']
  },
  {
    from: 'Natore',
    to: ['Dhaka', 'Gabtoli', 'Uttara']
  },
  {
    from: 'Chapainawabganj',
    to: ['Dhaka', 'Gabtoli', 'Uttara', 'Mohakhali']
  },
  {
    from: 'Dhaka',
    to: ['Rajshahi', 'Natore', 'Rangpur', 'Dinajpur']
  },
];

export const ORIGIN_AIR: Select[] = [
  {value: 'DAC', viewValue: 'Dhaka'},
  {value: 'CXB', viewValue: 'Cox\'s Bazar'},
  {value: 'CGP', viewValue: 'Chittagong'},
  {value: 'CCU', viewValue: 'Kolkata'}
];

export const DESTINATION_AIR: Select[] = [
  {value: 'DAC', viewValue: 'Dhaka'},
  {value: 'CXB', viewValue: 'Cox\'s Bazar'},
  {value: 'CGP', viewValue: 'Chittagong'},
  {value: 'CCU', viewValue: 'Kolkata'}
];



export const TRIP_AREAS_LAUNCH: TripArea[] = [
  {
    from: 'Amua',
    to: ['Dhaka']
  },
  {
    from: 'Bamna',
    to: ['Dhaka']
  },
  {
    from: 'Barguna',
    to: ['Dhaka']
  },
  {
    from: 'Betagi',
    to: ['Dhaka']
  },
  {
    from: 'Kacchira',
    to: ['Dhaka']
  },
  {
    from: 'Kalikabara',
    to: ['Dhaka']
  },
  {
    from: 'Kathaliya',
    to: ['Dhaka']
  },
  {
    from: 'Fuljhuri',
    to: ['Dhaka']
  },
  {
    from: 'Ramna',
    to: ['Dhaka']
  },
  {
    from: 'Dhaka',
    to: ['Amua', 'Bamna', 'Barguna', 'Fuljhuri']
  },
];
