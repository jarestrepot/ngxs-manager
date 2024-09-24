import { TestBed } from '@angular/core/testing';

import { CharService } from './chat.service';

describe('ChatService', () => {
  let service: CharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
