import { TestBed } from '@angular/core/testing';

import { DeveresService } from './deveres.service';

describe('DeveresService', () => {
  let service: DeveresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
