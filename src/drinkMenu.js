const buildDrinkMenu = () => {
  const contentDrink = document.querySelector("#contentDrink");
  console.log("building");
  
  const mainSection = document.createElement("section");
  
  mainSection.appendChild(drinkContent());
  contentDrink.appendChild(mainSection);
}

const drinkContent = () => {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const list = [];
  
  const createDrink = (name, price) => {
    const drink = (name, price) => {
      const getName = () => name;
      const getPrice = () => price;
      return { getName, getPrice };
    }
    const app = drink(name, price);
    list.push(app);
  };

  createDrink("Tequila Sunrise" , 8);
  createDrink("Manhattan", 6);
  createDrink("Mojito", 8);
  createDrink("Orange Margarita", 8);

  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.getName()} - $${item.getPrice()}`
    ul.appendChild(li);
  })
  div.appendChild(ul);
  div.classList.add("div");
  
  return div;
}

export { buildDrinkMenu }