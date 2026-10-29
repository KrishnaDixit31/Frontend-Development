import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getlocalTododata, setlocalTododata } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getlocalTododata());

  function handleFormSubmit(inputValue) {
    const { id, checked } = inputValue;
    const content = inputValue.content.trim();

    if (!content) return;

    const Iftaskmatched = task.find((curTask) => curTask.content == content);
    if (Iftaskmatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }

  //? Local Storage
  setlocalTododata(task);

  //? Delete Task
  const handleDeleteTask = (value) => {
    const updateTask = task.filter((curTask) => curTask.content !== value);
    setTask(updateTask);
  };

  //? Complete Task
  const handleCheckedTask = (value) => {
    const updateTask = task.map((curTask) => {
      if (curTask.content === value) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateTask);
  };

  //? Clear All Task
  const handleClearAllTask = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To-Do List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrderlist">
        <ul>
          {task.length === 0 ? (
            <p className="empty-msg">
              Your list is empty. Add a task to get started!
            </p>
          ) : (
            task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTask={handleDeleteTask}
                  onHandleCheckedTask={handleCheckedTask}
                />
              );
            })
          )}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAllTask}>
          Clear All
        </button>
      </section>
    </section>
  );
};
