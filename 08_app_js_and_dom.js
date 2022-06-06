const heading = document.getElementById("Hello");
const heading2 = document.getElementsByTagName("h2")[0];
const heading3 = document.getElementsByClassName("h2-class")[0];

//modern
const headingModern = document.querySelector(".h2-class");

console.dir(heading);
console.log(heading2);
console.log(heading3);
console.log(headingModern);

const anotherHeading2 = headingModern.nextElementSibling;
console.log(anotherHeading2);

const h2List = document.querySelectorAll("h2");
console.log(h2List);

setTimeout(() => {
  addStylesTo(heading, "JS");
}, 1500);

setTimeout(() => {
  addStylesTo(headingModern, "Java", "blue");
}, 3000);

setTimeout(() => {
  addStylesTo(anotherHeading2.children[0], "Html", "yellow", "2rem");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";

  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  console.log("click");
  if (heading.style.color === "red") {
    heading.style.color = "black";
    heading.style.backgroundColor = "red";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "black";
  }
};

headingModern.addEventListener("dblclick", () => {
  if (headingModern.style.color === "blue") {
    headingModern.style.color = "white";
    headingModern.style.backgroundColor = "green";
  } else {
    headingModern.style.color = "red";
    headingModern.style.backgroundColor = "yellow";
  }
});

heading.on;
