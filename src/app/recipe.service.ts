import {Recipe} from "./recipes/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('КРУАССАН классический',
      'Состав:\n' +
      'мука пшеничная высшего сорта, яйцо, молоко, вода, масло сливочное 84%, сахар, соль морская, дрожжи\n' +
      'Белки – 6,0 г; Жиры – 26,0 г; Углеводы – 41,0 г.\n' +
      '(1460 кДж /350 Ккал)',
      'https://thumb.tildacdn.com/tild3861-3164-4835-b038-313433653537/-/format/webp/IMG_9219.jpg')
    ,
    new Recipe('КРУАССАН с фисташкой и малиной',
      'Состав:\n' +
      'мука пшеничная высшего сорта, яйцо, молоко, вода, масло сливочное 84%, паста фисташковая, ягоды малины быстрозамороженные, сахар, соль морская, дрожжи,ром\n' +
      'Белки – 4,5 г; Жиры – 16,0 г; Углеводы – 12,0 г.\n' +
      '(870 кДж /210 Ккал)',
      'https://thumb.tildacdn.com/tild3266-3135-4337-b261-653564626130/-/format/webp/IMG_9259.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }


}
