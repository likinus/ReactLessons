import React from 'react';

const ToDoList = (props) => {
  return (
    <>
      {props.todos.map((todo) => (
        <div>{todo.description}</div>
      ))}
    </>
  );
};

export default ToDoList;
