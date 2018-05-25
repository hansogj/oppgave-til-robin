import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrukerComponent } from './bruker/bruker.component';
import { SamtalerComponent } from './samtaler/samtaler.component';
import { NotfoundComponent } from './app.notfound';


export const routes: Routes = [
  { path: `bruker`, component: BrukerComponent },
  { path: `samtaler`, component: SamtalerComponent },
  { path: '**', component: NotfoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
