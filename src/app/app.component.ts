import { Component } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private shoppingList: ShoppingListService) { }
  title = 'shoppingList';
  response: any;
  list: any;

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

    // console.log('The list ', this.list);
    console.log('The list ', array);
    console.log('The list ', this.list);
  }

}
