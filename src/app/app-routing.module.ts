import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeResolver} from "./recipes/recipe-details/recipe-resolver.service";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent
    , children: [
      {path:'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: {recipe: RecipeResolver} },
      {path:':id/edit', component: RecipeEditComponent}
    ]
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
