import TodoList from "TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
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
