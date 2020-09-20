import { Component } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private shoppingList: ShoppingListService) {}
  title = 'shoppingList';


  getShoppingList() {
    this.shoppingList.getBasicGroceries().subscribe(data => console.log(data));
  }
}
