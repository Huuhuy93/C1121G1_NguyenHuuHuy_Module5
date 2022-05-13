import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number;
  editProductForm : FormGroup;


  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      const product = this.getProduct(this.id);

      this.editProductForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    }

  )}

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.editProductForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công !')
  }

}
