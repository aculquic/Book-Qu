import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFiccionComponent } from './book-ficcion.component';

describe('BookFiccionComponent', () => {
  let component: BookFiccionComponent;
  let fixture: ComponentFixture<BookFiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
