import { TestBed } from '@angular/core/testing';

import { ListMenuResolverService } from './list-menu-resolver.service';

describe('ListMenuResolverService', () => {
  let service: ListMenuResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMenuResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
