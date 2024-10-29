import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGarantiaComponent } from './actualizar-garantia.component';

describe('ActualizarGarantiaComponent', () => {
  let component: ActualizarGarantiaComponent;
  let fixture: ComponentFixture<ActualizarGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarGarantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
