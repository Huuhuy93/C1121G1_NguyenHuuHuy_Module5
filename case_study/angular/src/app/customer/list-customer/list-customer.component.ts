import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers : Array<Customer> = [];

  constructor() {
    this.customers.push(new Customer(1, "KH-001", "Nguyễn Thị Hào", "07/11/1970", 0, "643431213", "0905423362", "thihao07@gmail.com", "Đà Nẵng", 5));
    this.customers.push(new Customer(2, "KH-002", "Phạm Xuân Diệu", "08/08/1992", 1, "865342123", "0904333333", "xuandieu92@gmail.com", "Quảng Trị", 3));
  }

  ngOnInit(): void {
  }

}
