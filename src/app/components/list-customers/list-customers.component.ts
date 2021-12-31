import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer-service.service';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  allCustomers: Observable<Customer[]>; 
 
   
  constructor(public custservice: CustomerService) { }
  ngOnInit() {
    this.loadAllCustomers();  
  }
  loadAllCustomers() {  
    this.allCustomers = this.custservice.getCustomerList();  
    console.log( 'log',this.allCustomers);
  }  
  getCustomerList() {  
   this.custservice.getCustomerList();  
  }  

  deleteCustomer(id) {
    this.custservice.deleteCustomer(id).subscribe(res =>{
      alert('Customer deleted successfully.');
      this.loadAllCustomers();
    }, err => {
      alert('Error occured. Please try again...');
    });
  }
   

}
