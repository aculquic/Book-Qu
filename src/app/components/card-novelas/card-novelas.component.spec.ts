import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNovelasComponent } from './card-novelas.component';

describe('CardNovelasComponent', () => {
  let component: CardNovelasComponent;
  let fixture: ComponentFixture<CardNovelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNovelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNovelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
