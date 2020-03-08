import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionRecetaComponent } from './edicion-receta.component';

describe('EdicionRecetaComponent', () => {
  let component: EdicionRecetaComponent;
  let fixture: ComponentFixture<EdicionRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
