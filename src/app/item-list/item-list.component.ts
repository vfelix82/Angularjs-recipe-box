import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../models/menu.models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent{
  @Input() childSweetItemList: Menu[];
  @Input() childSavouryItemList: Menu[];
  @Input() childCookieItemList: Menu[];
  @Input() childCakeItemList: Menu[];
  @Input() childCoffeeItemList: Menu[];

  @Output() clickSender = new EventEmitter();

  editButtonClicked(itemToEdit: Menu) {
    this.clickSender.emit(itemToEdit);
  }
  constructor() { }

  // ngOnInit() {
  // }

  priorityColor1(currentItem){
    if(currentItem.priority === "Most Popular!"){
      return "bg-danger";
    } else if (currentItem.priority === "2nd Most Popular!"){
      return "bg-warning";
    } else if (currentItem.priority === "3rd Most Popular!"){
      return "bg-success";
    } else if (currentItem.priority === "New!"){
      return "bg-info";
    } else if (currentItem.priority === "Limited Time Only!"){
      return "bg-primary";
    }
  }

  priorityColor2(currentSavouryItem){
    if(currentSavouryItem.priority === "Most Popular!"){
      return "bg-danger";
    } else if (currentSavouryItem.priority === "2nd Most Popular!"){
      return "bg-warning";
    } else if (currentSavouryItem.priority === "3rd Most Popular!"){
      return "bg-success";
    } else if (currentSavouryItem.priority === "New!"){
      return "bg-info";
    } else if (currentSavouryItem.priority === "Limited Time Only!"){
      return "bg-primary";
    }
  }

  priorityColor3(currentCookieItem){
    if(currentCookieItem.priority === "Most Popular!"){
      return "bg-danger";
    } else if (currentCookieItem.priority === "2nd Most Popular!"){
      return "bg-warning";
    } else if (currentCookieItem.priority === "3rd Most Popular!"){
      return "bg-success";
    } else if (currentCookieItem.priority === "New!"){
      return "bg-info";
    } else if (currentCookieItem.priority === "Limited Time Only!"){
      return "bg-primary";
    }
  }

  priorityColor4(currentCakeItem){
    if(currentCakeItem.priority === "Most Popular!"){
      return "bg-danger";
    } else if (currentCakeItem.priority === "2nd Most Popular!"){
      return "bg-warning";
    } else if (currentCakeItem.priority === "3rd Most Popular!"){
      return "bg-success";
    } else if (currentCakeItem.priority === "New!"){
      return "bg-info";
    } else if (currentCakeItem.priority === "Limited Time Only!"){
      return "bg-primary";
    }
  }

  priorityColor5(currentCoffeeItem){
    if(currentCoffeeItem.priority === "Most Popular!"){
      return "bg-danger";
    } else if (currentCoffeeItem.priority === "2nd Most Popular!"){
      return "bg-warning";
    } else if (currentCoffeeItem.priority === "3rd Most Popular!"){
      return "bg-success";
    } else if (currentCoffeeItem.priority === "New!"){
      return "bg-info";
    } else if (currentCoffeeItem.priority === "Limited Time Only!"){
      return "bg-primary";
    }
  }
}
