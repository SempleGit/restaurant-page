const buildEntreeMenu = () => {
  const contentEntree = document.querySelector("#contentEntree");
  console.log("building");
  
  const mainSection = document.createElement("section");
  const div = entreeContent();
  
  mainSection.appendChild(div);
  contentEntree.appendChild(mainSection);
}

const entreeContent = () => {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const list = [];
  
  const createEntree = (name, price) => {
    const entree = (name, price) => {
      const getName = () => name;
      const getPrice = () => price;
      return { getName, getPrice };
    }
    const app = entree(name, price);
    list.push(app);
  };

  createEntree("Beef Wellington" , 18);
  createEntree("Chicken Alfredo", 16);
  createEntree("Fish Tacos", 18);
  createEntree("Oven Baked Lasagna", 18);
  createEntree("Blackened Salmon", 20);

  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.getName()} - $${item.getPrice()}`
    ul.appendChild(li);
  })
  div.appendChild(ul);
  div.classList.add("div");
  
  return div;
}

export { buildEntreeMenu }