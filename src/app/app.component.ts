import { Component } from '@angular/core';
import { Menu } from './models/menu.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Faiza and Victor\'s Bakery';
  subtitle: string = "~ Come to our Bakery instead of making it yourself! ~";

  selectedItem = null;

  masterSweetItemsList: Menu[] = [
    new Menu("Challa", "Limited Time Only!"),
    new Menu("Coffee and Cinnamon Croissant", "Most Popular!"),
    new Menu("Blueberry Scone", "New!"),
    new Menu("Lemon and Cheesecake Pastry", "2nd Most Popular!"),
    new Menu("Chocolate Pastry", "3rd Most Popular!")
  ];

  masterSavouryItemsList: Menu[] = [
    new Menu("Spinach, Artichoke, & Chicken Puff Pastry Parcels", "2nd Most Popular!"),
    new Menu("Vegetable Pastries", "New!"),
    new Menu("Flourless Plantain Empanadas", "Limited Time Only!"),
    new Menu("Feta and Sun Dried Tomato Pesto Swirls", "3rd Most Popular!"),
    new Menu("Roasted Brocccoli, Potato, and Sausage Tart", "Most Popular!")
  ];

  masterCookieItemsList: Menu[] = [
    new Menu("Chococlate Chip Cookie", "2nd Most Popular!"),
    new Menu("Macaroons", "Most Popular!"),
    new Menu("Peanut Butter Cookies", "3rd Most Popular!"),
    new Menu("Butter Pecan Cookies", "New!"),
    new Menu("Snickerdoodle", "Limited Time Only!")
  ];

  masterCakeItemsList: Menu[] = [
    new Menu("Angel Food Cake", "New!"),
    new Menu("Red Velvet Cake", "2nd Most Popular!"),
    new Menu("Original Cheese Cake", "Limited Time Only!"),
    new Menu("Molten Chocolate Cake", "Most Popular!"),
    new Menu("Coffee Cake", "3rd Most Popular!")
  ];

  masterCoffeeItemsList: Menu[] = [
    new Menu("Mocha Latte", "Most Popular!"),
    new Menu("Americano", "New!"),
    new Menu("Caffe Latte", "2nd Most Popular!"),
    new Menu("Espresso", "3rd Most Popular!"),
    new Menu("Cafe Au Lait", "Limited Time Only!")
  ];

  editItem(clickedItem) {
  this.selectedItem = clickedItem;
  }

  finishedEditing() {
    this.selectedItem = null;
  }

  addItem(newItem: Menu){
    this.masterSweetItemsList.push(newItem);
    this.masterSavouryItemsList.push(newItem);
    this.masterCookieItemsList.push(newItem);
    this.masterCakeItemsList.push(newItem);
    this.masterCoffeeItemsList.push(newItem);
  }
}
