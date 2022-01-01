import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer, CustomerAddresses } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL : string="https://localhost:44350/api/Customers";   
  baseURLAddress : string="https://localhost:44350/api/CustomerAddress";   
  selectedCustomer : Customer;
  CustomerList : Observable<Customer[]>;
  CustomerAddressList : Observable<CustomerAddresses[]>;
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
    return this.httpClient.post(this.baseURL + '/AddCustomer', data);
  }
  updateCustomer(data): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/UpdateCustomer`, data);
  }
  deleteCustomer(id): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/DeleteCustomer?id=${id}`);
  }
  deleteAllCustomer(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }
  searchByCustomer(name): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?name=${name}`);
  }
  getCustomerAddressList(id): Observable<CustomerAddresses[]> {
    this.CustomerAddressList= this.httpClient.get<CustomerAddresses[]>(`${this.baseURLAddress}?CustomerId=${id}`);
    return this.CustomerAddressList;  
  }
}
