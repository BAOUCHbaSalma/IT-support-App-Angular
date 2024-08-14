import { TestBed } from '@angular/core/testing';

import { FailureHistoryService } from './failure-history.service';

describe('FailureHistoryService', () => {
  let service: FailureHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FailureHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
