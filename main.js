const form = document.querySelector (".form1");
const fromForm = document.querySelector("#todo-item");

const todoList = document.querySelector(".todolist1");

//const todos = []

const todos = [
  {
    text: "item",
    isDone: false,
  },
  {

  }
]

function drawToDoList() {
  
  while (todoList.firstChild){
    todoList.removeChild(todoList.firstChild);
  }
  
  for (let i = 0; i < todos.length; i++){
    

    const listItem = document.createElement("li");
    listItem.textContent = todos[i].text;

    if(todos[i].isDone === true) {
      listItem.classList.add("done");
    }


    const todoButton = document.createElement("button")
    todoButton.textContent = "Delete";
    todoButton.classList.add("todoDelete");

    todoButton.dataset.index = i;

    todoButton.addEventListener("click", deleteTodo);

    const todoDoneButton = document.createElement("button");
    todoDoneButton.textContent = "Done";

    todoDoneButton.dataset.index = i;

    todoDeleteButton.addEventListener("click", doneTodo);

    listItem.appendChild(todoButton);

    listItem.appendChild(todoDoneButton);

    todoList.appendChild(listItem);
  }
}

function deleteTodo(event){

  todoDeleteIndex = event.target.dataset.index;

  todos.splice(todoDeleteIndex, 1);

  drawToDoList();
}



function doneTodo(event) {
  console.log("mark done");

  todoDeleteIndex = event.target.dataset.index;

  todos[todoDeleteIndex].isDone = !todos[todoDeleteIndex].isDone;

  drawToDoList();
}

function addTodo(event) {
  event.preventDefault();

  fromForm.value;

 // todos.push(fromForm.value)

 todos.push(
    {
      text: fromForm.value,
      isDone: false,
    }
 )

  console.log(todos);

  form.reset();

  drawToDoList();

}

form.addEventListener("submit", addTodo);
//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
//const appID = "app";
//const headingText = "To do. To done. ✅ TEST";

// Variables

// DOM Elements
//let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
//function inititialise() {
  // If anything is wrong with the app container then end
  //if (!appContainer) {
    //console.error("Error: Could not find app contianer");
    //return;
  }

  // Create an h1 and add it to our app
  //const h1 = document.createElement("h1");
  //h1.innerText = headingText;
  //appContainer.appendChild(h1);

  // Init complete
  //console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

//inititialise();
