import { useState } from "react";
import TodoList from "TodoList";

function App() {
  /**
   * useState() hooks で状態を管理.
   * - 引数に初期値を設定できる.
   **/
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <div className="App">
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>
        <p>残りのタスク: 0</p>
      </div>
    </div>
  );
}

export default App;
