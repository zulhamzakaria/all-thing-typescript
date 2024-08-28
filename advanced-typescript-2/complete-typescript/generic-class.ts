type Media = {
  title: string;
};

type Book = Media & {
  isbn: string;
};
type eBook = Media & {
  size: string;
};

class ShoppingCart<T> {
  private items: T[] = [];
  addItem(item: T) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }
}

const bookCart = new ShoppingCart<Book>();
bookCart.addItem({ title: "necronomicon", isbn: "909882-KJ5" });
