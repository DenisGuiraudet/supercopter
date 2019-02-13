import { TestBed } from '@angular/core/testing';

import { ChopperService } from './chopper.service';

describe('ChopperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChopperService = TestBed.get(ChopperService);
    expect(service).toBeTruthy();
  });
});
