import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublishedLearningsComponent } from './my-published-learnings.component';

describe('MyPublishedLearningsComponent', () => {
  let component: MyPublishedLearningsComponent;
  let fixture: ComponentFixture<MyPublishedLearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPublishedLearningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublishedLearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
