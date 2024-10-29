import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPagoComponent } from './eliminar-pago.component';

describe('EliminarPagoComponent', () => {
  let component: EliminarPagoComponent;
  let fixture: ComponentFixture<EliminarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
