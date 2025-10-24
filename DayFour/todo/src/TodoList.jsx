function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "completed" : ""}
          onClick={() => onToggle(todo.id)}
        >
          <span>
            {todo.completed ? "☑" : "☐"} {todo.text}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
