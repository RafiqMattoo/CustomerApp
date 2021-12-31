import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });

    this.bindCustomer();
  }

  bindCustomer() {
    this.customerService.getCustomerById(+this.activatedRoute.snapshot.params.id).subscribe( res => {
      this.form.patchValue({name: res.name});
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer({id: +this.activatedRoute.snapshot.params.id, 
      name: this.form.value.name})
    .subscribe(res => {
      alert('Customer updated successfully');
      this.router.navigateByUrl('/customers');
    }, err => {
      alert('Error occured. Status Text: ' + err.statusText);
    });
  }

}
