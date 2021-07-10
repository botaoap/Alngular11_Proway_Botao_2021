import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestConnectionComponent } from './api-rest-connection.component';

describe('ApiRestConnectionComponent', () => {
  let component: ApiRestConnectionComponent;
  let fixture: ComponentFixture<ApiRestConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRestConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRestConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
