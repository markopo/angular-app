import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() {

  }

  ngOnInit() {
  }

  clickDelete() {
    console.log("clickDelete");
  }

  clickAdd() {
      const name = this.nameInput.nativeElement.value;
      const amount = parseFloat(this.amountInput.nativeElement.value);
      console.log("add: ", name, amount);
      const newIngredient = new Ingredient(name, amount);
      this.ingredientAdded.emit(newIngredient);
  }
}
