import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembolsoComponent } from './desembolso.component';

describe('ConvocatoriaComponent', () => {
  let component: DesembolsoComponent;
  let fixture: ComponentFixture<DesembolsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesembolsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
