import { TestBed, inject } from '@angular/core/testing';

import { StartRetrieveService } from './start-retrieve.service';

describe('StartRetrieveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartRetrieveService]
    });
  });

  it('should be created', inject([StartRetrieveService], (service: StartRetrieveService) => {
    expect(service).toBeTruthy();
  }));
});
