import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioManteminientoComponent } from './formularioMantenimiento.component';

describe('FormularioManteminientoComponent', () => {
  let component: FormularioManteminientoComponent;
  let fixture: ComponentFixture<FormularioManteminientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioManteminientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioManteminientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
