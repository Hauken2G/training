const container = document.querySelector("#container");
// div with text content
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// Paragraph red text 
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I’m red!";
paragraph.style.cssText = "color: red; background: white;";

// h3 with blue text
const text = document.createElement("h3");
text.textContent = "I’m a blue h3!";
text.style.cssText = "color: blue; background: white;";

// new div inside the div // 
const box = document.createElement("div");
box.classList.add("anotherDiv");

const textT = document.createElement("h1");
textT.textContent = "I’m a black h1!";
textT.style.cssText = "color: black; background: white;";
// end of the div inside the div //

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(text);
container.appendChild(box);

const btn = document.querySelector("#btn");
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });