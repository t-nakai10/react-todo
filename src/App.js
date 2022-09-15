import { useState, useRef } from "react";
import TodoList from "TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  /**
   * useState() hooks で状態を管理.
   * - 引数に初期値を設定できる.
   **/
  const [todos, setTodos] = useState([]);

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
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  // チェックボックスの状態を変更するための関数.
  const toggleTodo = (id) => {
    // 一旦 todos をコピーする. 理由は状態変数で管理しているから.
    // @todo: ミュータブル・イミュータブルについて調べる.
    const newTodos = [...todos];
    // todo の id とマッチしてるものだけ todo に入れる.
    const todo = newTodos.find((todo) => todo.id === id);
    // 値の更新. チェックの入れ替えのため反転させるだけでOK.
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = () => {
    // 終わってないもので新しく作る.削除というか作り直しの意味のほうが近いがボタン的に削除なので関数名はそのままにしておく.
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクを削除</button>
      <div>
        <p>残りのタスク: {todos.filter((todo) => !todo.completed).length}</p>
      </div>
    </div>
  );
}

export default App;
