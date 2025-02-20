import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAlertaComponent } from './tipo-alerta.component';

describe('TipoAlertaComponent', () => {
  let component: TipoAlertaComponent;
  let fixture: ComponentFixture<TipoAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAlertaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
