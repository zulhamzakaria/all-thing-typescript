const someVar = undefined;

const products = [
  { prodId: "001", type: "book", meta: { isbn: "9099882" } },
  { prodId: "002", type: "ebook", meta: { size: "90mB" } },
];

products.map((product) => {
  console.log(product.meta?.isbn);
});
