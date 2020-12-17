import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuscarComponent } from './book-buscar.component';

describe('BookBuscarComponent', () => {
  let component: BookBuscarComponent;
  let fixture: ComponentFixture<BookBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
