import { TestBed } from '@angular/core/testing';

import { NotificacionesService } from './notificaciones.service';

describe('NotificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionesService = TestBed.get(NotificacionesService);
    expect(service).toBeTruthy();
  });
});
