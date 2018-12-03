import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarActionsComponent } from './agregar-actions.component';

describe('AgregarActionsComponent', () => {
  let component: AgregarActionsComponent;
  let fixture: ComponentFixture<AgregarActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
