import { TestBed } from '@angular/core/testing';

import { Server } from './server.service';

describe('HeroService', () => {
  let service: Server;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Server);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
