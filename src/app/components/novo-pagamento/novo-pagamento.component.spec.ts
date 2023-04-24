import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPagamentoComponent } from './novo-pagamento.component';

describe('NovoPagamentoComponent', () => {
  let component: NovoPagamentoComponent;
  let fixture: ComponentFixture<NovoPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
