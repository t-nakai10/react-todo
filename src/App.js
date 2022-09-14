import { useState, useRef } from "react";
import TodoList from "TodoList";

function App() {
  /**
   * useState() hooks で状態を管理.
   * - 引数に初期値を設定できる.
   **/
  const [todos, setTodos] = useState([
    { name: "todo", id: 1, completed: false },
  ]);

  /**
   * useRef() は DOM の監視.
   * - state の更新時のみ再描画される.
   * - useState() でも同じようなことができるが値が変化する（文字が入力される）毎に再描画が発生する.
   * - DOM ノードの位置やサイズを測定は useCallback() を使用する.
   */
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // button をクリックすることで input の値を取得できる.
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      // スプレッド構文. 前のTodoに対して右側のオブジェクトを追加する.
      return [...prevTodos, { id: "1", name: name, completed: false }];
    });
  };

  return (
    <div className="App">
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>
        <p>残りのタスク: 0</p>
      </div>
    </div>
  );
}

export default App;
