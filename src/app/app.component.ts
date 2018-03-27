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

  sweetItems: Menu[] = [
    new Menu("Challa"),
    new Menu("Coffee and Cinnamon Croissant"),
    new Menu("Blueberry Scone"),
    new Menu("Lemon and Cheesecake Pastry"),
    new Menu("Chocolate Pastry")
  ];

  savouryItems: Menu[] = [
    new Menu("Spinach, Artichoke, & Chicken Puff Pastry Parcels"),
    new Menu("Vegetable Pastries"),
    new Menu("Flourless Plantain Empanadas"),
    new Menu("Feta and Sun Dried Tomato Pesto Swirls"),
    new Menu("Roasted Brocccoli, Potato, and Sausage Tart")
  ];

  cookieItems: Menu[] = [
    new Menu("Chococlate Chip Cookie"),
    new Menu("Macaroons"),
    new Menu("Peanut Butter Cookies"),
    new Menu("Butter Pecan Cookies"),
    new Menu("Snickerdoodle")
  ];

  cakeItems: Menu[] = [
    new Menu("Angel Food Cake"),
    new Menu("Red Velvet Cake"),
    new Menu("Original Cheese Cake"),
    new Menu("Molten Chocolate Cake"),
    new Menu("Coffee Cake")
  ];

  coffeeItems: Menu[] = [
    new Menu("Mocha Latte"),
    new Menu("Americano"),
    new Menu("Caffe Latte"),
    new Menu("Espresso"),
    new Menu("Coffee Cake")
  ];
}
