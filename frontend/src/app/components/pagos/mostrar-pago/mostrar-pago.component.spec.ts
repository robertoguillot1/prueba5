import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPagoComponent } from './mostrar-pago.component';

describe('MostrarPagoComponent', () => {
  let component: MostrarPagoComponent;
  let fixture: ComponentFixture<MostrarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
