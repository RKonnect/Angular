import { TestBed } from '@angular/core/testing';

import { BaseApiRestService } from './base-api-rest.service';

describe('BaseApiRestService', () => {
  let service: BaseApiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
