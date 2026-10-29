import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTask,
  onHandleCheckedTask,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checked" : "unchecked"}>{data}</span>
      <button className="delete-btn" onClick={() => onHandleDeleteTask(data)}>
        <MdDelete />
      </button>
      <button className="check-btn" onClick={() => onHandleCheckedTask(data)}>
        <FaCheck />
      </button>
    </li>
  );
};
