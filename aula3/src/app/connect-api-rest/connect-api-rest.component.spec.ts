import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectApiRestComponent } from './connect-api-rest.component';

describe('ConnectApiRestComponent', () => {
  let component: ConnectApiRestComponent;
  let fixture: ComponentFixture<ConnectApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectApiRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
