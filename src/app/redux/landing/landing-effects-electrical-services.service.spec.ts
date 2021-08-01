import { TestBed } from '@angular/core/testing';

import { LandingEffectsElectricalServicesService } from './landing-effects-electrical-services.service';

describe('LandingEffectsElectricalServicesService', () => {
  let service: LandingEffectsElectricalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingEffectsElectricalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
