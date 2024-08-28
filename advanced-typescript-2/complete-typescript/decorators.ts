// kinda like decorator pattern
// uses functions with special syntax
// uncomment experimentalDecorators setting

// @CondimentDecorator("sugar")
@TemplateDecorator("<p>Dynamic paragraph</p>", "container")
class Coffee {
  type: string = "Arabica";
  constructor() {
    console.log("constructor called");
  }
}

function CondimentDecorator(condiment: string) {
  function AddSugar(target: Function) {
    console.log(target);
  }
  return AddSugar;
}

function TemplateDecorator(template: string, elementId: string) {
  return function (target: any) {
    const u = new target();
    const container = document.getElementById(elementId);
    if (container) {
      container.innerHTML = template;
      const h2 = container.querySelector("h2");
      if (h2) {
        h2.textContent = u.name ?? "joni";
      }
    }
  };
}

const coffee = new Coffee();
