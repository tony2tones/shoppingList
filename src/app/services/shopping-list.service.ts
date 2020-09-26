import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private firestore: AngularFirestore) { }

  getBasicGroceries() {
    return this.firestore.collection('groceries').snapshotChanges();
  }
}
