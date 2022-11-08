import {Inject, Injectable} from '@angular/core';
import * as moment from 'moment-timezone';
import * as _ from 'lodash';
import {DOCUMENT} from '@angular/common';
import {AirSeatStatus} from "../enum/air-seat-status.enum";
import {AirSeatType} from "../enum/air-seat-type.enum";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  /**
   * UTILS
   */


  convertToDateTime(dateStr: string, timeStr: string) {
    const date = moment(dateStr);
    const time = moment(timeStr, 'HH:mm');

    date.set({
      hour: time.get('hour'),
      minute: time.get('minute'),
      second: time.get('second')
    });
    return date.format();
  }

  getDateWithCurrentTime(date: Date): Date {
    const _ = moment();
    // const newDate = moment(date).add({hours: _.hour(), minutes:_.minute() , seconds:_.second()});
    const newDate = moment(date).add({hours: _.hour(), minutes: _.minute()});
    return newDate.toDate();
  }

  getDateBySubtract(num: number, date?: Date, dateString?: boolean): string {
    if (date && !dateString) {
      return moment(date).subtract(num, 'days').format('YYYY-MM-DD');
    } else if (!date && dateString) {
      return moment().subtract(num, 'days').format('YYYY-MM-DD');
    } else {
      return moment().subtract(num, 'days').format();
    }

  }
  getDateString(date: Date, format?: string): string {
    const fm = format ? format : 'YYYY-MM-DD';
    return moment(date).format(fm);
  }


  getDateDifference(startDate: Date, endDate: Date) {
    const a = moment(startDate, 'M/D/YYYY');
    const b = moment(endDate, 'M/D/YYYY');
    return a.diff(b, 'ms');
  }

  addHourInCurrentTime(time: number) {
    const t = moment().tz("Asia/Dhaka").add(time, 'hours').format();
    return t;
  }

  addMinuteInCurrentTime(time: number) {
    const t = moment().add(time, 'minutes').format();
    return t;
  }


  convertMilliSeconds(milliseconds: number, format?: string) {
    let days;
    let hours;
    let minutes;
    let seconds;
    let totalHours;
    let totalMinutes;
    let totalSeconds;

    totalSeconds = Number(Math.floor(milliseconds / 1000));
    totalMinutes = Number(Math.floor(totalSeconds / 60));
    totalHours = Number(Math.floor(totalMinutes / 60));
    days = Number(Math.floor(totalHours / 24));

    seconds = Number(totalSeconds % 60);
    minutes = Number(totalMinutes % 60);
    hours = Number(totalHours % 24);

    switch (format) {
      case 's':
        return totalSeconds;
      case 'm':
        return totalMinutes;
      case 'h':
        return totalHours;
      case 'd':
        return days;
      default:
        return {d: days, h: hours, m: minutes, s: seconds};
    }
  }


  timeConvertTo12Hours(time: string) {
    return moment(time, ['HH.mm']).format('hh:mm a');
  }

  timeConvertTo24Hours(time: string) {
    return moment(time, ['h:mm A']).format('HH:mm');
  }

  getDateISO(date: Date): string {
    return moment(date).format();
  }

  getStartEndDate(date: Date, stringDate?: boolean): { firstDay: string | Date, lastDay: string | Date } {
    const y = date.getFullYear();
    const m = date.getMonth();

    const firstDate = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0);

    if (stringDate) {
      return {
        firstDay: this.getDateString(firstDate),
        lastDay: this.getDateString(lastDay),
      };
    }
    return {
      firstDay: new Date(y, m, 1),
      lastDay: new Date(y, m + 1, 0),
    };
  }


  /**
   * VALIDATE EMAIL
   */
  validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkValidPhone(phoneNo: string) {
    const re = /^[0-9]*$/;
    return re.test(phoneNo);
  }


  /**
   * GENDERS
   */
  get genders(): string[] {
    return ['Male', 'Female', 'Others'];
  }

  /**
   * GENERATE USER NAME
   */
  public slugWithoutSymbol(str?: string): string {
    if (str) {
      const rs = str.replace(/[^a-zA-Z ]/g, '');
      const rw = rs.replace(/\s/g, '');
      return rw.trim().toLowerCase();
    } else {
      return '';
    }
  }

  /**
   * GENERATE SLUG
   */

  public transformToSlug(value: string): string {
    return (
      (value as string)
        .trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase()
    );
  }

  /**
   * GET RANDOM NUMBER
   */
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getImageName(originalName: string): string {
    const array = originalName.split('.');
    array.pop();
    return array.join('');
  }

  getPopString(originalName: string) {
    const s = originalName.split('/').pop() as string;
    const array = s.split('.');
    array.pop();
    return array.join('');
  }

  /**
   * MERGE TWO SAME OBJECT ARRAY UNIQUE
   */

  mergeArrayUnique(array1: any[], array2: any[]): any[] {
    const array = array1.concat(array2);
    const a = array.concat();
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i]._id === a[j]._id) {
          a.splice(j--, 1);
        }
      }
    }
    return a;
  }

  uniqueArrayValues(array: any[], key: string) {
    return [...new Map(array.map(item =>
      [item[key], item])).values()];
  }

  uniqueArrayLodash(array: any[], key: string) {
    return _.uniqBy(array, key);
  }

  differenceValuesTwoArray(array1: any[], array2: any[], field: string) {
    return _.differenceWith(array1, array2, (o1, o2)=> {
      return o1[field] === o2[field]
    });
  }

  /**
   * REMOVE QUERY & HOST FROM URL
   */

  urlToRouter(url: string, removeHost?: boolean): string {
    const baseUrl = new URL(document.location.href).origin;
    const d = decodeURIComponent(url);
    const ru = d.replace(/\?.*/, '');
    let res;
    if (removeHost) {
      res = ru.replace(baseUrl, '');
    } else {
      res = ru;
    }
    return res;
  }

  removeUrlQuery(url: string) :any{
    if (url) {
      return url.replace(/\?.*/, '');
    }
  }

  queryStringToObject(url?: string): any {
    if (document.location.search) {
      const queryParam = new URLSearchParams(document.location.search);
      // @ts-ignore
      return Object.fromEntries(queryParam);
    } else {
      return null;
    }
  }

  queryString(url?: string): any {
    if (document.location.search) {
      return document.location.search;
    } else {
      return null;
    }
  }

  getHostBaseUrl() {
    return new URL(document.location.href).origin;
  }
  mergeArrayString(array1: string[], array2: string[]): string[] {
    const c = array1.concat(array2);
    return c.filter((item, pos) => c.indexOf(item) === pos);
  }


  /**
   * GET RANDOM NUMBER
   */

  getRandomOtpCode6(): string {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  /**
   * LAUNCH RELATED FUNCTIONS
   * GET PATH FROM SEAT STATUS
   * GET PATH FROM SEAT TYPE
   */
  getPathFromSeatStatus(status: number): string {
    switch (status) {
      case AirSeatStatus.AVAILABLE:
        return 'available';
      case AirSeatStatus.BOOKED:
        return 'booked';
      case AirSeatStatus.ISSUED:
        return 'issued';
      default:
        return '';
    }
  }

  getPathFromSeatType(type: number): string {
    switch (type) {
      case AirSeatType.Economy:
        return 'Economy';
      case AirSeatType.Any:
        return 'Any';
      default:
        return '';
    }
  }


}
