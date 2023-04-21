import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IPagamentos } from '../models/IPagamentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  public executeLogin(username: string, password: string):Observable<any>{
    return this.httpClient.post(`${API_PATH}auth/login`, { username, password });
  }

  getAllPayments() {
    return this.httpClient.get<IPagamentos[]>(`${API_PATH}payments`).subscribe({
      next: (dataPayments) => {
        console.log(dataPayments);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updatePayment() {}

  getPaymentById() {}

  updatePaymentById() {}

  deletePaymentById() {}
}
