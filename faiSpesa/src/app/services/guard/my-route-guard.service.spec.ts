import { TestBed } from '@angular/core/testing';

import { MyRouteGuardService } from './my-route-guard.service';

describe('MyRouteGuardService', () => {
  let service: MyRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
