import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarListComponent } from './agregar-list.component';

describe('AgregarListComponent', () => {
  let component: AgregarListComponent;
  let fixture: ComponentFixture<AgregarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
