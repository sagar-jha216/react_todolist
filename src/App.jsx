import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

const [todoItems , setTodoItems] =useState([]);

const handleNewItem = ({itemName, itemDueDate}) => {
  const newTodoItems = [...todoItems, {name : itemName , 
    dueDate : itemDueDate}];
    setTodoItems(newTodoItems);
}

const handleDeleteItem = (todoItemName) => {
  console.log(`Item deleted : ${todoItemName}`);
  const newTodoItems=todoItems.filter(item=>item.name !== todoItemName);
  setTodoItems(newTodoItems);
}

  
  return (
    <>
        <center className="todo-container">
          <AppName/>
          <AddTodo onNewItems={handleNewItem}/>
          {todoItems.length === 0 && <WelcomeMessage/>}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
          
        </center>
    </>
  )
}

export default App
