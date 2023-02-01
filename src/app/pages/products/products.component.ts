import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: Products[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((product) => {
      this.products = product;
    });
  }

  // products: Products[] = [
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo: 'https://picsum.photos/200',
  //     sale: false,
  //   },
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo:
  //       'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     sale: false,
  //   },
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo: 'https://picsum.photos/300',
  //     sale: false,
  //   },
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo: 'https://picsum.photos/400',
  //     sale: false,
  //   },
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo: 'https://picsum.photos/500',
  //     sale: false,
  //   },
  //   {
  //     name: 'maki1',
  //     description: 'un tipo de maki',
  //     price: '14',
  //     photo: 'https://picsum.photos/600',
  //     sale: false,
  //   },
  //   // {name:'maki1',description:'un tipo de maki', price:'14', photo:'https://unsplash.com/es/fotos/JorKKx5rvA0', sale:false},
  //   // {name:'maki1',description:'un tipo de maki', price:'14', photo:'https://unsplash.com/es/fotos/JorKKx5rvA0', sale:false},
  //   // {name:'maki1',description:'un tipo de maki', price:'14', photo:'https://unsplash.com/es/fotos/JorKKx5rvA0', sale:false},
  // ];
}
