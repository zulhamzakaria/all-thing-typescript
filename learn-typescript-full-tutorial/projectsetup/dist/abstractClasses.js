"use strict";
class Dish {
  constructor(recipe, prepTime) {
    this.recipe = recipe;
    this.prepTime = prepTime;
    this.recipe = recipe;
    this.prepTime = prepTime;
  }
}
const InstantNoodle = new Dish(["noodle", "condiments"], 2);
class AbstractDish {
  constructor(recipe, prepTime) {
    this.recipe = recipe;
    this.prepTime = prepTime;
    this.recipe = recipe;
    this.prepTime = prepTime;
  }
}
class WhiteRice extends Dish {
  constructor(recipe, prepTime) {
    // super works like base() in c#
    super(recipe, prepTime);
  }
  cookingMethod() {
    console.log("20 mins on low fire");
  }
}

const cookingMethod = WhiteRice.cookingMethod();
