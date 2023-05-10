import {Component} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingList: ShoppingListService) {
  }

  addIngredient(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingList.addIngredient(ingredient);
  }
}
