import {Component, EventEmitter, Output} from "@angular/core";
import {RecipeService} from "../recipe.service";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html'
})
export class HeaderComponents {

constructor(private database: DataStorageService) {
}

  saveRecipes() {
    this.database.storeRecipes();
  }
}
