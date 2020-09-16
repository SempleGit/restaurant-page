console.log("index.js loaded");

import { buildHeader } from "./buildHeader"
const content = document.querySelector("#content");

content.appendChild(buildHeader());