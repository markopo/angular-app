import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   @Output() recipeWasSelected = new EventEmitter<Recipe>();


    recipes: Recipe[] = [
       this.recipeCreate(),
       this.recipeCreate()
    ];

    public recipeCreate() {
        const name = 'Udon Noodle Soup';
        const desc = 'Fast food Japanese style! Start to finish, this healthy and light Japanese Udon Noodle Soup';
        const imgPath = 'https://steamykitchen.com/wp-content/uploads/2010/07/udon-miso-noodle-soup-2805.jpg';
        return  new Recipe(name, desc, imgPath);
    }

  constructor() {



  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      console.log("recipeSelected: ", recipe);
      this.recipeWasSelected.emit(recipe);
  }

}
