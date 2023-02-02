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
}
