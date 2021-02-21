import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Milanesa',
      imageUrl: 'https://okdiario.com/img/2019/01/03/receta-de-milanesa-de-ternera-napolitana.jpg',
      ingredients: ['pan, queso, salsa']
    },
    {
      id: 'r2',
      title: 'Spaghuetti',
      imageUrl: 'data:image/jpeg;base64,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',
      ingredients: ['spaguetti, queso, salsa']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
