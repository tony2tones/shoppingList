import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private firestore: AngularFirestore) {}

  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getBasicGroceries() {
    return this.firestore.collection('groceries').snapshotChanges();
  }

  getCurryVeg() {
    return this.firestore.collection('ShoppingList').snapshotChanges();
  }
}
