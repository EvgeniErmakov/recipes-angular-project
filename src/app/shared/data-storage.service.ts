import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipe.service";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService implements OnInit {

  private databaseUrl: string = 'https://ng-corse-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';


  constructor(private http: HttpClient, private recipeService: RecipeService) {

  }

  ngOnInit() {

  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.databaseUrl, recipes)
      .subscribe(response => {
        console.log(response)
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.databaseUrl)
      .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        }));
  }

  updateRecipe(recipe: Recipe) {

  }

  removeRecipe(recipe: Recipe) {

  }


  storeIngredient() {

  }

  removeIngredient() {

  }
}
