import { TestBed, inject } from '@angular/core/testing';

import { BrukerService } from './bruker.service';

describe('BrukerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrukerService]
    });
  });

  it('should be created', inject([BrukerService], (service: BrukerService) => {
    expect(service).toBeTruthy();
  }));
});
