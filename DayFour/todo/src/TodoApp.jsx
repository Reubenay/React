import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import "./TodoApp.css";

 function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addTodo(text) {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const total = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-app">
      <h2> My Todo List</h2>

      <TodoInput onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <div className="todo-footer">
        <p>
          Total: {total} tasks | Completed: {completedCount}
        </p>
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoApp;