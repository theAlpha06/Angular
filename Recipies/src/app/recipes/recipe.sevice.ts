import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";


export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
      ];
    
      getRecipes() {
        return this.recipes.slice(); //return a new array of the recipes array not the exact recipes array.
      }
}