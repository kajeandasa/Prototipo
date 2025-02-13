import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDocumentoComponent } from './item-documento.component';

describe('ItemDocumentoComponent', () => {
  let component: ItemDocumentoComponent;
  let fixture: ComponentFixture<ItemDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
