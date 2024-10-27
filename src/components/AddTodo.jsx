import React, { useState } from 'react'

export default function AddTodo({onNewItems}) {
    
    const [todoName , setTodoName]=useState();
    const [todoDate , setTodoDate]=useState();

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setTodoDate(event.target.value);
    };

    const handleOnButtonClicked = () =>{
        onNewItems({ itemName: todoName, itemDueDate: todoDate });
        setTodoName("");
        setTodoDate("");
    };

  return (
    <div>
        <div className="row kg-row">
            <div className="col-4">
                <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
            </div>
            <div className="col-4">
                <input type="date" onChange={handleDateChange} value={todoDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button"
                onClick={handleOnButtonClicked}
                >Add</button>
            </div>
        </div>
    </div>
  )
}
