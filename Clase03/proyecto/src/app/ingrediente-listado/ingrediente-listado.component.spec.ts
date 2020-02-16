import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteListadoComponent } from './ingrediente-listado.component';

describe('IngredienteListadoComponent', () => {
  let component: IngredienteListadoComponent;
  let fixture: ComponentFixture<IngredienteListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
