import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPagamentos } from 'src/app/models/IPagamentos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar-pagamento',
  templateUrl: './editar-pagamento.component.html',
  styleUrls: ['./editar-pagamento.component.css'],
})
export class EditarPagamentoComponent implements OnInit {
  payForm: FormGroup;

  public pagamento: IPagamentos = {
    date: new Date(),
    firstName: '',
    isPayed: false,
    lastName: '',
    title: '',
    username: '',
    value: 0,
    id: '',
  };

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.payForm = this.formBuilder.group({
      date: [new Date()],
      firstName: [''],
      isPayed: [false],
      lastName:[ ''],
      title:[ ''],
      username:[ ''],
      value: [0],
    });
  }

  ngOnInit(): void {
    this.initializeFields();
    this.fillFormToUpdate(this.pagamento);
  }

  private initializeFields() {
    const idPayment: string | null = this.route.snapshot.paramMap.get('id');
    if (idPayment != null && idPayment != undefined) {
      this.crudService.getPaymentById(idPayment).subscribe({
        next: (pagamento) => {
          this.pagamento = pagamento;
          this.fillFormToUpdate(pagamento);
        },
      });
    }
  }

  public update(): void {
    if (this.payForm.valid) {
      console.log(this.payForm.value);
      const idPayment: string | null = this.route.snapshot.paramMap.get('id');
      this.crudService
        .updatePaymentById(idPayment!, this.payForm.value)
        .subscribe({
          next: (val: any) => {
            alert('update feito com sucesso');
            this.router.navigate(['/dashboard']);
          },
          error: (error: any) => {
            console.error(error);
          },
        });
    }
  }

  fillFormToUpdate(pagamento: IPagamentos) {
    console.log(this.pagamento.id);
    this.payForm.setValue({
      date: pagamento.date,
      title: pagamento.title,
      isPayed: pagamento.isPayed,
      firstName:pagamento.firstName,
      lastName:pagamento.lastName,
      username: pagamento.username,
      value: pagamento.value
    });
  }

  updatePay() {
    if (this.payForm.valid) {
      console.log(this.payForm.value);
    }
  }
}
