import { TestBed } from '@angular/core/testing';

import { AcompañantesService } from './acompañantes.service';

describe('AcompañantesService', () => {
  let service: AcompañantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompañantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
