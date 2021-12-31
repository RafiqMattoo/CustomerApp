import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL : string="https://localhost:44350/api/Customers";   
  selectedCustomer : Customer;
  CustomerList : Observable<Customer[]>;
  constructor(private httpClient: HttpClient) {
   }
  getCustomerList(): Observable<Customer[]> {  
    this.CustomerList=this.httpClient.get<Customer[]>(this.baseURL+"/GetAllCustomers");  
    console.log(this.CustomerList);
    return this.CustomerList;  
  }  
  getCustomerById(id): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  addCustomer(data): Observable<any> {
    return this.httpClient.post(this.baseURL, data);
  }
  updateCustomer(id, data): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, data);
  }
  deleteCustomer(id): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deleteAllCustomer(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }
  searchByCustomer(name): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?name=${name}`);
  }
}
