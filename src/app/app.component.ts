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

  sweetItems: Menu[] = [
    new Menu("Challa", "Limited Time Only!"),
    new Menu("Coffee and Cinnamon Croissant", "Most Popular!"),
    new Menu("Blueberry Scone", "New!"),
    new Menu("Lemon and Cheesecake Pastry", "2nd Most Popular!"),
    new Menu("Chocolate Pastry", "3rd Most Popular!")
  ];

  savouryItems: Menu[] = [
    new Menu("Spinach, Artichoke, & Chicken Puff Pastry Parcels", "2nd Most Popular!"),
    new Menu("Vegetable Pastries", "New!"),
    new Menu("Flourless Plantain Empanadas", "Limited Time Only!"),
    new Menu("Feta and Sun Dried Tomato Pesto Swirls", "3rd Most Popular!"),
    new Menu("Roasted Brocccoli, Potato, and Sausage Tart", "Most Popular!")
  ];

  cookieItems: Menu[] = [
    new Menu("Chococlate Chip Cookie", "2nd Most Popular!"),
    new Menu("Macaroons", "Most Popular!"),
    new Menu("Peanut Butter Cookies", "3rd Most Popular!"),
    new Menu("Butter Pecan Cookies", "New!"),
    new Menu("Snickerdoodle", "Limited Time Only!")
  ];

  cakeItems: Menu[] = [
    new Menu("Angel Food Cake", "New!"),
    new Menu("Red Velvet Cake", "2nd Most Popular!"),
    new Menu("Original Cheese Cake", "Limited Time Only!"),
    new Menu("Molten Chocolate Cake", "Most Popular!"),
    new Menu("Coffee Cake", "3rd Most Popular!")
  ];

  coffeeItems: Menu[] = [
    new Menu("Mocha Latte", "Most Popular!"),
    new Menu("Americano", "New!"),
    new Menu("Caffe Latte", "2nd Most Popular!"),
    new Menu("Espresso", "3rd Most Popular!"),
    new Menu("Cafe Au Lait", "Limited Time Only!")
  ];

  editItem() {
   alert("Time to edit a Menu Item!");
  }
}
