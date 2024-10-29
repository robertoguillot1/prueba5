import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSolicitudPrestamoComponent } from './mostrar-solicitud-prestamo.component';

describe('MostrarSolicitudPrestamoComponent', () => {
  let component: MostrarSolicitudPrestamoComponent;
  let fixture: ComponentFixture<MostrarSolicitudPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarSolicitudPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
