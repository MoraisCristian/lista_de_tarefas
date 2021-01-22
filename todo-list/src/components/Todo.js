import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa'


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div >
        {todo.text}
      </div>
      <div className='icons'>
        <FaTimes
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <FaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <FaCheck key={todo.id} onClick={() => completeTodo(todo.id)} className="check-icon"/>
      </div>
    </div>
  ));
};

export default Todo;