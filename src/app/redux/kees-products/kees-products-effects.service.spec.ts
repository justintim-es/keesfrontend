import { TestBed } from '@angular/core/testing';

import { KeesProductsEffectsService } from './kees-products-effects.service';

describe('KeesProductsEffectsService', () => {
  let service: KeesProductsEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeesProductsEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
