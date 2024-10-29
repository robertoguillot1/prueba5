import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarGarantiaComponent } from './eliminar-garantia.component';

describe('EliminarGarantiaComponent', () => {
  let component: EliminarGarantiaComponent;
  let fixture: ComponentFixture<EliminarGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarGarantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
