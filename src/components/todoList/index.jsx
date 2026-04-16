import { useSelector } from "react-redux";
import TodoItem from "../todoItem/index";
import styles from "./styles.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
