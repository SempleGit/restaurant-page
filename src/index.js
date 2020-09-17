console.log("index.js loaded");

import { buildHeader } from "./buildHeader"
import { buildAppMenu } from "./appMenu"
import { clearContent } from "./clearContent"

const main = document.getElementById("header");
const tabHeader = document.querySelectorAll(".tabHeader");

tabHeader.forEach(tab => tab.addEventListener('click', (e) => {
    const tabClick = e.target.getAttribute(["data-key"]);
    switch (tabClick) {
      case "appetizers":
        underLineHeader(tabClick);
        clearContent();
        buildAppMenu();
        break;
      default:
        underLineHeader(tabClick);
        clearContent();
    }
    console.log(e.target.getAttribute(["data-key"]));
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
// buildMenu();