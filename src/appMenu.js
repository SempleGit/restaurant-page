const buildAppMenu = () => {
  const contentApp = document.querySelector("#contentApp");
  console.log("building");
  
  const mainSection = document.createElement("section");
  const appDiv = appContent();
  
  mainSection.appendChild(appDiv);
  contentApp.appendChild(mainSection);
}

const appContent = () => {
  const appDiv = document.createElement("div");
  const appUl = document.createElement("ul");
  const appList = [];
  
  const createApp = (name, price) => {
    const appetizer = (name, price) => {
      const getName = () => name;
      const getPrice = () => price;
      return { getName, getPrice };
    }
    const app = appetizer(name, price);
    appList.push(app);
  };

  createApp("Boneless Wings" , 12);
  createApp("Nachos", 10);
  createApp("Spinach Dip", 12);

  appList.forEach(item => {
    const appLi = document.createElement("li");
    appLi.textContent = `${item.getName()} - $${item.getPrice()}`
    appUl.appendChild(appLi);
  })
  appDiv.appendChild(appUl);
  appDiv.classList.add("appDiv");
  
  return appDiv;
}

export { buildAppMenu }