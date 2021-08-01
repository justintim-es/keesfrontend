import { TestBed } from '@angular/core/testing';

import { KeesEffectsService } from './kees-effects.service';

describe('KeesEffectsService', () => {
  let service: KeesEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeesEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
