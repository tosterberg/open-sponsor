import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponseeStepworkComponent } from './sponsee-stepwork.component';

describe('SponseeStepworkComponent', () => {
  let component: SponseeStepworkComponent;
  let fixture: ComponentFixture<SponseeStepworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponseeStepworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponseeStepworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
