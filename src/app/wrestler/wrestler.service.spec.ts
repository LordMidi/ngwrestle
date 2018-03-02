import { TestBed, inject } from '@angular/core/testing';

import { WrestlerService } from './wrestler.service';

describe('WrestlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WrestlerService]
    });
  });

  it('should be created', inject([WrestlerService], (service: WrestlerService) => {
    expect(service).toBeTruthy();
  }));
});
