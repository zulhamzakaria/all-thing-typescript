type Media = { title: string };
type Song = Media & { singer: string };
type Movie = Media & { director: string };

class ShoppingCart<T extends Song | Movie> {
  private items: T[] = [];
  addItems(item: T) {
    this.items.push(item);
  }
}
