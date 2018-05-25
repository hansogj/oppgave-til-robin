import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { asObservable, BehaviorSubject, ResponseBody, IRest, parse } from '../util';
import { BrukerService, IBruker } from '../bruker/bruker.service';

import 'rxjs/add/observable/zip';
@Injectable()
export class SamtalerService {

  private bruker: IBruker
  private cachedSamtaler: ISamtaler;
  private aktivtFilter: (samtale: ISamtale) => boolean = (_) => true;
  private observableSamtaler: BehaviorSubject<ISamtaler> = new BehaviorSubject<ISamtaler>({} as ISamtaler);

  constructor(
    private http: Http,
    private brukerService: BrukerService,
    private appService: AppService) {

    Observable.zip.apply(this, [this.brukerService.bruker, this.appService.pollInterval])
      .filter((brukerIntervall: any[]) => brukerIntervall.filter(e => !!e).length === 2)
      .subscribe(([bruker, intervall]) => {
        this.bruker = bruker;
        this.startPolling(bruker.links.samtaler, intervall)
      });
  }

  get samtaler(): Observable<ISamtaler> {
    return asObservable(this.observableSamtaler);
  }

  visAlle() {
    debugger
    this.aktivtFilter = () => true;
    this.observableSamtaler.next(this.filtrerPaaAktivtFilter());
  }

  visKunMineInnkommende() {
    this.aktivtFilter = (samtale: ISamtale) => samtale.tilNummer === this.bruker.tlfNummer;
    this.observableSamtaler.next(this.filtrerPaaAktivtFilter())
  }

  visKunMineUtgaaende() {
    this.aktivtFilter = (samtale: ISamtale) => samtale.fraNummer === this.bruker.tlfNummer;
    this.observableSamtaler.next(this.filtrerPaaAktivtFilter())
  }

  private startPolling(url: string, interval: number) {
    const poller = () => {
      this.http.get(url)
        .map((res: ResponseBody) => parse(res))
        .map((samtaler: ISamtaler) => this.cachedSamtaler = this.cachedSamtaler = Object.assign({}, samtaler))
        .map((samtaler: ISamtaler) => this.filtrerPaaAktivtFilter(samtaler))
        .subscribe((samtaler: ISamtaler) => this.observableSamtaler.next(samtaler));
    };

    setInterval(() => poller(), interval);
    poller();
  }

  private filtrerPaaAktivtFilter(samtaler: ISamtaler = Object.assign({}, this.cachedSamtaler)): ISamtaler {
    // dette kunne vært løst med immutables 
    return <ISamtaler>{ samtaler: samtaler.samtaler.filter(samtale => this.aktivtFilter(samtale)) };
  }
}

export interface ISamtaler extends IRest {
  samtaler: ISamtale[];
}

export interface ISamtale {
  id: number;
  fraNummer: string;
  tilNummer: string;
  type: string;
  varighet: number;

}