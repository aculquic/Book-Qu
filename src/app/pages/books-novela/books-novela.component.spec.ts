import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNovelaComponent } from './books-novela.component';

describe('BooksNovelaComponent', () => {
  let component: BooksNovelaComponent;
  let fixture: ComponentFixture<BooksNovelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksNovelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksNovelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
