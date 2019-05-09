import { TestBed, inject } from '@angular/core/testing';

import { TrasferService } from './trasfer.service';

describe('TrasferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrasferService]
    });
  });

  it('should be created', inject([TrasferService], (service: TrasferService) => {
    expect(service).toBeTruthy();
  }));
});
