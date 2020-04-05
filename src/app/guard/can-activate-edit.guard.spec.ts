import { TestBed } from '@angular/core/testing';

import { CanActivateEditGuard } from './can-activate-edit.guard';

describe('CanActivateEditGuard', () => {
  let guard: CanActivateEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
