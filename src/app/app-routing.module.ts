import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeResolver} from "./recipes/recipe-details/recipe-resolver.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent
    , children: [{path: ':id', component: RecipesComponent, resolve: {recipe: RecipeResolver}}]
  },
  {path: 'shopping', component: ShoppingListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
