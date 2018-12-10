import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFinishComponent } from './agregar-finish.component';

describe('AgregarFinishComponent', () => {
  let component: AgregarFinishComponent;
  let fixture: ComponentFixture<AgregarFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
