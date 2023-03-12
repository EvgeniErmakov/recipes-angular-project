import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true})
  name: ElementRef;

  @ViewChild('amountInput', {static: true})
  amount: ElementRef;

  addIngredient() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredient.emit(ingredient);
  }
}
