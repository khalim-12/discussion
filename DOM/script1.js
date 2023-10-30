let output2;
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my-element");
// div.innerText = 'hello World'
const text = document.createTextNode("Hello World Appended");
div.appendChild(text);
document.body.appendChild(div);
// console.log(div);

const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[3].style.color = "Blue";
//Parent node
const child = document.querySelector(".child");
output1 = child.parentNode;
child.parentNode.style.backgroundColor = "#ccc";
// console.log(output1);

//Siblings
const secondItem = document.querySelector(".child:nth-child(2)");
output2 = secondItem.nextSibling;
//console.log(output2);
