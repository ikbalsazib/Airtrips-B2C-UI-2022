import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  // tslint:disable-next-line:ban-types
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(5000).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data['preload']
      ? loadRoute(route.data['delay'])
      : of(null);
  }
}
