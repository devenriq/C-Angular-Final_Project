import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fireStore: Firestore) { }

  getProduct():Observable<Products[]>{
    const productsRef = collection(this.fireStore, 'products')
    return collectionData(productsRef, {idField:'id'}) as Observable<Products[]>
  }

  addProduct(product: Products){
    const productsRef = collection(this.fireStore, 'products')
    return addDoc(productsRef, product)
  }

  deleteProduct(product:Products){
    const productsRef = doc(this.fireStore, `products/${product.id}`)
    return deleteDoc(productsRef)
  }
}
