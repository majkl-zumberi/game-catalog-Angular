import { TestBed } from '@angular/core/testing';

import { DetailToEditService } from './detail-to-edit.service';

describe('DetailToEditService', () => {
  let service: DetailToEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailToEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
