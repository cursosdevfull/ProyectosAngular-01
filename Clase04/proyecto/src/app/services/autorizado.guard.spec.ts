import { TestBed, async, inject } from '@angular/core/testing';

import { AutorizadoGuard } from './autorizado.guard';

describe('AutorizadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizadoGuard]
    });
  });

  it('should ...', inject([AutorizadoGuard], (guard: AutorizadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
