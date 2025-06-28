function GlassTaskApp() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>GlassTask</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="What needs to be done?"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<GlassTaskApp />, document.getElementById("root"));
