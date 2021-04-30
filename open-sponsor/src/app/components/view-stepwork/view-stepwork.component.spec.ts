import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStepworkComponent } from './view-stepwork.component';

describe('ViewStepworkComponent', () => {
  let component: ViewStepworkComponent;
  let fixture: ComponentFixture<ViewStepworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStepworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStepworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
