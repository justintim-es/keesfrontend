import { TestBed } from '@angular/core/testing';

import { UploadEffectsService } from './upload-effects.service';

describe('UploadEffectsService', () => {
  let service: UploadEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
