let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

// const populateTodos = () => {
//   const ol = document.getElementById('todo-list');

//   for (let index = 0; index < arrayOfTodos.length; index++) { 
//     const li = document.createElement("li")
//     const title = arrayOfTodos[index].title
//     const listItemText = document.createTextNode(title);
//     li.appendChild(listItemText)
//     document.body.insertBefore(li, ol)
  
//   }





const populateTodos = () => {
  for(i=0; i < (arrayOfTodos.length)/10; i++) {
  const list = document.getElementById('todo-list')
  const listItem = document.createElement('li')
  const task = document.createTextNode(arrayOfTodos[i].title)
  listItem.appendChild(task)
  list.appendChild(listItem)
  if (arrayOfTodos[i].completed === false) {
    listItem.style.color = "red"
  } else {
    listItem.style.color = "green"
    listItem.style.textDecoration = "line-through"
  }
  }
  }

  const clearTodos = () => {
    console.log("!!!!!")
    document.getElementById('todo-list').innerHTML = ""
  }

  