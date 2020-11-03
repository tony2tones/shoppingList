import { Component, OnInit } from '@angular/core';
import { ShoppingsModel } from '../models/shoppinglist.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showPanel: boolean = false;
  shoppingList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  constructor() { }


  ngOnInit(): void {
  }

  togglePanel(): void {
    this.showPanel = !this.showPanel;
  }

  changeCountry(event) {
    console.log(event);
  }
}
