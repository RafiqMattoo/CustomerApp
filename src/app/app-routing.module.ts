import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { ListCustomerAddressesComponent } from './components/list-customer-addresses/list-customer-addresses.component';
const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: ListCustomersComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent  },
  { path: 'add-customer', component:  AddCustomerComponent},
  { path: 'list-customer-addresses/:id', component:  ListCustomerAddressesComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    
export class AppRoutingModule { }
