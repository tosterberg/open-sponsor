import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepworkComponent } from './stepwork.component';

describe('StepworkComponent', () => {
  let component: StepworkComponent;
  let fixture: ComponentFixture<StepworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
