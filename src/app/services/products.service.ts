import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fireStore: Firestore) {}

  getProduct(): Observable<Products[]> {
    const productsRef = collection(this.fireStore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<
      Products[]
    >;
  }

  getProductById(index: string) {
    const productsRef = collection(this.fireStore, 'products');
    return collectionData(productsRef, { idField: 'id' }).pipe(
      map((documentDataArray) => {
        return documentDataArray.map((documentData) => {
          // Transformar DocumentData en Products aquí
          const product = {
            name: documentData["name"],
            description: documentData["description"],
            price: documentData["price"],
            photo: documentData["photo"],
            // ...
          };
          return product;
        });
      }),
      map((products: Products[]) =>
        products.filter((product: Products) => product.name === index)
      )
    );
  }
  addProduct(product: Products) {
    const productsRef = collection(this.fireStore, 'products');
    return addDoc(productsRef, product);
  }

  deleteProduct(product: Products) {
    const productsRef = doc(this.fireStore, `products/${product.id}`);
    return deleteDoc(productsRef);
  }
}
