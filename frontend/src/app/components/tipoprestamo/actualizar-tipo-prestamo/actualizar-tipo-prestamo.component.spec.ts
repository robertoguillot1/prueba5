import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoPrestamoComponent } from './actualizar-tipo-prestamo.component';

describe('ActualizarTipoPrestamoComponent', () => {
  let component: ActualizarTipoPrestamoComponent;
  let fixture: ComponentFixture<ActualizarTipoPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarTipoPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarTipoPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
