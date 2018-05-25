import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { asObservable, BehaviorSubject, ResponseBody, IRest, parse } from './util';

import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
  private poller: number;
  private observableIntervall: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private observableBrukerUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private http: Http) { }

  get brukerUrl(): Observable<string> {
    return asObservable(this.observableBrukerUrl);
  }

  get pollInterval(): Observable<number> {
    return asObservable(this.observableIntervall);
  }

  start() {
    this.http.get('/api/config')
      .map((res: ResponseBody) => parse(res))
      .subscribe((cfg: IConfig) => {
        this.observableIntervall.next(parseInt(`${cfg.poll_intervall}`));
        this.observableBrukerUrl.next(cfg.links.bruker);
      });
  }
}

interface IConfig extends IRest {
  poll_intervall: number;
}

