// someElement takes the element type as it's the 'highest'/ the most generic
const someElement = document.querySelector(".foo");
console.log("some element", someElement?.classList);
// because it's the most generic one, assigning someElement to any makes sense in this context
console.log("some element", (someElement as any)?.value);

// the correct way is to set the dom element as the correct type
const someElement2 = document.querySelector(".foo") as HTMLDivElement;
const someElement3 = document.querySelector(".foo") as HTMLInputElement;

// listener
someElement?.addEventListener("blur", (e) => {
  console.log("event", e);
  const target = e.target as HTMLInputElement;
  console.log("event value", target.value);
});
