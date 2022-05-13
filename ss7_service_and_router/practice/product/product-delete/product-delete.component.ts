import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: number;
  deleteProductForm : FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        const product = this.getProduct(this.id);

        this.deleteProductForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
        });
      }

    )}

  private getProduct(id: number) {
    return this.productService.findById(id);
  }

  ngOnInit() {
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }

}
