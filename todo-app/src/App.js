import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: todo.length + 1,
      title: value,
      completed: false,
    };
    if (value) {
      setTodo([...todo, newTodo]);
      setValue("");
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setTodo(res));
  }, []);

  return (
    <div className="App">
      <h1>TODO APPLication</h1>
      <h2>Add todo</h2>
      <input
        type="text"
        value={value}
        placeholder="Type your toddo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD TODO</button>
      {todo.map((todo) => (
        <div key={todo.id} className="todo-list">
          <p>Task : {todo.title}</p>
          <p> Done : {todo.completed ? "YES" : "NO"}</p>
          <button onClick={handleDone}>
            {todo.completed ? "Task Not Done" : "Task Done"}{" "}
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
