import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSolicitudPrestamoComponent } from './actualizar-solicitud-prestamo.component';

describe('ActualizarSolicitudPrestamoComponent', () => {
  let component: ActualizarSolicitudPrestamoComponent;
  let fixture: ComponentFixture<ActualizarSolicitudPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarSolicitudPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
