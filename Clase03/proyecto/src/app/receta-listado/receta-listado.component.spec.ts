import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaListadoComponent } from './receta-listado.component';

describe('RecetaListadoComponent', () => {
  let component: RecetaListadoComponent;
  let fixture: ComponentFixture<RecetaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
