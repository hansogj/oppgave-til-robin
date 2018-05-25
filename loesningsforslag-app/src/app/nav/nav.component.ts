import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { asObservable, BehaviorSubject, ResponseBody, IRest, parse } from '../util';
import { BrukerService, IBruker } from '../bruker/bruker.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public bruker: IBruker = {} as IBruker;
  constructor(private router: Router, private brukerService: BrukerService) { }

  ngOnInit() {
    this.brukerService.bruker
      .filter(bruker => !!bruker)
      .subscribe(bruker => this.bruker = bruker)
  }

  goTo(link: string) {
        this.router.navigate([link]);
    }

}
