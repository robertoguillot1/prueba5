import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudPrestamoComponent } from './eliminar-solicitud-prestamo.component';

describe('EliminarSolicitudPrestamoComponent', () => {
  let component: EliminarSolicitudPrestamoComponent;
  let fixture: ComponentFixture<EliminarSolicitudPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarSolicitudPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
