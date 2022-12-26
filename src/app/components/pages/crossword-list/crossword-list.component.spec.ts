import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordListComponent } from './crossword-list.component';

describe('CrosswordListComponent', () => {
  let component: CrosswordListComponent;
  let fixture: ComponentFixture<CrosswordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrosswordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrosswordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
