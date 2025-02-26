import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCombocatoriaComponent } from './tabla-combocatoria.component';

describe('TablaCombocatoriaComponent', () => {
  let component: TablaCombocatoriaComponent;
  let fixture: ComponentFixture<TablaCombocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCombocatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCombocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
