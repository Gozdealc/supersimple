const todoList = [
    {
    name: 'make dinner',
    dueDate: '2022-12-22'
    },
    {
    name: 'wash dishes',
    dueDate: '2022-12-20' 
    }
  ];

renderTodoList();
function renderTodoList() {
let todoListHTML =  '';
// Arrow function
todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    // const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button onclick = "
            todoList.splice(${index}, 1);
            renderTodoList();
        " class = "delete-todo-button" >Delete</button>
    `;
    todoListHTML += html;

})
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
}
function addToDo() {
    const inputElement = document.querySelector('.js-input-name')
    const name = inputElement.value;

    const dateInputElement = document.querySelector ('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push( {
    name,
    dueDate 
} );

    inputElement.value = '';
    
    renderTodoList();
}

