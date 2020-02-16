import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaEdicionComponent } from './receta-edicion.component';

describe('RecetaEdicionComponent', () => {
  let component: RecetaEdicionComponent;
  let fixture: ComponentFixture<RecetaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
