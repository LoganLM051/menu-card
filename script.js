/* Step 3 - finding the elements*/
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");
/* Step 4 - Handle the submit*/
function handleSubmit(event){
    event.preventDefault();
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length + " items today.";
    menuText.textContent = "";
/* Step 5, looping*/
    for (let i = 0; i < menu.length; i++){
        menuText.textContent = menuText.textContent + menu[i].name + " — $" + menu[i].price + "\n";
    }
}

form.addEventListener("submit", handleSubmit);