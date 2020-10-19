import React from 'react';
import { addData } from '../Firebase/firebase';
import ToDoList from './ToDoList';

const ToDoForm = (props) => {
  let dropForm = (isDropped) => {
    props.dropForm(isDropped);
  };

  let onNewTextChange = (e) => {
    let text = e.target.value;
    props.updateNewText(text);
  };

  let newText = props.newToDo;

  return (
    <>
      <button onClick={() => dropForm(true)}>Add Task</button>
      {props.isAddTask ? (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input onChange={onNewTextChange} value={newText} type="text" />
            <button
              onClick={() => {
                addData(newText);
              }}>
              Add
            </button>
          </form>
        </div>
      ) : (
        <div>Need to add task</div>
      )}
      <ToDoList todos={props.todos} loading={props.loading} />
    </>
  );
};

export default ToDoForm;
