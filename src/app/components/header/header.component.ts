import { Component, OnInit } from '@angular/core';
import { ShoppingsModel } from '../models/shoppinglist.model'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;
  showPanel: boolean = false;
  selectedItem: string;
  tester:any;
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

  dropdownState($event) {
    console.log('this should gimme all them deets ',$event);
    this.showPanel = false;
    this.selectedItem = $event;
  }
}
