import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirUserComponent } from './excluir-user.component';

describe('ExcluirUserComponent', () => {
  let component: ExcluirUserComponent;
  let fixture: ComponentFixture<ExcluirUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
