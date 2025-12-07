const buttonElement = document.querySelector('.js_butt'); // Day1 start

buttonElement.addEventListener("click", () => {
    buttonElement.innerHTML = "Day 1: Done";
}); // Day 1 End

//Day 2 start
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

}); // Day 2 End

//Day 3 Start
const change = document.querySelector(".js_color");
function changeBack() {
const r = Math.floor(Math.random() * 250);
const g = Math.floor(Math.random() * 200);
const b = Math.floor(Math.random() * 150);
change.style.backgroundColor = `rgb(${r},${g},${b})`
};
change.addEventListener("click", changeBack); // Day 3 End

//Day 4 start
const show = document.querySelector(".js_form")
let form = document.querySelector(".js_submit");

form.addEventListener("click", () => {
    const inputElement = document.querySelector(".js_input");
    let input = inputElement.value;
    if (!input){
        show.innerHTML = `Error! write something.`
        show.style.color = 'red'
    }
    else{
        show.innerHTML = input;
    }
    inputElement.value='';
});
const guessbutton = document.querySelector('.js_buttonGuess'); // Day 4 End

//Day 6 Start jump day 5
guessbutton.addEventListener('click', () => {
    const computer = Math.floor(Math.random() * 10) + 1 ;
    const guess= +prompt('guess Number', 0)
    
    if (guess === computer) {
        document.querySelector('.js_guessDisplay').innerHTML = alert(`Answer: ${computer}
Correct... 'you win' 🎉🎉🎉`)
    }else {
        document.querySelector('.js_guessDisplay').innerHTML =alert(`Answer: ${computer}
Wrong! 'Try again' 🤣🤣🤣`)
};
}); // Day 6 End 

// Back to Day 5 Start
const genInput = document.querySelector('.gen');
const clearInput = document.querySelector('.clear');
 const input = document.querySelector('.num');
const numElement = document.querySelector('.numInput');

genInput.addEventListener("click", () => {
   
    const n = Number(input.value)
    if (!Number.isFinite(n) || n === 0 || n < 1 || n > 10){
        numElement.innerHTML = 'Go back and put any Number btw 1 - 10 🙄😤'
        numElement.style.color = 'red'
        return;
    }; 
    
    let result ='';
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}<br>`
    } numElement.innerHTML = result;
    numElement.style.color = 'black';   
});
clearInput.addEventListener("click", () => {
    input.value = '';
    numElement.innerHTML = '';
})// Day 5 End

//Day 7 Start
    setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minute =time.getMinutes();
    const sec = time.getSeconds();

       const AMPM = hours >= 12 ? 'PM' : 'AM';
       const hour =hours % 12 || 12;

       const h =hour.toString().padStart(2, "0");
       const m =minute.toString().padStart(2, "0")
       const s =sec.toString().padStart(2, "0");

       const r = Math.round(Math.random() * 255);
       const g = Math.round(Math.random() * 255);
       const b = Math.round(Math.random() * 255);

      let timeElement = document.querySelector('.time')
       
       timeElement.innerHTML = `${h} : ${m} : ${s} ${AMPM}`;
       timeElement.style.color = `rgb(${r},${g},${b})`
       timeElement.style.border = `solid 4px rgb(${g},${b},${r})`

    }, 1000); // Day 7 End

    // New week Day 8 Start
    let todoList = [];

    function renderTodoList() {
    const displayElement = document.querySelector('.toDo');

     let todoDisplay = '';

     for (let i = 0; i < todoList.length; i++) {
        const todoLists = todoList[i];
        const input = todoLists;
        const Html=`
        <div class="todo">
            <input type='checkbox' ${todoLists.completed ? 'checked' : ''} onclick="todoList[${i}].completed = this.checked;  renderTodoList()">
            <span style="text-decoration :${todoLists.completed ? "Line-through" : "none"}">${input.text}</span>
        </div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList()" class="del-style">Delete</button>
        `
        todoDisplay += Html;
        
    }
    displayElement.innerHTML = todoDisplay
    displayElement.style.color = 'black'
    }

    function todo() {
        const displayElement = document.querySelector('.toDo');

        let input = inputElement.value.trim()
        
        if (!input){
            displayElement.innerHTML =`<p>Add-Tasks...</p>`
            displayElement.style.color = 'red'
           // displayElement.style.display ='flex'
        }else {
          todoList.push({text: input, completed: false});
            renderTodoList()
        }
        inputElement.value = ''
    }
    const addButton = document.querySelector('.todoButton')
    const inputElement = document.querySelector('.todoInput');
    addButton.addEventListener("click", todo);
    inputElement.addEventListener("keydown", (Event)=>{
        if (Event.key === 'Enter') {
            todo()
        }
    });













