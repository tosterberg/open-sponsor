import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectUsersComponent } from './connect-users.component';

describe('ConnectUsersComponent', () => {
  let component: ConnectUsersComponent;
  let fixture: ComponentFixture<ConnectUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
