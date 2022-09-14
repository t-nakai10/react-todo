import React from "react";
import Todo from "Todo";

/**
 * 親コンポーネントの useState の todos を受け取るには props を引数に渡す.
 * 引数に props を受け取り props.todos とできるが、一般的にはオブジェクトで記載
 **/
const TodoList = ({ todos }) => {
  // 本来は好ましくないリレー.
  return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
};

export default TodoList;
