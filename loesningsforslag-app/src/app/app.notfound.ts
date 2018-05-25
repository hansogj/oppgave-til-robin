import { Component } from '@angular/core';

const template = `
<div class="card main-card ">
  <div class="card-header bg-danger text-white">404</div>
  <div class="card-body text-danger">
    <h5 class="card-title">Beklager!</h5>
    <p class="card-text">Vi finner ikke siden du leter etter.</p>
  </div>
</div>
`;

@Component({
    template,
    styleUrls: ['./app.component.scss']
})
export class NotfoundComponent {
  
 }
