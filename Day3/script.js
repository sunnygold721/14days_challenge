const change = document.querySelector(".js_color");
function changeBack() {
const r = Math.floor(Math.random() * 250);
const g = Math.floor(Math.random() * 200);
const b = Math.floor(Math.random() * 150);
change.style.backgroundColor = `rgb(${r},${g},${b})`
};
change.addEventListener("click", changeBack);