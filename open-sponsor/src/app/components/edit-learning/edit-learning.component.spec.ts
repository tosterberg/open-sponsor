import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLearningComponent } from './edit-learning.component';

describe('EditLearningComponent', () => {
  let component: EditLearningComponent;
  let fixture: ComponentFixture<EditLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
