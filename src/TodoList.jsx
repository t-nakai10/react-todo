import React from "react";

/**
 * 親コンポーネントの useState の todos を受け取るには props を引数に渡す.
 * 引数に props を受け取り props.todos とできるが、一般的にはオブジェクトで記載
 **/
const TodoList = ({ todos }) => {
  return (
    <div>
      <p>{todos}</p>
    </div>
  );
};

export default TodoList;
