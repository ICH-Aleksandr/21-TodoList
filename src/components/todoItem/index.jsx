import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/slices/todosSlice";
import styles from "./styles.module.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </span>
      <button
        className={styles.completeBtn}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
