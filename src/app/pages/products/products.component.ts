import { Component } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Products[]=[
    {name:'maki1',description:'un tipo de maki', price:'14', photo:'https://unsplash.com/es/fotos/JorKKx5rvA0', sale:false}
  ]

}
