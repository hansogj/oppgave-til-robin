import { Component, OnInit } from '@angular/core';
import { BrukerService, IBruker } from './bruker.service';
@Component({
  selector: 'app-bruker',
  templateUrl: './bruker.component.html',
  styleUrls: ['../app.component.scss', './bruker.component.scss']
})
export class BrukerComponent implements OnInit {


  public bruker: IBruker = {} as IBruker;
  constructor(private brukerService: BrukerService) { }

  ngOnInit() {
    this.brukerService.bruker
      .filter(bruker => !!bruker)
      .subscribe(bruker => this.bruker = bruker)
  }

}
