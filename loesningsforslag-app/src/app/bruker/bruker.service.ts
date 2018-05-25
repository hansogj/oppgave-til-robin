import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { asObservable, BehaviorSubject, ResponseBody, IRest, parse } from '../util';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BrukerService {

  private observableBruker: BehaviorSubject<IBruker> = new BehaviorSubject<IBruker>({}as IBruker);

  constructor(private http: Http, private appService: AppService) {
    this.appService.brukerUrl
      .filter(url => !!url)
      .flatMap((url: string) => this.http.get(url))
      .map((res: ResponseBody) => parse(res))
      .subscribe((bruker: IBruker) => this.observableBruker.next(bruker));
  }

  get bruker(): Observable<IBruker> {
    return asObservable(this.observableBruker);
  }
}

export interface IBruker extends IRest {
  navn: string,
  bid: string;
  tlfNummer: string;
}
