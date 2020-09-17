const buildContact = () => {
  const contentContact = document.querySelector("#contentContact");
  console.log("building");
  
  contentContact.appendChild(contactInfo());
}

const contactInfo = () => {
  const mainSection = document.createElement("section");
  const contactUl = document.createElement("ul");
  const info = ["Dante's Inferno", "1 Great Place", "Nashville, TN 37201", "555-555-5555"];

  contactUl.classList.add("noListStyle");
  info.forEach(i => {
    const constLi = document.createElement("li");
    constLi.textContent = `${i} `;
    contactUl.appendChild(constLi);
  });
  mainSection.appendChild(contactUl);
  return mainSection;
}

export { buildContact };

