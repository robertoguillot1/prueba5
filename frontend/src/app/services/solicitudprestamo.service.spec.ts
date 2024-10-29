import { TestBed } from '@angular/core/testing';

import { SolicitudprestamoService } from './solicitudprestamo.service';

describe('SolicitudprestamoService', () => {
  let service: SolicitudprestamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudprestamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
