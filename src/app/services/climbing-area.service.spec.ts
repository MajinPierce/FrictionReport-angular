import { TestBed } from '@angular/core/testing';

import { ClimbingAreaService } from './climbing-area.service';

describe('ClimbingAreaService', () => {
  let service: ClimbingAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbingAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
