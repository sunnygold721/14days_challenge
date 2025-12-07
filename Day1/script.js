const buttonElement = document.querySelector('.js_butt'); // Day1 start
let changeBack = false;
buttonElement.addEventListener("click", () => {
    changeBack = !changeBack;
    if (changeBack) {
        buttonElement.innerHTML = "Day 1: Done";

    }else {
        buttonElement.innerHTML = 'changes text'
        }
});