import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/todos", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(setTodos);
  }, [token]);

  const addTodo = async () => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ text })
    });
    setTodos([...todos, await res.json()]);
    setText("");
  };

  const toggleTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { Authorization: token }
    });
    const updated = await res.json();
    setTodos(todos.map(t => t._id === id ? updated : t));
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
      headers: { Authorization: token }
    });
    setTodos(todos.filter(t => t._id !== id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div className="container">
      <h2>My Todos</h2>
      <button onClick={logout} className="logout-btn">Logout</button>
      <div className="add-todo">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            <span
              onClick={() => toggleTodo(todo._id)}
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
