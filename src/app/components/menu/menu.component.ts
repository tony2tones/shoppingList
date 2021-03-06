import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { List } from 'src/app/services/list.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  shoppingList$: Observable<List[]>;
  safeURL: any;
  constructor(private shoppingList: ShoppingListService) { }
  title: string;
  response: any;
  responseOther: any;
  videoUrl: string;
  list: any;
  items: any;
  clicked: boolean = false;
  show: boolean = false;

  ngOnInit() {
  }

  selectElement(i): void {
    console.log('this has been clicked ', i);
    // if (this.clicked) {
      var element = window.document.getElementsByClassName('item')[i];
      element.classList.add("hide");
      var check = element.getElementsByClassName('checky')[i];

      // check.className.includes('input');

    // console.log('this hide');
    // this.clicked = !this.clicked;
  // }
  // if (!this.clicked) {
  //   var element = window.document.getElementsByClassName('item')[i];
  //     element.classList.remove("hide");
  //   console.log('this show when not clicked');
    // this.clicked = !this.clicked;
  // }
  this.clicked = !this.clicked;
    // else {
    //   var element = window.document.getElementsByClassName('item')[i];
    //   element.classList.remove("hide");
    //   console.log('should remove hide ');
    // }
  }


  getShoppingList() {
    this.shoppingList.getBasicGroceries().subscribe(data => {
      this.response = data.map(e => {
        return {
          list: e.payload.doc.data()
        };
      })
      console.log('THIS IS THE NEW ARRAY', this.response);
      this.putToArray(this.response[0]['list']);
    });
  }

  getCurryVeg() {
    this.shoppingList.getCurryVeg().subscribe(items => {
      this.responseOther = items.map(e => {
        return {
          list: e.payload.doc.data()
        };
      })
      console.log('THIS IS THE NEW otherARRAY', this.responseOther);
      this.putToArrayOther(this.responseOther[1]['list']);
      // this.items = items;
      // console.log(this.items);
    });
  }

  putToArray(array) {
    this.title = array.title;
    this.shoppingList$ = array.basic;
    // this.videoUrl = array.videoUrl;
    // array['Pesto Chicken'];
    let items = {}
    // items.map(this.shoppingList$[0]);
    this.show = true;
    console.log('The list ', this.videoUrl);
    console.log('The Obsrve lister ', this.shoppingList$);
    let newArray = [];
    newArray = this.list;
  }

  putToArrayOther(array) {
    this.title = array.title;
    this.shoppingList$ = array.ingredients;
    // this.videoUrl = array.videoUrl;
    // array['Pesto Chicken'];
    let items = {}
    // items.map(this.shoppingList$[0]);
    this.show = true;
    console.log('The list ', this.videoUrl);
    console.log('The Obsrve lister ', this.shoppingList$);
    let newArray = [];
    newArray = this.list;
  }

}
