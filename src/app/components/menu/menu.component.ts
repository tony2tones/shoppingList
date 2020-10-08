import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { List } from 'src/app/services/list.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  shoppingList$: Observable<List[]>;
  safeURL: any;
  constructor(private shoppingList: ShoppingListService, videoURL: string, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
  title: string;
  response: any;
  responseOther: any;
  // videoURL: string;
  list: any;
  items: any;

  show: boolean = false;

  ngOnInit() {
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

  getChickenPesto() {
    this.shoppingList.getChickenPesto().subscribe(items => {
      this.responseOther = items.map(e => {
        return {
          list: e.payload.doc.data()
        };
      })
      console.log('THIS IS THE NEW otherARRAY', this.responseOther);
      this.putToArray(this.responseOther[0]['list']);
      // this.items = items;
      // console.log(this.items);
    });
  }

  putToArray(array) {
    this.title = array.title;
    this.shoppingList$ = array.basic;
    this.videoURL = array.videoUrl;
    // array['Pesto Chicken'];
    let items = {}
    // items.map(this.shoppingList$[0]);
    this.show = true;
    // console.log('The list ', this.list);
    console.log('The Obsrve lister ', this.shoppingList$);
    let newArray = [];
    newArray = this.list;
  }

}
