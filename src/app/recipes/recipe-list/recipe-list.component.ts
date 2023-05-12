import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {LoggingService} from "../../logging.service";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [LoggingService]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private loggingService: LoggingService, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      for(var i = 0; i < recipes.length; i++){
      }
    });
    this.recipes = this.recipeService.getRecipes();
  }
}
