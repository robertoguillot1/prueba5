import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoPrestamoComponent } from './mostrar-tipo-prestamo.component';

describe('MostrarTipoPrestamoComponent', () => {
  let component: MostrarTipoPrestamoComponent;
  let fixture: ComponentFixture<MostrarTipoPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarTipoPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTipoPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
