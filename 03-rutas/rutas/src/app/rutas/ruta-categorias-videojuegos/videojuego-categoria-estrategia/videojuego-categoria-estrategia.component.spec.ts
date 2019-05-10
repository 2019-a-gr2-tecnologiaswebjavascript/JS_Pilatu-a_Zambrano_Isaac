import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoCategoriaEstrategiaComponent } from './videojuego-categoria-estrategia.component';

describe('VideojuegoCategoriaEstrategiaComponent', () => {
  let component: VideojuegoCategoriaEstrategiaComponent;
  let fixture: ComponentFixture<VideojuegoCategoriaEstrategiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoCategoriaEstrategiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoCategoriaEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
