function TodoFilter({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="todo-filter">
      <p>Filter:</p>
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;