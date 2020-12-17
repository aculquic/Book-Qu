import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscarComponent } from './card-buscar.component';

describe('CardBuscarComponent', () => {
  let component: CardBuscarComponent;
  let fixture: ComponentFixture<CardBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
