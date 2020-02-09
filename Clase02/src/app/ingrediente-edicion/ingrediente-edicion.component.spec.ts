import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteEdicionComponent } from './ingrediente-edicion.component';

describe('IngredienteEdicionComponent', () => {
  let component: IngredienteEdicionComponent;
  let fixture: ComponentFixture<IngredienteEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
