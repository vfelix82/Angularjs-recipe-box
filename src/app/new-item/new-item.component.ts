import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from '../models/menu.models';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  @Output() sendItem = new EventEmitter();

  submitForm(name: string, priority: string) {
    let newItem: Menu = new Menu(name, priority);
    //let newItem: Menu = new Menu(name, parseInt(priority));
    this.sendItem.emit(newItem);
  }

  constructor() { }



}
