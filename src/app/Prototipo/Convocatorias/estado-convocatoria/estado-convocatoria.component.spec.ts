import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoConvocatoriaComponent } from './estado-convocatoria.component';

describe('EstadoConvocatoriaComponent', () => {
  let component: EstadoConvocatoriaComponent;
  let fixture: ComponentFixture<EstadoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoConvocatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
