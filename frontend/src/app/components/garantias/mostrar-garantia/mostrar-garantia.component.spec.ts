import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGarantiaComponent } from './mostrar-garantia.component';

describe('MostrarGarantiaComponent', () => {
  let component: MostrarGarantiaComponent;
  let fixture: ComponentFixture<MostrarGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarGarantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
