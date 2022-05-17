import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../../services/customer.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];

  // tao bien modal delete
  deleteCustomer: Customer;
  check: boolean;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
  }

  // modal delete
  onOpenEditModal(a: Customer): void {
    this.deleteCustomer = a;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#deleteModal');
    container.appendChild(button);
    this.check = true;
    button.click();
  }

  delete(event) {
    this.customerService.deleteCustomer(this.deleteCustomer).subscribe(() => {
      event.click();
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      alert('error');
    });
  }

}
