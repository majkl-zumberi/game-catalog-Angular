import { TestBed } from '@angular/core/testing';

import { CanActivateRegistrationGuard } from './can-activate-registration.guard';

describe('CanActivateRegistrationGuard', () => {
  let guard: CanActivateRegistrationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateRegistrationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
