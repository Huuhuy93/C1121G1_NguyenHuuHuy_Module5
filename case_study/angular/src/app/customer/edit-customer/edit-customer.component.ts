import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomerForm: FormGroup = new FormGroup({
    id: new FormControl(''),

    customerCode: new FormControl("", [Validators.required,
      Validators.pattern('^KH-[\\d]{4}')]),

    customerName: new FormControl("", [Validators.required,
      Validators.pattern('^[^\\d]+$')]),

    customerBirthday: new FormControl("", Validators.required),

    customerGender: new FormControl("", Validators.required),

    customerIdCard: new FormControl("", [Validators.required,
      Validators.pattern('^\\d{9}$|\\d{12}$')]),

    customerPhone: new FormControl("", [Validators.required,
      Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]),

    customerEmail: new FormControl("", [Validators.required, Validators.email]),

    customerAddress: new FormControl("", Validators.required),

    customerType: new FormControl("", Validators.required),
  })

  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);


    });

  }

  ngOnInit(): void {
  }

  customerTypeList = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ];

  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer)

      this.editCustomerForm = new FormGroup({
        id: new FormControl(customer.id),
        customerCode: new FormControl(customer.customerCode),
        customerName: new FormControl(customer.customerName),
        customerBirthday: new FormControl(customer.customerBirthday),
        customerGender: new FormControl(customer.customerGender+""),
        customerIdCard: new FormControl(customer.customerIdCard),
        customerPhone: new FormControl(customer.customerPhone),
        customerEmail: new FormControl(customer.customerEmail),
        customerAddress: new FormControl(customer.customerAddress),
        customerType: new FormControl(customer.customerType),
      });
    });

  }

  updateCustomer(id: number) {
    const customer = this.editCustomerForm.value;
    console.log(customer)
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/customer/list');
    }, error => {
      console.log(error);
    });
  }
}

