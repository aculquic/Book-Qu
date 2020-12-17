import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksGeneralComponent } from './booksGeneral.component';

describe('BooksGeneralComponent', () => {
  let component: BooksGeneralComponent;
  let fixture: ComponentFixture<BooksGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
