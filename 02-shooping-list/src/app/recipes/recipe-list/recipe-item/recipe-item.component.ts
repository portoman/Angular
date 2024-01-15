import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  // Antes se emitia el evento al padre para indicar cual estaba seleccionada
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
