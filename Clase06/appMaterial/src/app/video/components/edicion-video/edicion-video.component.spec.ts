import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionVideoComponent } from './edicion-video.component';

describe('EdicionVideoComponent', () => {
  let component: EdicionVideoComponent;
  let fixture: ComponentFixture<EdicionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
