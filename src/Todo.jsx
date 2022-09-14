import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  // input が変更されたとき toggleTodo を呼び出し、値を更新する.
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
          readOnly
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
