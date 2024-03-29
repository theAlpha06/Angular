import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.sevice';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {

  loadedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }


  ngOnInit () {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.loadedRecipe = recipe;
      }
    )
  }
}
