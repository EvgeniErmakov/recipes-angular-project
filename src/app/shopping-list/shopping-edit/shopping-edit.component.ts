import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  ngOnInit() {
    this.subscription =
      this.shoppingList.startedEditing
        .subscribe((index:number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        });
  }

  constructor(private shoppingList: ShoppingListService) {
  }

  addIngredient(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingList.addIngredient(ingredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
