import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrukerComponent } from './bruker.component';
import { BrukerService } from './bruker.service';
@NgModule({
  imports: [CommonModule],
  declarations: [BrukerComponent],
  exports: [BrukerComponent],
  providers:[BrukerService]

})
export class BrukerModule { }
