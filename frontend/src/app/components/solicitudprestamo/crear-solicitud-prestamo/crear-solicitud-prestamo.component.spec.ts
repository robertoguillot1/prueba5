import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudPrestamoComponent } from './crear-solicitud-prestamo.component';

describe('CrearSolicitudPrestamoComponent', () => {
  let component: CrearSolicitudPrestamoComponent;
  let fixture: ComponentFixture<CrearSolicitudPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSolicitudPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
