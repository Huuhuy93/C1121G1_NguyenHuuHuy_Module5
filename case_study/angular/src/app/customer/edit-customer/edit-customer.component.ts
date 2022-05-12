import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomerForm: FormGroup;

  constructor() {

    this.editCustomerForm = new FormGroup({
      customerId: new FormControl('1'),
      customerCode: new FormControl("KH-001", [Validators.required,
        Validators.pattern('^KH-[\\d]{4}')]),

      customerName: new FormControl("Nguyễn Thị Hào", [Validators.required,
        Validators.pattern('^[^\\d]+$')]),

      customerBirthday: new FormControl("07/11/1970", Validators.required),

      customerGender: new FormControl("Female", Validators.required),

      customerIdCard: new FormControl("643431213", [Validators.required,
        Validators.pattern('^\\d{9}$|\\d{12}$')]),

      customerPhone: new FormControl("0905423362", [Validators.required,
        Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]),

      customerEmail: new FormControl("thihao07@gmail.com", [Validators.required, Validators.email]),

      customerAddress: new FormControl("Đà Nẵng", Validators.required),

      customerType: new FormControl("Member", Validators.required),
    })

  }

  ngOnInit(): void {
  }

  customerTypeList = [
    {id : 1, name : 'Diamond'},
    {id : 2, name : 'Platinum'},
    {id : 3, name : 'Gold'},
    {id : 4, name : 'Silver'},
    {id : 5, name : 'Member'},
  ];

  submitEditCustomer() {
    console.log(this.editCustomerForm);
  }

}
