import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponents } from "./header/header.components";
import { FormsModule } from "@angular/forms";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeResolver} from "./recipes/recipe-details/recipe-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
