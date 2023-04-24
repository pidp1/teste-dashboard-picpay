import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPagamentos } from 'src/app/models/IPagamentos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-novo-pagamento',
  templateUrl: './novo-pagamento.component.html',
  styleUrls: ['./novo-pagamento.component.css']
})
export class NovoPagamentoComponent {

  public formNovoPagamento : FormGroup;

  constructor (private fb: FormBuilder, private crudService: CrudService){
    this.formNovoPagamento = fb.group({
      date: new Date(),
      firstName: '',
      isPayed: false,
      lastName: '',
      title: '',
      username: '',
      value: 0,
      
    })
  }

  public criarNovoPagamento(): void {
    if(this.formNovoPagamento.valid){
      const novoPagamento: IPagamentos= this.formNovoPagamento.value;
      this.crudService.createPayment(novoPagamento).subscribe(response => {
        alert('novo pagamento cadastrado')
      })

    }
  }
}
