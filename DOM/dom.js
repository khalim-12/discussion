// console.log(window);
// console.log(document.body)
//console.log(document.body.innerHTML);
// documen.body.innerHTML = "<h1>good girl</h1>";
// console.log(document.getElementById("main"));
// const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main</h1>";
//document.querySelector('#main h1').innerText = 'changed';
//insertAfter
//insertBefore
//replace
//Quick & Dirty
const checkbox = document.getElementById("limit");
function onChecked(e) {
  console.log(e.target.checked);
}
checkbox.addEventListener("input", onChecked);
function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item}
    <button class="remove-item btn btn-danger ">
    x
   </button >`;
  document.querySelector(".items").appendChild(li);
}
//clean & Perfomance
function createNewItem(item3) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item3));
  const button = document.createElement("button");
  //button.appendChild(document.innerText('x'))
  //parent.childNodes[3].innerText = "Child One";
  button.className = "btn btn-danger";
  //   const icon = document.createElement("i");
  //   icon.className = "fa-                                                                                                                                                                                                                                                             fa-xmark";
  //   button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}

createListItem("Eggs");
createNewItem("Cheese");

/*function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li')
  li.textContent = 'Replaced First';
  firstItem.replaceWith(li);
}
replaceFirstItem();
replaceSecondItem()
replaceAllItems()

function replaceSecondItem() {
    const second = document.querySelector('li:nth-child(2)');
    second.outerHTML = '<li>Replaced Second</li>';

} 
function replaceAllItems() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item,index) => {
    item.outerHTML = '<li>Replace All</li>'
    })
}
//remove & remove child
function removeClearButton(){
    const rr = document.querySelector('#clear');
    rr.remove();
}
function removwItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li)
}
function removwItem2(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber];
    ul.removeChild(li)
}

function removeItem3(itemNumber){
    const li = document.querySelector('li');
    li[itemNumber - 1].remove();
}
removeItem3(2)
**/
