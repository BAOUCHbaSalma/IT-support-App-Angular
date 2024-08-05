import { TestBed } from '@angular/core/testing';

import { IntercepteurServiceService } from './intercepteur-service.service';

describe('IntercepteurServiceService', () => {
  let service: IntercepteurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercepteurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
