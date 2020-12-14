import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('Мои тесты SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should be add 'bar' to given string", () => {
    const str = 'tool';
    const expectedRes = 'toolbar';
    expect(service.addBar(str)).toEqual(expectedRes);
  });
});
