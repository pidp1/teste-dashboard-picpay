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

  public createPayment(payment: IPagamentos){
    return this.httpClient.post<IPagamentos>(`${API_PATH}payments`, payment)
  }

  public getAllPayments(): Observable<any> {
    return this.httpClient.get<any[]>(`${API_PATH}payments`)
  }


  public getPaymentById(id:string) {
    return this.httpClient.get<any>(`${API_PATH}payments/${id}`)
  }

  public updatePaymentById(id: string, payment: any) {
    return this.httpClient.put<IPagamentos>(`${API_PATH}payments/${id}`, payment)
  }

  public deletePaymentById(id:string) {
    return this.httpClient.delete(`${API_PATH}payments/${id}`)
  }
}
