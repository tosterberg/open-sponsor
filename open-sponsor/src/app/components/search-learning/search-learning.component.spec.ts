import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLearningComponent } from './search-learning.component';

describe('SearchLearningComponent', () => {
  let component: SearchLearningComponent;
  let fixture: ComponentFixture<SearchLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
