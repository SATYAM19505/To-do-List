let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", btnClicked);

function btnClicked(){
  if(input.value != ""){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("delbtn");
    item.append(btn);
  }

  input.value = "";
} 

ul.addEventListener("click", function(event){
  if(event.target.nodeName.toLowerCase() == 'button'){
    let listItem = event.target.parentElement;
    listItem.remove();
  }
})
