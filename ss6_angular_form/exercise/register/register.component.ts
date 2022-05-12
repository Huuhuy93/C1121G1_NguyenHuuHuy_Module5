import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email : new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword : new FormControl("", [Validators.required, Validators.minLength(6)]),
      country : new FormControl("", Validators.required),
      age : new FormControl("",[Validators.required, Validators.min(18)]),
      gender : new FormControl("", Validators.required),
      phone : new FormControl("", [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    })
  }

  ngOnInit(): void {
  }

  countryList = [
    {id : 1, name : 'Viet Nam'},
    {id : 2, name : 'England'},
    {id : 3, name : 'America'},
    {id : 4, name : 'Angola'},
    {id : 5, name : 'Laos'},
  ];

  checkConfirmPassword() {
    if (this.registerForm.get('confirmPassword')?.value !== this.registerForm.get('password')?.value) {
      this.registerForm.get('confirmPassword')?.setErrors({notMatch: 'confirm password sai !'});
    }
  }

  submitRegister() {
    console.log(this.registerForm);
  }


}
