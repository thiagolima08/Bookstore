import { TestBed } from '@angular/core/testing';

import { IncrementaCartService } from './incrementa-cart.service';

describe('IncrementaCartService', () => {
  let service: IncrementaCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementaCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
