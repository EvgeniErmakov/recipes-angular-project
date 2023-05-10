import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.subscription =
      this.shoppingList.startedEditing
        .subscribe((index:number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingList.getIngredientByIndex(index);
          this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
        });
  }

  constructor(private shoppingList: ShoppingListService) {
  }

  onSubmit(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingList.updateIngredientByIndex(this.editedItemIndex, ingredient)
      this.editMode = false;
    } else {
      this.shoppingList.addIngredient(ingredient);
    }
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
