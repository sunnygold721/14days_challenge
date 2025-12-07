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
        <button class="js_del del-style" style="background-Color :${todoList[i].completed ? 'red' : 'green'}">Delete</button>
        `
        todoDisplay += Html;
    }
    displayElement.innerHTML = todoDisplay
    displayElement.style.color = 'black'
        delElement()
    };

    function delElement() {
     const clear = document.querySelectorAll('.js_del');
        clear.forEach((value, index) =>{
            value.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList()
   });
        })

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