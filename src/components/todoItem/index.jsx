import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/slices/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
