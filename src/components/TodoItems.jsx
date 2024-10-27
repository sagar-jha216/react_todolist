import React from 'react'
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

const TodoItems = ({todoItems , onDeleteClick}) => {
  return (
    <>
        <div className="items-container">
            {todoItems.map(item =>
               <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>)}   
        </div>
    </>
  )
}

export default TodoItems;
