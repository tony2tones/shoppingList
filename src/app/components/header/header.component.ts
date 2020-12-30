import { Component, OnInit } from '@angular/core';
import { ShoppingsModel } from '../models/shoppinglist.model'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private shoppingListService :ShoppingListService) { }
  faCoffee = faCoffee;
  showPanel: boolean = false;
  selectedItem: string;
  tester:any;

  ngOnInit(): void {
  }

  togglePanel(): void {
    this.showPanel = !this.showPanel;
    this.selectedItem = '';
  }

  dropdownState($event) {
    this.shoppingListService.sendClickEvent();
    console.log('this should gimme all them deets ',$event);
    this.showPanel = false;
    this.selectedItem = 'Selected option: ' + $event;
  }
}
