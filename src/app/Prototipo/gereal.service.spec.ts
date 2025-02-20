import { TestBed } from '@angular/core/testing';

import { GerealService } from './gereal.service';

describe('GerealService', () => {
  let service: GerealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
