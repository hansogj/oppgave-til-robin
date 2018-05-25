import { Component, OnInit } from '@angular/core';
import { SamtalerService, ISamtaler } from './samtaler.service';
@Component({
  selector: 'app-samtaler',
  templateUrl: './samtaler.component.html',
  styleUrls: ['./samtaler.component.scss']
})
export class SamtalerComponent implements OnInit {

  public samtaler: ISamtaler = {} as ISamtaler;
  constructor(private samtalerService: SamtalerService) { }

  ngOnInit() {
    this.samtalerService.samtaler
      .subscribe((s: ISamtaler) => this.samtaler = s);
  }

  varighet(val: number): string {
    return `${Math.ceil(val / 60000)} min`;
  }

  visKunMineUtgaaende() {
    this.samtalerService.visKunMineUtgaaende();
  }

  visKunMineInnkommende() {
    this.samtalerService.visKunMineInnkommende();
  }

  visAlle() {
    this.samtalerService.visAlle();
  }

  sistOppdatert(samtaler): string {
    return new Date(samtaler.timestamp).toString();
  }

  bgClass(type: string): string {
    return [
      { type: "112", val: 'info' },
      { type: "02800", val: 'success' },
      { type: "alarm", val: 'danger' },
      { type: "intern", val: 'warning' },
    ].filter(borderClass => borderClass.type === type)
      .map(borderClass => borderClass.val).shift();
  }
}
