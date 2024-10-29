import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoPrestamoComponent } from './eliminar-tipo-prestamo.component';

describe('EliminarTipoPrestamoComponent', () => {
  let component: EliminarTipoPrestamoComponent;
  let fixture: ComponentFixture<EliminarTipoPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarTipoPrestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
