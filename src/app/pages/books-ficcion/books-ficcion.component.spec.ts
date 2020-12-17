import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFiccionComponent } from './books-ficcion.component';

describe('BooksFiccionComponent', () => {
  let component: BooksFiccionComponent;
  let fixture: ComponentFixture<BooksFiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
