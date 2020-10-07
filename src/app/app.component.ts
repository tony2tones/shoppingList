import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';
import { Observable, of } from "rxjs";

import { List } from './list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shoppingList$: Observable<List[]>;
  constructor(private shoppingList: ShoppingListService) { }
  title = 'shoppingList';
  response: any;
  list: any;
  items: any;

  show: boolean = false;

  ngOnInit() {
    // this.shoppingList.getBasicGroceries().subscribe(items => {
    // this.items = items;
    console.log(this.items);
    // });
  }

  getShoppingList() {
    this.shoppingList.getBasicGroceries().subscribe(data => {
      this.response = data.map(e => {
        return {
          list: e.payload.doc.data()
        };
      })
      console.log('THIS IS THE NEW ARRAY', this.response[0]['list']);
      this.putToArray(this.response[0]['list'])
    });
  }

  putToArray(array) {
    this.shoppingList$ = array.basic;
    // array['Pesto Chicken'];
    let items = {}
    // items.map(this.shoppingList$[0]);
    this.show = true;
    // console.log('The list ', this.list);
    console.log('The Obsrve lister ', this.shoppingList$[0]);
    let newArray = [];
    newArray = this.list;

    for (var x in this.shoppingList$) {
      console.log(x + ": " + this.shoppingList[x]);
  }

    // console.log(newArray[0]);
    // console.log(newArray[2]);
    // console.log(newArray[3]);
    // console.log(newArray[4]);

    // let returnedArray = [];
    // var test = ['a', 'b', 'c', 'd'];

    // var output = test.map(setID);
    // console.log(output);
    // let testArr:any = [];
    // for ( var i=0, n=newArray.length; i<n; i++){
    //   for (var j =0; newArray[i].length; j++) {
    //     testArr = newArray[i][j] = `test`;
    //   }
    //   newArray[i] = `id:${i}` + 'name:' + newArray[i]
    //  }

    // console.log('testArr ', testArr);
  }

}
