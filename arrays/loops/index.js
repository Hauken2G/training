const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I’m red!";
p.style.cssText = "color: red; background: white;";

const text = document.createElement("h3");
text.textContent = "I’m a blue h3!";
p.style.cssText = "color: blue; background: white;";
// new div inside the div // 
const content = document.createElement("div");
content.classList.add("anotherDiv");
const textT = document.createElement("h1");
textT.textContent = "I’m a black h1!";
p.style.cssText = "color: black; background: white;";
// end of the div inside the div //

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(text);


