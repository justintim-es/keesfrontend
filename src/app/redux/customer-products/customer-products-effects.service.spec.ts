import { TestBed } from '@angular/core/testing';

import { CustomerProductsEffectsService } from './customer-products-effects.service';

describe('CustomerProductsEffectsService', () => {
  let service: CustomerProductsEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerProductsEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
