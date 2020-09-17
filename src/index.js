console.log("index.js loaded");

import { buildHeader } from "./buildHeader"
import { buildAppMenu } from "./appMenu"
import { buildDrinkMenu } from "./drinkMenu"
import { buildEntreeMenu } from "./entreeMenu"
import { clearContent } from "./clearContent"
import { buildContact } from "./contact"

const main = document.getElementById("header");
const tabHeader = document.querySelectorAll(".tabHeader");

tabHeader.forEach(tab => tab.addEventListener('click', (e) => {
    const tabClick = e.target.getAttribute(["data-key"]);
    clearContent();
    underLineHeader(tabClick);
    switch (tabClick) {
      case "appetizers":
        buildAppMenu();
        break;
      case "contact":
        buildContact();
        break;
      case "drinks":
        buildDrinkMenu();
        break;
      case "entrees":
        buildEntreeMenu();
        break;
    }
  }))

const underLineHeader = (headerKey) => {
  const headers = document.getElementsByTagName("H2");
  Array.from(headers).forEach(header => {
    if (header.getAttribute(["data-key"]) == headerKey) {
      header.classList.add("selectedTab");
    } else {
      header.classList.remove("selectedTab");
    }
  })
}

main.appendChild(buildHeader());