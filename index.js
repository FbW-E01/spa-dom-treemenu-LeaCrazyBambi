const tree = document.getElementById("tree");
console.log(tree);

tree.addEventListener("click", (e) => {
  if (e.target.children.length === 0) {
    return;
  }
  if (e.target.children[0].style.display === "none") {
    e.target.children[0].style.display = "";
  } else {
    e.target.children[0].style.display = "none";
  }
});
