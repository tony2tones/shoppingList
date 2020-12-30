import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  tester:string;
  @Output() messageBus = new EventEmitter();
  // This to be populated by a service
  shoppingList: string[] = ['curry', 'bazil pesto chicken pasta', 'groceries']

  ngOnInit(): void {
  }

  selectedList() {
    this.messageBus.emit(this.tester);
    console.log(this.tester);
  }

}
