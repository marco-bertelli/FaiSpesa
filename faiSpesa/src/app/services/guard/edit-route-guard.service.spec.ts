import { TestBed } from '@angular/core/testing';

import { EditRouteGuardService } from './edit-route-guard.service';

describe('EditRouteGuardService', () => {
  let service: EditRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
