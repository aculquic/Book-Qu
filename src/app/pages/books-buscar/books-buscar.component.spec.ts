import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBuscarComponent } from './books-buscar.component';

describe('BooksBuscarComponent', () => {
  let component: BooksBuscarComponent;
  let fixture: ComponentFixture<BooksBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
