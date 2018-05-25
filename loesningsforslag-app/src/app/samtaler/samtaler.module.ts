import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamtalerComponent } from './samtaler.component';
import { SamtalerService } from './samtaler.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [SamtalerComponent],
  exports: [SamtalerComponent],
  providers: [SamtalerService]
})
export class SamtalerModule { }
