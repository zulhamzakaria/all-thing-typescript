class Dish {
  constructor(public recipe: string[], public prepTime: number) {
    this.recipe = recipe;
    this.prepTime = prepTime;
  }
}

const InstantNoodle = new Dish(["noodle", "condiments"], 2);

abstract class AbstractDish {
  constructor(public recipe: string[], public prepTime: number) {
    this.recipe = recipe;
    this.prepTime = prepTime;
  }

  abstract cookingMethod(): void;
}

class WhiteRice extends Dish {
  constructor(recipe: string[], prepTime: number) {
    // super works like base() in c#
    super(recipe, prepTime);
  }

  cookingMethod(): void {
    console.log("20 mins on low fire");
  }
}
