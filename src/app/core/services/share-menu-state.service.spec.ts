import { TestBed } from '@angular/core/testing';

import { ShareMenuStateService } from './share-menu-state.service';

describe('ShareMenuStateService', () => {
  let service: ShareMenuStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMenuStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
