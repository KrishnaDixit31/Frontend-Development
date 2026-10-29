import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setinputValue] = useState({ id: "", content: "", checked: false });

  function handleInputChange(value) {
    setinputValue({ id: value, content: value, checked: false });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onAddTodo(inputValue);
    setinputValue({ id: "", content: "", checked: false });
  }

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            placeholder="Plan your day..."
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
