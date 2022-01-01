import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerAddresses } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer-service.service';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-list-customer-addresses',
  templateUrl: './list-customer-addresses.component.html',
  styleUrls: ['./list-customer-addresses.component.css']
})
export class ListCustomerAddressesComponent implements OnInit {

 customerAddresses: Observable<CustomerAddresses[]>; 
 private Url = 'https://localhost:44350/';  
   
  constructor(public custservice: CustomerService,private route: ActivatedRoute) { }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.loadAllCustomersAddresses(id);  
    const connection = new signalR.HubConnectionBuilder()  
    .configureLogging(signalR.LogLevel.Information)  
    .withUrl(this.Url + 'webhook')  
    .build(); 

    connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  
     
    connection.on("BroadcastMessage", () => {  
      this.loadAllCustomersAddresses(id);   
    }); 
  }
  loadAllCustomersAddresses(id) {  
    this.customerAddresses = this.custservice.getCustomerAddressList(id);  
    console.log( 'log',this.customerAddresses);
  }  
  


}
