import { TestBed } from '@angular/core/testing';

import { MoveableServiceService } from './moveable-service.service';

describe('MoveableServiceService', () => {
  let service: MoveableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
