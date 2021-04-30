import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStepworkComponent } from './edit-stepwork.component';

describe('EditStepworkComponent', () => {
  let component: EditStepworkComponent;
  let fixture: ComponentFixture<EditStepworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStepworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStepworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
