import { TestBed } from '@angular/core/testing';

import { RetcaptchaService } from './retcaptcha.service';

describe('RetcaptchaService', () => {
  let service: RetcaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetcaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
