import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './app.notfound';
import { routing } from './app.routes';
import { AppService } from './app.service';
import { NavModule } from './nav/nav.module';
import { BrukerModule } from './bruker/bruker.module';
import { BrukerService } from './bruker/bruker.service';
import { SamtalerModule } from './samtaler/samtaler.module';
import { SamtalerService } from './samtaler/samtaler.service';


@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [BrowserModule, routing, HttpModule, NavModule, BrukerModule, SamtalerModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private service: AppService, private brukerService: BrukerService, private samtalerService: SamtalerService) {
    service.start();
  }
}
