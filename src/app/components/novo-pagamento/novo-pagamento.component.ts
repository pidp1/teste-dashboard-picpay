import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-novo-pagamento',
  templateUrl: './novo-pagamento.component.html',
  styleUrls: ['./novo-pagamento.component.css'],
})
export class NovoPagamentoComponent {
  public formNovoPagamento: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private _matDialogRef: MatDialogRef<NovoPagamentoComponent>
  ) {
    this.formNovoPagamento = fb.group({
      date: [new Date()],
      firstName: [''],
      isPayed: [false],
      lastName: [''],
      title: [''],
      username: [''],
      value: [0],
    });
  }

  public criarNovoPagamento(): void {
    if (this.formNovoPagamento.valid) {
      console.log('novo pagamento enviado');
      this.crudService
        .createPayment(this.formNovoPagamento.value)
        .subscribe((response) => {
          alert('novo pagamento cadastrado');
          this.formNovoPagamento.reset();
          this._matDialogRef.close(true)
        });
    }
  }
}
