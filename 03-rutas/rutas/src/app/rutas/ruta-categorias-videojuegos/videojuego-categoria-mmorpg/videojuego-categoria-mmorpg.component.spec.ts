import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoCategoriaMmorpgComponent } from './videojuego-categoria-mmorpg.component';

describe('VideojuegoCategoriaMmorpgComponent', () => {
  let component: VideojuegoCategoriaMmorpgComponent;
  let fixture: ComponentFixture<VideojuegoCategoriaMmorpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoCategoriaMmorpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoCategoriaMmorpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
