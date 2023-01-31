import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  formProduct!: FormGroup;

  constructor(
    private productService:ProductsService,
    private router:Router
  ){
    this.formProduct = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.formProduct.value)
    const response = this.productService.addProduct(this.formProduct.value)
    console.log(response)
  }
}
