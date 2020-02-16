import { TestBed } from '@angular/core/testing';

import { RecetaService } from './receta.service';

describe('RecetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetaService = TestBed.get(RecetaService);
    expect(service).toBeTruthy();
  });
});
