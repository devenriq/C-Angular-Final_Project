import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit{
  products!:any;
  prueba:string = "Maki Cevichero"

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    // this.productsService.snapshot.params['id'](data => {
    //   this.products=data
    //   console.log(data)
    //   console.log(this.prueba)
    // });]
  }

  getData(id:string){
    this.productsService.getProductById(id).subscribe(data => {
      this.products=data
      console.log(data)
      console.log(this.prueba)
    });
  }

  // getData(id:string){}
}
