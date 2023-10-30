let output;
output = document.all;
// console.log(output);
const title = document.getElementById("app-title");
//get/change content
console.log(title.textContent);
title.textContent = "Hello World";
title.innerText = "Hello again";
title.innerHTML = "<strong>Shopping-List</strong>";
//Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '20px';
title.style.borderRadius = '50px';
//document.querySelector()
console.log(document.querySelector('p'));
const para = document.querySelector('p');
para.style.color = 'red'
para.style.fontSize = '25px'
//Use these methods on other elements
