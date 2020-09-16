
const buildHeader = () => {
  const header = document.createElement("header");
  const mainHeading = document.createElement("h1");
  const mainImage = document.createElement("img");

  mainHeading.setAttribute("id", "main-heading");
  mainHeading.textContent = "Dante's Induction";

  mainImage.setAttribute("id", "main-image");
  mainImage.setAttribute("src", "images/flames.JPG");

  header.appendChild(mainHeading);
  header.appendChild(mainImage);

  return header;
};

export { buildHeader }