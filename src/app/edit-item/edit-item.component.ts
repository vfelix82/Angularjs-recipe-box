import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../models/menu.models';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() selectedItem: Menu;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }


  constructor() { }


}
