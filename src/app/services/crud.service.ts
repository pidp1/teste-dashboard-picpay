import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IPagamentos } from '../models/IPagamentos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  constructor(private httpClient: HttpClient) { }
  

  getAllPayments(){
    return this.httpClient.get<IPagamentos[]>(`${API_PATH}payments`).subscribe(
      {
        next: (dataPayments)=>{console.log(dataPayments)},
        error: (error)=>{console.error(error)}
      }
    )
  }

  updatePayment(){

  }

  getPaymentById(){

  }

  updatePaymentById(){

  }

  deletePaymentById(){

  }
}
