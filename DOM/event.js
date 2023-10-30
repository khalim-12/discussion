const para = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");
const btn = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const item = document.querySelector("#it");
const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("limit");
const heading = document.querySelector("h2");
const button = document.getElementById("btn");
const form = document.getElementById("item-form");

//formInout
function onInput(e) {
  //console.log(e.target.value);
  heading.textContent = e.target.value;
}
function onChecked(e) {
  // console.log(e.target.checked);
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}
function onFocus() {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "2px";
  itemInput.style.outlineColor = "green";
}
function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}

function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  if (item === "" || priority === "0") {
    alert("Please fill in all fields");
    return;
  }
  console.log(item, priority);
}
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  // const item = formData.get('item');
  // const priority = formData.get('priority')
  // console.log(item, priority);
  const entries = formData.entries();
  // console.log(entries);
  for (let entry of entries) {
    console.log(entry[1]);
  }
}
itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
//   form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);
button.addEventListener("click", () => {
  alert("Button was clicked");
});
function run() {
  //para.style.color = "red";
  console.log(itemList.className);
  // para.className = "card dark";
  //classList
  //console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));
  para.classList.toggle("dark");
  items.forEach((item, index) => {
    item.style.color = "red";
    if (index === 2) {
      item.style.color = "green";
    } else if (index === 0) {
      item.style.color = "blue";
    } else if (index === 3) {
      item.style.color = "orange";
    }
  });
}

document.querySelector(".btn1").onclick = run;
//addEventListener
//u can re use the btn
btn.addEventListener("click", function () {
  alert("Test Button clicked");
});
btn.addEventListener("click", () => console.log("still on test btn clicked"));
/**setTimeout(()=>clearBtn.removeEventListener('click',onClear),5000);
 * setTimeout(()=>clearBtn.click(), 5000)
 */
function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  items.forEach((item) => item.remove());
}
document.querySelector(".btn3").onclick = onClear;
//Mouse event
const onMouseDown = () => {
  item.style.color = "red";
};
const onMouseUp = () => {
  console.log("Mouse moved up");
};
const onMouseOver = () => {
  console.log("mouse Over");
};
//event listener
item.addEventListener("mousedown", onMouseDown);
item.addEventListener("mouseup", onMouseUp);
items.addEventListener("mouseover", onMouseOver);
//event object

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link was clicked");
});
window.addEventListener("resize", () => {
  const res = `Resized to ${window.innerWidth} * ${window.innerHeight}`;
  console.log(res);
});
window.addEventListener("scroll", () => {
  const scroll = `Scrolled: ${window.scrollX} * ${window.scrollY} `;
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
window.addEventListener("focus", () => {
  document.querySelector("p").forEach((p) => {
    p.style.color = "blue";
  });
});
window.addEventListener("blur", () => {
  document.querySelector("p").forEach((p) => {
    p.style.color = "black";
  });
});
//KeyBoard Events
//Keycode info
//form-Input
