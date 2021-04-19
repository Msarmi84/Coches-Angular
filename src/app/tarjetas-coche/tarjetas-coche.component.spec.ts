import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCocheComponent } from './tarjetas-coche.component';

describe('TarjetasCocheComponent', () => {
  let component: TarjetasCocheComponent;
  let fixture: ComponentFixture<TarjetasCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
