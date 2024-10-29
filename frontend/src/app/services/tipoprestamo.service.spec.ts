import { TestBed } from '@angular/core/testing';

import { TipoprestamoService } from './tipoprestamo.service';

describe('TipoprestamoService', () => {
  let service: TipoprestamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoprestamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
