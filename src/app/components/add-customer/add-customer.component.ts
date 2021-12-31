import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addCustomer() {
    this.customerService.addCustomer({id: 0, name: this.form.value.name})
    .subscribe(res => {
      alert('Customer saved successfully');
      this.router.navigateByUrl('/customers');
    }, err => {
      alert('Error occured. Status Text: ' + err.statusText);
    });
  }

}
