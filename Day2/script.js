const addElement = document.querySelector(".js_add");
const minusElement = document.querySelector(".js_minus");
const display = document.querySelector(".js_display")

let count = 0;

addElement.addEventListener("click", () => {
    count++;
    display.innerHTML = count;
});
minusElement.addEventListener("click", () => {
    count--;
       if (count < 0)
        count = 0;
    display.textContent = count;

}); 