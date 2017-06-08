import { TestBed, inject } from '@angular/core/testing';

import { GeoserviceService } from './geoservice.service';

describe('GeoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoserviceService]
    });
  });

  it('should ...', inject([GeoserviceService], (service: GeoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
