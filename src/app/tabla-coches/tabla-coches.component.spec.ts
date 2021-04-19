import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Viaje } from '../models/viaje';

import { TablaCochesComponent } from './tabla-coches.component';

describe('TablaCochesComponent', () => {
  let component: TablaCochesComponent;
  let fixture: ComponentFixture<TablaCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
