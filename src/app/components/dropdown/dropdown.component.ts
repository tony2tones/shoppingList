import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  tester:any;
  shoppingList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  constructor() { }

  ngOnInit(): void {
  }

  changeCountry() {
    console.log(this.tester);
  }

}
