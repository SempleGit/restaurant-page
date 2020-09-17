const clearContent = () => {
  const tabContent = document.querySelectorAll(".tabContent");
  tabContent.forEach(node => {
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
  });
}

export { clearContent }