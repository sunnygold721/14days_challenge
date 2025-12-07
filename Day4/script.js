const show = document.querySelector(".js_form");
let submit = document.querySelector(".js_submit");
let inputElement = document.querySelector('.js_input')

function errorDisplay () {
    const inputElement = document.querySelector(".js_input");
    let input = inputElement.value;
    if (!input){
        show.innerHTML = `Error! write something.`
        show.style.color = 'red'
    }
    else{
        show.innerHTML = input;
        show.style.color = 'black'
    }
    inputElement.value='';
};
submit.addEventListener('click', errorDisplay);
inputElement.addEventListener('keydown', (Event) => {
        if (Event.key === 'Enter') {
            errorDisplay();
        }
});