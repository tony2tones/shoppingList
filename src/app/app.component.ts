import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    this.list = array.basic;
    // array['Pesto Chicken'];
    this.show = true;
    // console.log('The list ', this.list);
    console.log('The list ', array);
    console.log('The list ', this.list);
    let newArray = [];
    newArray = this.list;

    // console.log(newArray[0]);
    // console.log(newArray[2]);
    // console.log(newArray[3]);
    // console.log(newArray[4]);

    // let returnedArray = [];
    // var test = ['a', 'b', 'c', 'd'];

    // var output = test.map(setID);
    // console.log(output);
    let testArr:any = [];
    for ( var i=0, n=newArray.length; i<n; i++){
      for (var j =0; newArray[i].length; j++) {
        testArr = newArray[i][j] = `test`;
      }
      newArray[i] = `id:${i}` + 'name:' + newArray[i]
     }

    console.log('testArr ', testArr);
  }

  setID(item, index) {
    var key = "id: " + item;
    return key;
  }

}
