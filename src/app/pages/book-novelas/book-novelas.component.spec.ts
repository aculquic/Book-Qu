import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNovelasComponent } from './book-novelas.component';

describe('BookNovelasComponent', () => {
  let component: BookNovelasComponent;
  let fixture: ComponentFixture<BookNovelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNovelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNovelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
