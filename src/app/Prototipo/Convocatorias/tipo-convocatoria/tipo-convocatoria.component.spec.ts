import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoConvocatoriaComponent } from './tipo-convocatoria.component';

describe('TipoConvocatoriaComponent', () => {
  let component: TipoConvocatoriaComponent;
  let fixture: ComponentFixture<TipoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoConvocatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
