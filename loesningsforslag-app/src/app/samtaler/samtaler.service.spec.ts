import { TestBed, inject } from '@angular/core/testing';

import { SamtalerService } from './samtaler.service';

describe('SamtalerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamtalerService]
    });
  });

  it('should be created', inject([SamtalerService], (service: SamtalerService) => {
    expect(service).toBeTruthy();
  }));
});
