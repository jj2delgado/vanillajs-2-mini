const todoForm = document.querySelector('form')

function addTodo(event){
    event.preventDefault()
    const todo = document.createElement('li')
    const todoText = document.getElementById('item').value
    todo.innerText = todoText
    todo.addEventListener('click', completeTodo)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'x'
    deleteBtn.addEventListener('click' , removeTodo)
    todo.append(deleteBtn)

    const todoList = document.querySelector('ul')
    todoList.appendChild(todo)
}

function removeTodo(event){
    event.target.parentNode.remove()
}

function completeTodo(event){
    let ariaValue = event.target.getAttribute('aria-checked')

    if(ariaValue === 'true'){
        event.target.setAttribute('aria-checked' , 'false')
    }
    else{
        event.target.setAttribute('aria-checked', 'true')
    }
}


todoForm.addEventListener('submit', addTodo)

