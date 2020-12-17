import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFiccionComponent } from './card-ficcion.component';

describe('CardFiccionComponent', () => {
  let component: CardFiccionComponent;
  let fixture: ComponentFixture<CardFiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
